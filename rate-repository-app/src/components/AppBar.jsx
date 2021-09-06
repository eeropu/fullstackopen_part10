import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import { Link, useHistory } from 'react-router-native';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

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

    const { authorizedUser } = useAuthorizedUser();
    const authStorage = useAuthStorage();
    const history = useHistory();
    const apolloClient = useApolloClient();

    const tabs = [
        { 
            name:'Repositories',
            link: '/'
        },
        {
            name: 'Sign in',
            link: '/sign-in'
        }
    ];

    const tabComponents = tabs.map((tab, index) => {
            if (tab.name !== 'Sign in' || !authorizedUser) {
                return (
                    <Link key={index} to={tab.link} style={styles.link}>
                        <Text style={styles.link}>{tab.name}</Text>
                    </Link>);
            } else {
                return null;
            }
        }
    );

    const signOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        history.push('/');
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                { tabComponents }
                { authorizedUser ? 
                    <Link key={'signOut'} to={'/'} style={styles.link} onPress={signOut}>
                        <Text style={styles.link}>Sign out</Text>
                    </Link>
                    : null
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;