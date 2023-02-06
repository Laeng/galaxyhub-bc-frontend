import Lang from "@/lang";
import classNames from "classnames";
import HeroSection from "@/components/sections/home/hero-section";
import StorySection from "@/components/sections/home/story-section";
import {SponsorFleetsSection} from "@/components/sections/home/sponsor-fleets-section";
import RegisterNowSection from "@/components/sections/home/register-now-section";
import FeatureSection from "@/components/sections/home/feature-section";
import FaqSection from "@/components/sections/home/faq-section";
import SponsorUsersSection from "@/components/sections/home/sponsor-users-section";
import {langType} from "@/lang/langType";


interface props {
  params: {
    lang: string
  }
}

export default async function Home({params}: props) {
    const lang: langType = await Lang(params.lang);

    return (
        <>
            <HeroSection lang={lang}/>
            <StorySection lang={lang}/>
            <div id={'introduce'} className={classNames(
                'bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900'
            )}>
                <FeatureSection lang={lang}/>
            </div>
            <div id={'supporters'}>
                <SponsorUsersSection lang={lang}/>
            </div>
            <div>
                <RegisterNowSection lang={lang}/>
            </div>
            <div id={'faq'}>
                <FaqSection lang={lang}/>
            </div>
            <div className={classNames(
                'pb-16'
            )}>
                <SponsorFleetsSection lang={lang}/>
            </div>
        </>
    )
}
