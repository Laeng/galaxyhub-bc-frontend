import classNames from "classnames";
import RegisterDiscordButtons from "@/components/bottons/register-discord-buttons";
import NameTag from "@/components/brands/name-tag";
import {langType} from "@/lang/langType";
import hash from "@/utils/hash";
import RegisterNowContentsDescriptionComponent from "@/components/sections/home/register-now-contents-description-component";

interface props {
    lang: langType
}

export default function RegisterNowSection({lang}: props) {

    return (
        <section className={classNames(
            'container py-8',
            'lg:py-16'
        )}>
            <div className={classNames(
                'grid rounded-2xl p-8 border-2 border-gray-700 border-dashed',
                'lg:grid-cols-2 lg:px-24 lg:py-14'
            )}>
                <div className={classNames(
                    'flex flex-col',
                    'lg:py-8'
                )}>
                    <div className={classNames(
                        'space-y-4',
                        'lg:space-y-8'
                    )}>
                        <ul className={classNames(
                            'font-together text-2xl',
                            'lg:text-4xl lg:space-y-4'
                        )}>
                            {lang.main.register_now.contents.title.map(part => (
                                <li key={hash(part)}>
                                    <p>
                                        {part}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <RegisterNowContentsDescriptionComponent lang={lang}/>
                    </div>

                    <RegisterDiscordButtons lang={lang} className={classNames(
                        'mt-auto pt-6'
                    )}/>
                </div>
                <div className={classNames(
                    'hidden',
                    'lg:block lg:flex lg:items-center lg:justify-center'
                )}>
                    <div className={classNames(
                        'relative'
                    )}>
                        <div className={classNames(
                            'absolute inset-0'
                        )}>
                            <NameTag className={classNames(
                                'scale-75'
                            )}/>
                        </div>
                        <div className={classNames(
                            'relative z-10 origin-bottom rotate-12'
                        )}>
                            <NameTag className={classNames(
                                'scale-75'
                            )}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
