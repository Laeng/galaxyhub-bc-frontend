export interface langType {
    main: {
        hero: {
            contents: {
                title: string[],
                description: string[],
                info: {
                    datetime: string,
                    place: string,
                    price: string
                }
            }
        },
        story: {
            contents: {
                description: string
            }
        },
        features: {
            badge: string,
            title: string,
            description: string,
            contents: {
                description: featureContentsType[]
            }
        },
        sponsor_users: {
            badge: string,
            title: string,
            description: string
        },
        register_now: {
            contents: {
                title: string[],
                description: string[]
            }
        },
        faq: {
            badge: string,
            title: string,
            description: string,
            contents: {
                faq: faqType[],
                contacts: {
                    description: string
                }
            }
        },
        sponsor_fleets: {
            description: string
        }
    }
    assets: {
        buttons: {
            discord: buttonType,
            pre_registration: buttonType
        }
    }
}

export interface featureContentsType {
    title: string,
    description1: string,
    description2: string
}

export interface faqType {
    question: string,
    answer: string
}

interface buttonType {
    title: string,
    url: string
}
