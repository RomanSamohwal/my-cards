import {LoginParamsType} from '../../api/cards-api';
import {regReducer, signUp} from './register-reducer';

let startState: { isSignUp: boolean }

beforeEach(() => {
    startState = {isSignUp: false}
})

test('After registration isSignUp should be true', () => {
    let reg: LoginParamsType = {
        email: 'veronica@gmail.com',
        password: 'reactdeveloper',
    }

    let action = signUp.fulfilled({value: true}, '', reg)
    const endState = regReducer(startState, action)
    expect(endState.isSignUp).toBe(true)
})
