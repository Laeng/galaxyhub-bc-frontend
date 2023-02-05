import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
    title: '바 시티즌 코리아',
    description: '한국에서 스타 시티즌을 좋아하는 사람들의 모임. #스타시티즌 #바시티즌',
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        url: 'https://sc.galaxyhub.kr',
        title: '환영합니다',
        description: '스타 시티즌 한국어 패치를 다운로드 받을 수 있는 웹 사이트 입니다. #스타시티즌 #유저한국어 #한패 #한글',
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
        siteName: '스타 시티즌 유저 한국어 프로젝트',
    },
};
