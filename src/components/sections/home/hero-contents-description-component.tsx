'use client'

import {langType} from "@/lang/langType";
import {useState} from "react";
import classNames from "classnames";
import hash from "@/utils/hash";

interface props {
    lang: langType
}

interface descriptionType {
    en: string[],
    ko: string[]
}


export default function HeroContentsDescriptionComponent({lang}: props){
    let newDescription:descriptionType = {
        en: [
            'Only adults aged 19 or older can participate and it will be held in Korean',
            'Pre-registration is currently open and the date and location are subject to change. We will contact you when regular registration opens.'
        ],
        ko: [
            '원활한 행사 진행을 위하여 만 19세 이상 성인만 참여하실 수 있으며 한국어로 진행됩니다.',
            '현재 사전 등록을 진행 중에 있으며 날짜와 장소는 변경될 수 있습니다. 참가 신청이 시작되면 연락드리겠습니다.'
        ]
    };

    const [description, setDescription] = useState<string[]>(
        newDescription[lang.name]
    );

    //setDescription(desc => [...desc, ...newDescription]);

    return (
        <ul className={classNames(
            'space-y-2 text-sm'
        )}>
            {description.map(part => (
                <li key={hash(part)} className={classNames(
                    ''
                )}>
                    {part}
                </li>

            ))}
        </ul>
    )
}
