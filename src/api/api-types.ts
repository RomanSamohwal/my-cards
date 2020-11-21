//auth types
import {UserType} from '../features/Auth/Profile/ProfileInitState';

export type SetPasswordType = InfoType & ErrorDataType
type forgotResponseType = {
    info: string,
    success: boolean,
    answer: boolean,
    html: boolean
}
export type ForgotDataType = forgotResponseType & ErrorDataType
export type SignInDataType = UserType & ErrorDataType
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
    email?: string
    password: string
    rememberMe?: boolean
    resetPasswordToken?: string
}
export type GetMeDataType = UserType & ErrorDataType