export type UserType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
};

export const FakeUser = {
    _id: "0",
    email: "fake",
    name: "fake",
    avatar : '',
    publicCardPacksCount: 0,

    created: new Date(),
    updated: new Date(),
    isAdmin: false,
    verified: false,
    rememberMe: false
};

export type ProfileStateType = {
    isAuthorized: boolean,
    user: UserType
};

export const ProfileInitState: ProfileStateType = {
    isAuthorized: false,
    user: FakeUser
};
