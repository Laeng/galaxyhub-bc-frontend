import './globals.css'
import {ReactNode} from "react";
import HeaderSection from "@/components/sections/header-section";
import classNames from "classnames";
import FooterSection from "@/components/sections/footer-section";
import {langType} from "@/lang/langType";
import Lang from "@/lang";

interface props {
    children: ReactNode,
    params: {
        lang: string
    }
}

export default async function RootLayout({children, params}: props) {
    const lang: langType = await Lang(params.lang);

    return (
        <html lang={params.lang}>
        <head/>
        <body>
        <main className={classNames(
            'relative flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white antialiased'
        )}>
            <HeaderSection lang={lang}/>
            {children}
            <FooterSection lang={lang}/>
        </main>
        </body>
        </html>
    )
}
