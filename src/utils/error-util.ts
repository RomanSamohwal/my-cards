import {setAppError} from '../app/app-reducer';
import {AxiosError} from 'axios';

type ThunkAPIType = {
    dispatch: (action: any) => any
    rejectWithValue: Function
}

export const handleError = (error: AxiosError, ThunkAPI: ThunkAPIType) => {
    if (error.response?.data.error) {
        ThunkAPI.dispatch(setAppError({error: error.response.data.error}))
        return ThunkAPI.rejectWithValue({error: error.response.data.error})
    } else {
        ThunkAPI.dispatch(setAppError({error: error.message}))
        return ThunkAPI.rejectWithValue({error: error.message})
    }
}