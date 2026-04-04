import { JSX } from "react";

export interface featureType {
    icon: JSX.Element,
    title: string,
    description: string,
    imageUrl: string
}

export interface statType {
    name: string,
    value: string
}

export interface joinReqType {
    emailId: string
}

export interface joinResType {
    success: boolean,
    errorMessage: null | string
}