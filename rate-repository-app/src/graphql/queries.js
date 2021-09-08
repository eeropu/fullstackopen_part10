import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges { 
                node {
                    id,
                    ownerAvatarUrl,
                    fullName,
                    description,
                    language,
                    stargazersCount,
                    forksCount,
                    reviewCount,
                    ratingAverage
                }
            }
        }
    }
`;

export const GET_FULL_REPOSITORY_DETAILS = gql`
query repository($id: ID!){
    repository(id: $id){
        id,
        ownerName,
        name,
        createdAt,
        fullName,
        reviews {
            edges {
                node {
                    id,
                    user {
                        username,
                        id
                    },
                    rating,
                    createdAt,
                    text,
                }
            }
        },
        ratingAverage,
        reviewCount,
        stargazersCount,
        watchersCount,
        forksCount,
        openIssuesCount,
        url,
        ownerAvatarUrl,
        description,
        language,
        authorizedUserHasReviewed
    }
}`;

export const GET_AUTHORIZED_USER = gql`
    query {
        authorizedUser {
            id
            username
        }
    }
`;