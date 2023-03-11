'use client'

import classNames from "classnames";
import Image from "next/image";
import {ReactNode, useState} from "react";
import hash from "@/utils/hash";
import {ChatBubbleOvalLeftIcon, GlobeAsiaAustraliaIcon, HeartIcon} from "@heroicons/react/24/outline";
import CenterHeaderContentSection from "@/components/sections/center-header-content-section";
import {featureContentsType, langType} from "@/lang/lang-type";

interface featureType {
    icon: ReactNode,
    contents: featureContentsType
}

interface props {
    lang: langType
}

export default function FeatureSection({lang}: props) {
    const [features] = useState<featureType[]>([
        {
            icon: <HeartIcon className="h-6 w-6" aria-hidden="true"/>,
            contents: lang.main.features.contents.description[0]
        },
        {
            icon: <GlobeAsiaAustraliaIcon className="h-6 w-6" aria-hidden="true"/>,
            contents: lang.main.features.contents.description[1]
        },
        {
            icon: <ChatBubbleOvalLeftIcon className="h-6 w-6" aria-hidden="true"/>,
            contents: lang.main.features.contents.description[2]
        },
    ]);

    return (
        <CenterHeaderContentSection title={lang.main.features.title}
                                    description={lang.main.features.description}
                                    badge={lang.main.features.badge}
        >
            <div className={classNames(
                'rounded-2xl pb-4',
                'lg:pb-16'
            )}>
                <Image src={'/images/bar-citizen-korea-2022.jpg'}
                       alt={'bar citizen 2022 photo'}
                       width={'2048'} height={'1371'}
                       className={classNames(
                           'rounded-2xl w-full bg-blend-overlay'
                       )}
                       priority
                />
            </div>
            <div className={classNames(
                'grid gap-4',
                'lg:grid-cols-3'
            )}>
                {features.map((feature) => (
                    <div key={hash(feature.contents.title)} className={classNames(
                        'flex space-x-2'
                    )}>
                        <div className={classNames(
                            'flex flex-col items-center'
                        )}>
                            <div className={classNames(
                                'h-6 w-6 text-blue-600 dark:text-blue-500'
                            )}>
                                {feature.icon}
                            </div>
                        </div>
                        <div className={classNames(
                            'space-y-2'
                        )}>
                            <p className={classNames(
                                'space-x-2',
                                'lg:text-lg'
                            )}>
                                <span className={classNames(
                                    'font-medium'
                                )}>
                                    {feature.contents.title}
                                </span>
                                <span className={classNames(
                                    'text-gray-600 dark:text-gray-400'
                                )}>
                                    {feature.contents.description1}
                                </span>
                            </p>
                            <p className={classNames(
                                'text-gray-600 dark:text-gray-400'
                            )}>
                                {feature.contents.description2}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </CenterHeaderContentSection>
    );
}
