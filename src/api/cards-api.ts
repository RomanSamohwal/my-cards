import axios from 'axios'

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
    login: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<SignInDataType>('auth/login', {
            email: email,
            password: password,
            rememberMe
        });
        return response.data;
    },
    signUp: async (email: string, password: string) => {
        const response = await instance.post<ErrorDataType>('auth/register', {email: email, password: password});
        return response.data;
    },
    authMe: async () => {
        const response = await instance.post<SignInDataType>('auth/me', {});
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
    newPassword: async (password: string, resetPasswordToken: string) => {
        const response = await instance.post<ErrorDataType>('auth/set-new-password', {password, resetPasswordToken});
        return response.data;
    },
    updateUsers: async (name: string, avatar: string) => {
        const response = await instance.put<UpdateUserDataType>('auth/me', {name: name, avatar});
        return response.data;
    }
}

//types
export type SignInDataType = UserType & { error: string; };

export type UserType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string,
    verified: boolean,
    publicCardPacksCount: number,
    created: string,
    updated: string,
    avatar?: string | undefined,
    __v: number,
    token: string,
    tokenDeathTime: number
}

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