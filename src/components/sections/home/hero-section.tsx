import classNames from "classnames";
import {langType} from "@/lang/lang-type";
import hash from "@/utils/hash";
import HorizontalButtons from "@/components/bottons/horizontal-buttons";
import {infoType} from "@/types/api-contents-home-type";

interface props {
    lang: langType,
    data: {
        info: infoType
    }
}

export default function HeroSection({lang, data}: props) {
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
                        <div className={classNames(
                            '',
                            'lg:border-l-4 lg:border-black lg:dark:border-white'
                        )}>
                            <ul className={classNames(
                                'font-bold',
                                'lg:px-8 lg:space-y-2'
                            )}>
                                <li className={classNames(
                                    'text-2xl',
                                    'lg:text-5xl'
                                )}>
                                    {data.info.datetime}
                                </li>
                                <li className={classNames(
                                    'text-xl',
                                    'lg:text-3xl'
                                )}>
                                    {data.info.place}
                                </li>
                                <li className={classNames(
                                    'text-xl',
                                    'lg:text-3xl'
                                )}>
                                    {data.info.price}
                                </li>
                            </ul>
                        </div>
                        <ul className={classNames(
                            'space-y-2 text-sm'
                        )}>
                            {data.info.inform.map(part => (
                                <li key={hash(part)} className={classNames(
                                    ''
                                )}>
                                    {part}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <HorizontalButtons buttons={data.info.button} className={classNames(
                        'mt-auto pt-6'
                    )}/>
                </div>
            </div>
        </section>
    );
}
