import { useQuery } from "@apollo/client";

import { GET_AUTHORIZED_USER } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useAuthorizedUser = () => {
    const authStorage = useAuthStorage();

    const { data, error, loading } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
        context: {
            Headers: {
                "Authorization": `Bearer ${authStorage.getAccessToken()}`
            }
        }
    });

    if (error) {
        console.error(error);
    }

    return { authorizedUser: data?.authorizedUser, loading };
};

export default useAuthorizedUser;