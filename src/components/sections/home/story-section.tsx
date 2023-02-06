import classNames from "classnames";
import Image from "next/image";
import {langType} from "@/lang/langType";

interface props {
    lang: langType
}

export default function StorySection({lang}: props) {
    return (
        <section className={classNames(
            'container py-8 space-y-4',
            'lg:py-16'
        )}>
            <div style={{backgroundImage: 'url(\'/images/gwanghwamun.jpg\')'}} className={classNames(
                'bg-center bg-cover rounded-2xl flex items-center justify-center px-8 h-96 bg-blend-darken bg-black/10'
            )}>
                <div className={classNames(
                    'flex justify-center items-center rounded-2xl backdrop-blur-sm border border-white/20 h-48 w-36'
                )}>
                    <Image src={'/images/logo.svg'} width={520} height={720} alt={'bar citizen korea logo'} className={classNames(
                        'h-36 w-36'
                    )}/>
                </div>
            </div>
            <div className={classNames(
                'font-medium leading-relaxed',
                'lg:text-xl'
            )}>
                <p>
                    {lang.main.story.contents.description}
                </p>
            </div>
        </section>
    );
}
