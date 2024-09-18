import './globals.css'
import {ReactNode} from "react";
import localFont from 'next/font/local';
import HeaderSection from "@/components/sections/header-section";
import classNames from "classnames";
import FooterSection from "@/components/sections/footer-section";
import {langType} from "@/lang/lang-type";
import Lang from "@/lang";

interface props {
    children: ReactNode,
    params: {
        lang: string
    }
}

const ttTogether = localFont({
    variable: '--font-together',
    src: './fonts/tt-together.woff2',
    display: 'swap'
});

export const metadata = {
    viewport: "width=device-width, initial-scale=1.0",
    appleWebApp: {
      statusBarStyle: "black-translucent"
    },
    title: "Bar Citizen Korea",
    description: "스타 시티즌을 좋아하는 사람들의 모임. - 바 시티즌 코리아 #BarCitizen #starcitizen #바시티즌 #스타시티즌",
    openGraph: {
        siteName: 'Bar Citizen Korea',
        title: '환영합니다.',
        description: '스타 시티즌을 좋아하는 사람들의 모임. - 바 시티즌 코리아 #BarCitizen #starcitizen #바시티즌 #스타시티즌',
        url: 'https://barcitizen.kr',
        type: 'website',
        locale: 'ko_KR',
        images: [
            {
                url: 'https://barcitizen.kr/images/bar-citizen-korea-2023.jpeg',
                width: 1280,
                height: 960,
            },
        ],
    }
};

export default async function RootLayout({children, params}: props) {
    const lang: langType = await Lang(params.lang);

    return (
        <html lang={params.lang}>
        <head />
        <body>
        <main className={classNames(
            'relative flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white antialiased',
            ttTogether.variable
        )}>
            <HeaderSection lang={lang}/>
            {children}
            <FooterSection lang={lang}/>
        </main>
        </body>
        </html>
    )
}
