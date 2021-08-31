import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight * 1.5,
        paddingBottom: Constants.statusBarHeight * 0.5,
        fontSize: 20,
        backgroundColor: 'black',
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'row',
    },
    link: {
        color: 'white',
        fontSize: 15,
        marginLeft: 5
    }
});

const AppBar = () => {

    const tabs = [
        { 
            name:'Repositories',
            link: '/'
        },
        {
            name: 'Sign in',
            link: '/sign-in'
        },
        
    ];

    const tabComponents = tabs.map((tab, index) => (
            <Link key={index} to={tab.link} style={styles.link}>
                <Text style={styles.link}>{tab.name}</Text>
            </Link>
        )
    );

    return (
        <View style={styles.container}>
            <ScrollView horizontal>{tabComponents}</ScrollView>
        </View>
    );
};

export default AppBar;