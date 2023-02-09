'use client'

import {langType} from "@/lang/langType";
import {useState} from "react";
import classNames from "classnames";
import hash from "@/utils/hash";

interface props {
    lang: langType
}
export default function HeroContentsInfoComponent({lang}: props){
    let newInfo = {
        datetime: '2023.07.01. KST 18:00',
        place: '서울 (예정)',
        price: '참가비 70,000원 이상'
    }

    const [info, setInfo] = useState(newInfo);

    return (
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
                    {info.datetime}
                </li>
                <li className={classNames(
                    'text-xl',
                    'lg:text-3xl'
                )}>
                    {info.place}
                </li>
                <li className={classNames(
                    'text-xl',
                    'lg:text-3xl'
                )}>
                    {info.price}
                </li>
            </ul>
        </div>
    )
}
