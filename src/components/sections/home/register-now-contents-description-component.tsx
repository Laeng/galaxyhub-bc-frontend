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

export default function RegisterNowContentsDescriptionComponent({lang}: props){
    let newDescription:descriptionType = {
        en: [
            'Only adults aged 19 or older can participate in and the event will be held in Korean',
            'Date, location and costs are subject to change. Confirmed information will be announced before regular registration opens.'
        ],
        ko: [
            '원활한 행사 진행을 위하여 만 19세 이상 성인만 참여하실 수 있으며 행사는 한국어로 진행됩니다.',
            '현재 사전 등록을 진행 중이며 날짜, 장소, 참가비가 변경될 수 있습니다. 확정된 정보는 정규 등록이 시작되기 전 알려드리겠습니다.'
        ]
    };

    const [description, setDescription] = useState<string[]>(
        newDescription[lang.name]
    );

    //setDescription(desc => [...desc, ...newDescription]);

    return (
        <ul className={classNames(
            'leading-relaxed space-y-2',
        )}>
            {description.map(part => (
                <li key={hash(part)}>
                    <p>
                        {part}
                    </p>
                </li>
            ))}
        </ul>
    )
}
