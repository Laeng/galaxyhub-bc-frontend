'use client'

import {faqType, langType} from "@/lang/langType";
import {useState} from "react";
import classNames from "classnames";
import hash from "@/utils/hash";
import BasicAccordion from "@/components/accordions/basic-accordion";

interface props {
    lang: langType
}
export default function FaqContentsFaqComponent({lang}: props){
    let newFaq:faqType[] = [
        {
            question: '여러분의 후원을 기다립니다.',
            answer: '더 풍성한 바 시티즌을 위해 후원을 모금하고 있어요. 후원에 관심이 있으시다면 디스코드로 문의해 주세요.',
        },
        {
            question: '모든 문의는 디스코드를 통해 받고 있어요!',
            answer: '바 시티즌 코리아의 디스코드로 문의해 주세요.',
        },    ];

    const [faq, setFaq] = useState<faqType[]>(
        newFaq
    );

    //setDescription(desc => [...desc, ...newDescription]);

    return (
        <div className={classNames(
            'divide-y divide-gray-300 dark:divide-gray-700 border-y border-gray-300 dark:border-gray-700'
        )}>
            {faq.map((faq) => (
                <BasicAccordion question={faq.question} key={hash(faq.question)}>
                    {faq.answer}
                </BasicAccordion>
            ))}
        </div>
    )
}
