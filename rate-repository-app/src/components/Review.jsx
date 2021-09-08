import React from 'react';
import { View, StyleSheet } from 'react-native';
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
    rating: {
        fontSize: 20,
        width: 28,
        height: 28,
        borderRadius: 14,
        borderStyle: 'solid',
        borderColor: 'blue',
        borderWidth: 2,
        textAlign: 'center'
    }
});

const Review = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <Text style={styles.rating}>{data.rating}</Text>
            </View>
            <View style={styles.column}>
                <View style={styles.row}>
                    <Text style={styles.boldedText}>{data.user.username}</Text>
                </View>
                <View style={styles.row}>
                    <Text>{data.createdAt.slice(0, 10)}</Text>
                </View>
                <View style={styles.row}>
                    <Text>{data.text}</Text>
                </View>
            </View>
        </View>
    );
};

export default Review;