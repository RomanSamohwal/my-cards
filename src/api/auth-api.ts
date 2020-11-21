import {instance} from './instance';
import {
    ErrorDataType,
    ForgotDataType,
    GetMeDataType,
    InfoType,
    LoginParamsType,
    SetPasswordType,
    SignInDataType,
    UpdateUserDataType
} from './api-types';

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
    forgot: async (email: string) => {
        const response = await instance.post<ForgotDataType>("/auth/forgot", {
            email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `
<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
</div>
`
        });
        return response.data;
    },
    setNewPassword: async (data: LoginParamsType) => {
        const response = await instance.post<SetPasswordType>('auth/set-new-password', data);
        return response.data;
    },
    updateUsers: async (name: string, avatar: string) => {
        const response = await instance.put<UpdateUserDataType>('auth/me', {name, avatar});
        return response.data;
    }
}
