export interface langType {
    name: 'en'|'ko',
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
        },
        location: {
            badge: string,
            title: string,
            description: string,
            "contents": {
                "loading": string
            }
        }
    },
    footer: {
        title: string,
        description: string[],
        copyright: string,
    }
    assets: {
        title: string,
        menu: linkType[],
        buttons: {
            bar_citizen_korea: linkType
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

interface linkType {
    title: string,
    url: string
}
