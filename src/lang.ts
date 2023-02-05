import 'server-only';

export default async function Lang(local: any): Promise<any> {
    const dictionaries = new Map<string, any>([
        ['en', () => import('./lang/en.json').then((module) => module.default)],
        ['ko', () => import('./lang/ko.json').then((module) => module.default)]
    ])


    return dictionaries.get(local)();
}
