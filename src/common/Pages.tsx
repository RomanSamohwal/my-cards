import React, {ReactNode} from "react";

export type PageType = {
    _id: number
    title: string
    path?: string
    params: string
    exact: boolean
    page: ReactNode
}

export const pages: any = [

]