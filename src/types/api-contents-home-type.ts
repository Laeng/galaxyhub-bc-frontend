import {buttonType} from "@/types/api-type";

export interface infoType {
    datetime: string,
    place: string,
    price: string,
    inform: string[],
    button: buttonType[],
}

export interface sponsorsType {
    year: number,
    sponsors: sponsorType[];
}

export interface sponsorType {
    name: string,
    comment: string
}

export interface faqType {
    question: string,
    answer: string
}

export interface locationType {
    name: string,
    address: string,
    address_ko: string,
    coordinate: {
        latitude: number,
        longitude: number
    },
    images: string[],
    button: buttonType[]
}
