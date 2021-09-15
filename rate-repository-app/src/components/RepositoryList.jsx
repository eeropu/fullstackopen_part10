import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import OrderBySelection from './OrderBySelection';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    list: {
        backgroundColor: '#e1e4e8'
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

    const [ sortRule, setSortRule ] = useState("Latest repositories");
    const { repositories } = useRepositories(sortRule);

    return <RepositoryListContainer repositories={ repositories } setSortRule={ setSortRule }/>;
};

export const RepositoryListContainer = ({ repositories, setSortRule }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            ListHeaderComponent={<OrderBySelection key={'orderSelection'} setSortRule={ setSortRule }/>}
            style={styles.list}
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <RepositoryItem key={item.id} data={item} />}
        />
    );
};

export default RepositoryList;