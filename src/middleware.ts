import {NextRequest, NextResponse} from 'next/server'
import AcceptLanguageParser from "accept-language-parser";
import {trimString} from "@/utils/trim";

const locales = ['en', 'ko']

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest): string {
    const acceptLanguageHeader = request.headers.get('Accept-Language');

    if (acceptLanguageHeader == null) {
        return 'en'
    }

    const lang = AcceptLanguageParser.pick(locales, acceptLanguageHeader);

    if (lang == null){
        return 'en'
    }

    return lang;
}

function isAsset(pathName: string): boolean {
    const whitelist = ['fonts', 'images'];
    const pathNames = pathName.split('/');
    let firstPath = '';

    for (let path of pathNames) {
        if (path.length !== 0) {
            firstPath = path;
            break;
        }
    }

    return (whitelist.includes(firstPath));
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (isAsset(pathname)) {
        return;
    }

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}
