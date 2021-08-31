import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight * 1.5,
        paddingBottom: Constants.statusBarHeight * 0.5,
        paddingLeft: Constants.statusBarHeight,
        fontSize: 20,
        backgroundColor: 'black',
        opacity: 0.9
    },
    link: {
        color: 'white',
        fontSize: 15
    }
});

const AppBar = () => {

    const tabs = [
        'Repositories'
    ];

    const tabComponents = tabs.map((tab, index) => (
            <Pressable key={index} onPress={() => console.log('pressed!')}>
                <Text style={styles.link}>{tab}</Text>
            </Pressable>
        )
    );

    return <View style={styles.container}>{tabComponents}</View>;
};

export default AppBar;