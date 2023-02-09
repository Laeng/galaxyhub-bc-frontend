import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from 'next-seo.config';

export default function Head() {
  return (
      <>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      </>
  )
}
