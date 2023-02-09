import classNames from "classnames";
import RegisterDiscordButtons from "@/components/bottons/register-discord-buttons";
import {langType} from "@/lang/langType";
import hash from "@/utils/hash";
import HeroContentsDescriptionComponent from "@/components/sections/home/hero-contents-description-component";
import HeroContentsInfoComponent from "@/components/sections/home/hero-contents-info-component";

interface props {
    lang: langType
}

export default function HeroSection({lang}: props) {
    return (
        <section className={classNames(
            'container'
        )}>
            <div className={classNames(
                'grid pt-0',
                'lg:pt-16 lg:grid-cols-3 '
            )}>
                <div className={classNames(
                    '',
                    'lg:col-span-2'
                )}>
                    <ul className={classNames(
                        'font-together text-6xl',
                        'lg:text-8xl lg:space-y-8'
                    )}>
                        {lang.main.hero.contents.title.map(part => (
                            <li key={hash(part)} className={classNames(
                                'float-none'
                            )}>
                                {part}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={classNames(
                    'flex flex-col pt-4',
                    'lg:pt-0 lg:col-span-1'
                )}>
                    <div className={classNames(
                        'space-y-4',
                        'lg:space-y-6'
                    )}>
                        <HeroContentsInfoComponent lang={lang}/>
                        <HeroContentsDescriptionComponent lang={lang}/>
                    </div>

                    <RegisterDiscordButtons lang={lang} className={classNames(
                        'mt-auto pt-6'
                    )}/>
                </div>
            </div>
        </section>
    );
}
