import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import useAuthorizedUser from './../hooks/useAuthorizedUser';
import Review from './Review';
import { useHistory } from 'react-router-native';
import useDeleteReview from './../hooks/useDeleteReview';

const styles = StyleSheet.create({
    linkButton: {
        margin: '5%',
        width: '90%',
        height: 30,
        backgroundColor: 'blue',
    },
    linkButtonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        padding: 3
    },
    separator: {
        height: 10,
    },
    viewRepositoryButton: {
        padding: 10,
        backgroundColor: 'blue',
        width: 150
    },
    deleteReviewButton: {
        padding: 10,
        backgroundColor: 'red',
        width: 150
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UsersReviews = () => {

    const { authorizedUser, refetch } = useAuthorizedUser({ includeReviews: true });

    const reviews = authorizedUser?.reviews.edges.map(item => {
        return {
            rating: item.node.rating,
            user: { username: item.node.repository.fullName },
            createdAt: item.node.createdAt,
            text: item.node.text,
            repositoryId: item.node.repository.id,
            id: item.node.id
        };
    });

    return (
        <View>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => <ReviewWithButtons data={item} refetch={ refetch } />}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
};

const ReviewWithButtons = ({ data, refetch }) => {
    const history = useHistory();
    const [ deleteReview ] = useDeleteReview();

    const redirectToRepository = () => {
        history.push(`/repository/${data.repositoryId}`);
    };

    const deleteRepository = () => {
        deleteReview(data.id);
        refetch();
    };

    return (
        <View>
            <Review data={ data } />
            <Pressable style={styles.viewRepositoryButton} onPress={redirectToRepository}>
                <Text>View repository</Text>
            </Pressable>
            <Pressable style={styles.deleteReviewButton} onPress={deleteRepository}>
                <Text>Delete review</Text>
            </Pressable>
        </View>
    );
};

export default UsersReviews;