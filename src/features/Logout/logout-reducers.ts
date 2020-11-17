import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppStatus} from '../../app/app-reducer';
import {authAPI} from '../../api/cards-api';

export const logOut = createAsyncThunk('auth/logOut',
    async (param, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await authAPI.logout()
            dispatch(setAppStatus({status: 'succeeded'}))
        } catch (err) {
            dispatch(setAppStatus({status: 'failed'}))
            return rejectWithValue(err.response.data.error)
        }
    })

const slice = createSlice({
    name: 'logout',
    initialState: {},
    reducers: {

    },
   /* extraReducers: builder => {

        })*/
})

export const logoutReducer = slice.reducer
