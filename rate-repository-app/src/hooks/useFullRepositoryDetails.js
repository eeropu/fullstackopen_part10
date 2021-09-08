import { useQuery } from "@apollo/client";
import { GET_FULL_REPOSITORY_DETAILS } from "../graphql/queries";

const useFullRepositoryDetails = ( id ) => {

    console.log(id);
    const { data, error, loading } = useQuery(GET_FULL_REPOSITORY_DETAILS, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id
        }
    });

    if (error) {
        console.error(error);
    }

    const repository = data?.repository;

    return { repository, loading };
};

export default useFullRepositoryDetails;