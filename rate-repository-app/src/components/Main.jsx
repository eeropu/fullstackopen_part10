import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepositoryView from './SingleRepositoryView';
import ReviewForm from './ReviewForm';
import SignUpForm from './SignUpForm';
import UsersReviews from './UsersReviews';

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
                <Route path="/sign-up">
                    <SignUpForm />
                </Route>
                <Route path="/create-a-review">
                    <ReviewForm />
                </Route>
                <Route path="/my-reviews">
                    <UsersReviews/>
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