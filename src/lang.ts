export default async function Lang(locale: string): Promise<any> {
    const locales = ['en', 'ko'];

    if (!locales.includes(locale)) {
        locale = 'en';
    }

    return getLocalization(locale);
}

async function getLocalization(locale: String) {
    return await import(`@/lang/${locale}.json`).then((module) => module.default);
}
