import {regReducer, signUp} from './register-reducer';
import {LoginParamsType} from '../../../api/api-types';

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
