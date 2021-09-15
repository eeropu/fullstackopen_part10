import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
    const [ mutate, result ] = useMutation(DELETE_REVIEW, {
        onError: error => {
            console.error(error);
        }
    });

    const deleteReview = async (id) => {
        const response = await mutate({
            variables: {
                id
            }
        });
        return response;
    };

    return [ deleteReview, result ];
};

export default useDeleteReview;