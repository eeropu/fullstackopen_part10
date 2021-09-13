import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortRule) => {

    const sortBy = {
        orderBy: undefined,
        orderDirection: undefined
    };

    switch (sortRule) {
        case "Latest repositories":
            sortBy.orderBy = "CREATED_AT";
            sortBy.orderDirection = "DESC";
            break;
        case "Highest rated repository":
            sortBy.orderBy = "RATING_AVERAGE";
            sortBy.orderDirection = "DESC";
            break;
        case "Lowest rated repository":
            sortBy.orderBy = "RATING_AVERAGE";
            sortBy.orderDirection = "ASC";
            break;
        default:
            console.error(`invalid sort rule: ${sortRule}!`);
            break;
    }

    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: {
            orderBy: sortBy.orderBy,
            orderDirection: sortBy.orderDirection
        }
    });

    if (error) {
        console.error(error);
    }

    const repositories = data?.repositories;

    return { repositories, loading };
};

export default useRepositories;