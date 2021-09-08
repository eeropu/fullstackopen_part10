import React from 'react';
import { Pressable, View, StyleSheet, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import useFullRepositoryDetails from './../hooks/useFullRepositoryDetails';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import * as Linking from 'expo-linking';
import Review from './Review';

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
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryView = () => {
    const { id } = useParams();
    const { repository } = useFullRepositoryDetails(id);

    if (!repository) {
        return '';
    }

    const repositoryItemData = {
        id: repository.id,
        ownerAvatarUrl: repository.ownerAvatarUrl,
        fullName: repository.fullName,
        description: repository.description,
        language: repository.language,
        stargazersCount: repository.stargazersCount,
        forksCount: repository.forksCount,
        reviewCount: repository.reviewCount,
        ratingAverage: repository.ratingAverage,
    };

    const reviews = repository.reviews.edges.map(r => r.node);

    const openInGithub = () => {
        Linking.openURL(repository.url);
    };

    return (
        <View>
            <RepositoryItem data={repositoryItemData} />
            <Pressable onPress={openInGithub} style={styles.linkButton}>
                <Text style={styles.linkButtonText}>
                    Open in Github
                </Text>
            </Pressable>
            <FlatList
                data={reviews}
                renderItem={({ item }) => <Review data={item} />}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
};

export default SingleRepositoryView;