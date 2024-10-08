import Lang from "@/lang";
import classNames from "classnames";
import HeroSection from "@/components/sections/home/hero-section";
import StorySection from "@/components/sections/home/story-section";
import SponsorFleetsSection from "@/components/sections/home/sponsor-fleets-section";
import RegisterNowSection from "@/components/sections/home/register-now-section";
import FeatureSection from "@/components/sections/home/feature-section";
import FaqSection from "@/components/sections/home/faq-section";
import SponsorUsersSection from "@/components/sections/home/sponsor-users-section";
import LocationSection from "@/components/sections/home/location-section";
import {langType} from "@/lang/lang-type";
import {infoType, sponsorsType, faqType, locationType} from "@/types/api-contents-home-type";
import Script from "next/script";

interface props {
  params: {
    lang: string
  }
}

interface pageData {
    result: boolean,
    data: {
        info: infoType,
        location: locationType,
        sponsor: sponsorsType[],
        faq: faqType[]
    },
    message?: string
}

async function getPageData(lang: string) {
    const res = await fetch(`https://api.barcitizen.kr/v1/contents/home?lang=${lang}`, {
        next: { revalidate: 1800 }
    });
    const data: pageData = await res.json();

    return data;
}

export default async function Home({params}: props) {
    const lang: langType = await Lang(params.lang);
    const data: pageData = await getPageData(params.lang);

    return (
        <>
            <HeroSection lang={lang} data={{info: data.data.info}}/>
            <StorySection lang={lang}/>
            <div id={'introduce'} className={classNames(
                'bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900'
            )}>
                <FeatureSection lang={lang}/>
            </div>

            <div id={'location'}>
                <LocationSection lang={lang} data={{location: data.data.location}}/>
            </div>

            <div>
                <RegisterNowSection lang={lang} data={{info: data.data.info}}/>
            </div>
            <div id={'faq'}>
                <FaqSection lang={lang} data={{faq: data.data.faq, info: data.data.info}}/>
            </div>
            <div className={classNames(
                'pb-16'
            )}>
                <SponsorFleetsSection lang={lang}/>
            </div>
        </>
    )
}
