import {LoginParamsType} from '../../api/cards-api';
import {login, loginReducer} from './login-reducer';

let startState: {isLoggedIn: boolean }

beforeEach(() => {
    startState = {isLoggedIn: false}
})


test('isLoggedIn should be true', () => {
    let log: LoginParamsType = {
        email: 'rmohwal@gmail.com',
        password: 'reactdeveloper888',
        rememberMe: true
    }

    let action = login.fulfilled({value: true}, '', log)

    const endState = loginReducer(startState, action)
    expect(endState.isLoggedIn).toBe(true)
})
