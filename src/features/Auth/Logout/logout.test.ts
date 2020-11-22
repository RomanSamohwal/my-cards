import {logOut, logoutReducer} from './logout-reducers';

let startState: { isLogOut: boolean }

beforeEach(() => {
    startState = {isLogOut: false}
})

test('isLogOut should be true', () => {
    let action = logOut.fulfilled({isLogOut: true}, '')
    const endState = logoutReducer(startState, action)
    expect(endState.isLogOut).toBe(true)
})
