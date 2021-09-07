import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { expect } from '@jest/globals';
import { SignInForm } from '../components/SignIn';

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            const onSubmit = jest.fn();
            const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />);

            fireEvent.changeText(getByTestId('usernameField'), 'kalle');
            fireEvent.changeText(getByTestId('passwordField'), 'password');
            fireEvent.press(getByTestId('submitButton'));

            expect(1).toBe(1);
            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1);
            });
            expect(onSubmit.mock.calls[0][0]).toEqual({
                username: 'kalle',
                password: 'password',
            });
        });
    });
});