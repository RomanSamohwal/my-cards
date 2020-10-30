import {authReducer, login, signUp} from './auth-reducer';
import {LoginParamsType} from '../../api/cards-api';

let startState: { isSignUp: boolean, isLoggedIn: boolean }

beforeEach(() => {
    startState = {isLoggedIn: false, isSignUp: false}
})

test('After registration isSignUp should be true', () => {
    let reg: LoginParamsType = {
        email: 'veronica@gmail.com',
        password: 'reactdeveloper',
    }

    let action = signUp.fulfilled({value: true}, '', reg)
    const endState = authReducer(startState, action)
    expect(endState.isSignUp).toBe(true)
})


test('isLoggedIn should be true', () => {
    let log: LoginParamsType = {
        email: 'rmohwal@gmail.com',
        password: 'reactdeveloper888',
        rememberMe: true
    }

    let action = login.fulfilled({value: true}, '', log)

    const endState = authReducer(startState, action)
    expect(endState.isLoggedIn).toBe(true)
})
