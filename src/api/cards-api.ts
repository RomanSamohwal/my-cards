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
export const cardsAPI = {
    login: async (email: string, password: string,) => {
        const response = await instance.post<any>('auth/login', {email: email, password: password, rememberMe: true});
        return response.data;
    },
    signUp: async (email: string, password: string) => {
        const response = await instance.post('auth/register', {email: email, password: password});
        return response.data;
    },
    authMe() {
        const promise = instance.post<any>('auth/register', {});
        return promise;
    },
    logout() {
        const promise = instance.delete<any>('auth/me', {});
        return promise;
    },
    forgot() {
        const promise = instance.post<any>('auth/forgot', {});
        return promise;
    },
    newPassword(password: string, resetPasswordToken: string) {
        const promise = instance.post<any>('auth/set-new-password', {password: password, resetPasswordToken});
        return promise;
    },
    updateUsers(name: string, avatar: string) {
        const promise = instance.put<any>('auth/me', {name: name, avatar});
        return promise;
    }
}



//res login
/*
addedUser: {_id: "5f949e1fd7d66426389a00a1", email: "rsamo@gmail.com", rememberMe: false, isAdmin: false,…}
created: "2020-10-24T21:35:27.241Z"
email: "rsamo@gmail.com"
isAdmin: false
name: "rsamo@gmail.com"
publicCardPacksCount: 0
rememberMe: false
updated: "2020-10-24T21:35:27.241Z"
verified: false
__v: 0
_id: "5f949e1fd7d66426389a00a1"*/
