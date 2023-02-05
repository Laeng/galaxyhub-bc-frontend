import './globals.css'
import {ReactNode} from "react";
import HeaderSection from "@/components/sections/header-section";
import classNames from "classnames";
import FooterSection from "@/components/sections/footer-section";

export default function RootLayout({children}: { children: ReactNode }) {

    return (
        <html lang="ko">
        <head/>
        <body>
        <main className={classNames(
            'relative flex flex-col min-h-screen bg-white dark:bg-black antialiased '
        )}>
            <HeaderSection/>
            {children}
            <FooterSection/>
        </main>
        </body>
        </html>
    )
}
