import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepositoryView from './SingleRepositoryView';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                <Route path="/sign-in">
                    <SignIn></SignIn>
                </Route>
                <Route path="/repository/:id">
                    <SingleRepositoryView />
                </Route>
                <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;