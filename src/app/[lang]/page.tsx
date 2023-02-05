import Lang from "@/lang";
import classNames from "classnames";
import HeroSection from "@/components/sections/home/hero-section";
import StorySection from "@/components/sections/home/story-section";
import {SponsorFleetsSection} from "@/components/sections/home/sponsor-fleets-section";
import RegisterNowSection from "@/components/sections/home/register-now-section";
import FeatureSection from "@/components/sections/home/feature-section";
import FaqSection from "@/components/sections/home/faq-section";
import SponsorUserSection from "@/components/sections/home/sponsor-user-section";


interface props {
  params: {
    lang: string
  }
}

export default async function Home({params}: props) {
    const lang = await Lang(params.lang);

    return (
        <>
            <HeroSection/>
            <StorySection/>
            <div className={classNames(
                'bg-gradient-to-b from-gray-50 to-white'
            )}>

                <FeatureSection/>
            </div>
            <SponsorUserSection/>
            <RegisterNowSection/>
            <FaqSection/>
            <SponsorFleetsSection/>
        </>
    )
}
