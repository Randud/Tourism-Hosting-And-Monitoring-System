import React from 'react'; 
import {shallow} from 'enzyme'; 
import 'mutationobserver-shim';
import Login from '../Login';

describe('Login Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Login />).find('#login').exists()).toBe(true) 
    })
    it('renders a email input', () => {
        expect(shallow(<Login />).find('#email').length).toEqual(1)
    })
    it('renders a password input', () => {
        expect(shallow(<Login />).find('#password').length).toEqual(1)
    })
})