import { useQuery } from "@apollo/client";

import { GET_AUTHORIZED_USER } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useAuthorizedUser = ({ includeReviews }) => {
    const authStorage = useAuthStorage();

    const { data, error, loading, refetch } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'network-only',
        context: {
            Headers: {
                "Authorization": `Bearer ${authStorage.getAccessToken()}`
            }
        },
        variables: {
            includeReviews
        }
    });

    if (error) {
        console.error(error);
    }

    return { authorizedUser: data?.authorizedUser, loading, refetch };
};

export default useAuthorizedUser;