import axios from 'axios'

const localhost = 'http://localhost:7542/2.0/'

const settings = {
    withCredentials: true
}

const instance = axios.create({
    baseURL: 'localhost',
    ...settings
})

// api
export const cardsAPI = {
    login(email: string, password: string,) {
        const promise = instance.post<any>('POST/auth/login', {email: email, password: password, rememberMe: true});
        return promise;
    },
    Register(email: string, password: string) {
        const promise = instance.post<any>('POST/auth/register', {email: email, password: password});
        return promise;
    },
    authMe() {
        const promise = instance.post<any>('POST/auth/register', {});
        return promise;
    },
    logout() {
        const promise = instance.delete<any>('DELETE/auth/me', {});
        return promise;
    },
    forgot() {
        const promise = instance.post<any>('POST/auth/forgot', {});
        return promise;
    },
    newPassword(password: string, resetPasswordToken: string) {
        const promise = instance.post<any>('POST/auth/set-new-password', {password: password, resetPasswordToken});
        return promise;
    },
    updateUsers(name: string, avatar: string) {
        const promise = instance.put<any>('PUT/auth/me', {name: name, avatar});
        return promise;
    },
}

