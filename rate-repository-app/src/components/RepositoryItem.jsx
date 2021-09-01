import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        display: 'flex'
    },
    profileImage: {
        width: 50,
        height: 50
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
        marginLeft: 5
    },
    boldedText: {
        fontWeight: 'bold'
    },
    language: {
        backgroundColor: '#0366d6',
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: 'flex-start'
    },
    bottomRow: {
        flexDirection: 'row',
        marginTop: 10
    },
    bottomRowColumn: {
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center'
    }
});

const RepositoryItem = ({ data }) => {

    const formatIntValue = (value) => {
        if (Number(value) > 1000) {
            return (Number(value) / 1000).toFixed(1) + 'k';
        } else {
            return value;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.profileImage} source={{ uri: data.ownerAvatarUrl }}/>
                <View style={styles.column}>
                    <Text style={styles.boldedText}>{data.fullName}</Text>
                    <Text>{data.description}</Text>
                    <Text style={styles.language}>{data.language}</Text>
                </View>
            </View>
            <View style={styles.bottomRow}>
                <View style={styles.bottomRowColumn}>
                    <Text style={styles.boldedText}>{ formatIntValue(data.stargazersCount) }</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.bottomRowColumn}>
                    <Text style={styles.boldedText}>{ formatIntValue(data.forksCount) }</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.bottomRowColumn}>
                    <Text style={styles.boldedText}>{ formatIntValue(data.reviewCount) }</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.bottomRowColumn}>
                    <Text style={styles.boldedText}>{ formatIntValue(data.ratingAverage) }</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;