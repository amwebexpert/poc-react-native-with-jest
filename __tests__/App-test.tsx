import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

it('renders correctly', async () => {
    // given
    const { getByText, toJSON } = render(<App />);

    // when
    const welcome = getByText("Welcome to unit tested app!");

    // then
    expect(welcome).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
});
