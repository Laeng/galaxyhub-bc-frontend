import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
    title: 'Bar Citizen Korea',
    description: '스타 시티즌을 좋아하는 사람들의 모임. #BarCitizen #starcitizen #바시티즌 #스타시티즌',
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        url: 'https://barcitizen.kr',
        title: '환영합니다',
        description: '스타 시티즌을 좋아하는 사람들의 모임. #BarCitizen #starcitizen #바시티즌 #스타시티즌',
        /*
        images: [
            {
                url: 'https://www.test.ie/og-image-a-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt A',
                type: 'image/jpeg',
                secureUrl: 'https://www.test.ie/secure-og-image-a-01.jpg',
            },
        ],
         */
        siteName: 'Bar Citizen Korea',
    },
};
