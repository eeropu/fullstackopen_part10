import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";


const useSignUp = () => {
    const [ mutate, result ] = useMutation(SIGN_UP, {
        onError: error => {
            console.error(error);
        }
    });

    const signUp = async (user) => {
        const response = await mutate({
            variables: {
                user: { ...user }
            }
        });
        return response;
    };

    return [signUp, result];
};

export default useSignUp;