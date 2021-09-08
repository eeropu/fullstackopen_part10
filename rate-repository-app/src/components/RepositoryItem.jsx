import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useHistory } from 'react-router-native';
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

    const history = useHistory();

    const formatIntValue = (value) => {
        if (Number(value) > 1000) {
            return (Number(value) / 1000).toFixed(1) + 'k';
        } else {
            return value;
        }
    };

    const redirect = () => {
        history.push(`/repository/${data.id}`);
    };

    return (
        <Pressable onPress={redirect}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.profileImage} source={{ uri: data.ownerAvatarUrl }}/>
                    <View style={styles.column}>
                        <Text style={styles.boldedText} testID={`${data.id}:fullName`}>{data.fullName}</Text>
                        <Text testID={`${data.id}:description`}>{data.description}</Text>
                        <Text style={styles.language} testID={`${data.id}:language`}>{data.language}</Text>
                    </View>
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.bottomRowColumn}>
                        <Text style={styles.boldedText} testID={`${data.id}:stargazersCount`}>{ formatIntValue(data.stargazersCount) }</Text>
                        <Text testID={`${data.id}:stars`}>Stars</Text>
                    </View>
                    <View style={styles.bottomRowColumn}>
                        <Text style={styles.boldedText} testID={`${data.id}:forksCount`}>{ formatIntValue(data.forksCount) }</Text>
                        <Text testID={`${data.id}:forks`}>Forks</Text>
                    </View>
                    <View style={styles.bottomRowColumn}>
                        <Text style={styles.boldedText} testID={`${data.id}:reviewCount`}>{ formatIntValue(data.reviewCount) }</Text>
                        <Text testID={`${data.id}:reviews`}>Reviews</Text>
                    </View>
                    <View style={styles.bottomRowColumn}>
                        <Text style={styles.boldedText} testID={`${data.id}:ratingAverage`}>{ formatIntValue(data.ratingAverage) }</Text>
                        <Text testID={`${data.id}:rating`}>Rating</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default RepositoryItem;