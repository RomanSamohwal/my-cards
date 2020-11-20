import axios from 'axios'
import {UserType} from '../features/Profile/ProfileInitState';

const localhost = 'http://localhost:7542/2.0/'

const settings = {
    withCredentials: true
}

const instance = axios.create({
    baseURL: localhost,
    ...settings
})

// api
export const authAPI = {
    signUp: async (data: LoginParamsType) => {
        const response = await instance.post<ErrorDataType>('auth/register', data);
        return response.data;
    },
    login: async (data: LoginParamsType) => {
        const response = await instance.post<SignInDataType>('auth/login', data);
        return response.data;
    },
    authMe: async () => {
        const response = await instance.post<GetMeDataType>('auth/me');
        return response.data;
    },
    logout: async () => {
        const response = await instance.delete<InfoType>('auth/me', {});
        return response.data;
    },
    forgot: async () => {
        const response = await instance.post<ErrorDataType>('auth/forgot', {});
        return response.data;
    },
    setNewPassword: async (data: LoginParamsType) => {
        const response = await instance.post<ErrorDataType>('auth/set-new-password', data);
        return response.data;
    },
    updateUsers: async (name: string, avatar: string) => {
        const response = await instance.put<UpdateUserDataType>('auth/me', {name, avatar});
        return response.data;
    }
}

//types
export type SignInDataType = UserType & { error: string; };

export type InfoType = {
    info: string
}

export type ErrorDataType = {
    error: string;
}

export type UpdateUserDataType = {
    updatedUser: UserType;
    error: string;
};

export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    resetPasswordToken?: string
}

export type GetMeDataType = UserType & { error: string; };