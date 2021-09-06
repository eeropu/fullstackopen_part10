import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";



const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const [mutate, result] = useMutation(SIGN_IN, {
        onError: error => {
            console.error(error);
        }
    });

    const signIn = async ({ username, password }) => {
        const response = await mutate({ 
            variables: { 
                credentials: {
                    username, 
                    password 
                }
            }
        });
        await authStorage.setAccessToken(response.data.authorize.accessToken);
        apolloClient.resetStore();
        return response;
    };

    return [signIn, result];
};

export default useSignIn;