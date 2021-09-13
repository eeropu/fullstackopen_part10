import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";


const useCreateReview = () => {
    const [ mutate, result ] = useMutation(CREATE_REVIEW, {
        onError: error => {
            console.error(error);
        }
    });

    const createReview = async (review) => {
        const response = await mutate({
            variables: {
                review: { ...review }
            }
        });
        return response;
    };

    return [createReview, result];
};

export default useCreateReview;