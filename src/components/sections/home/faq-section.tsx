'use client'

import CenterHeaderContentSection from "@/components/sections/center-header-content-section";
import {ReactNode, useState} from "react";
import classNames from "classnames";
import hash from "@/utils/hash";
import BasicAccordion from "@/components/accordions/basic-accordion";
import LinkButton from "@/components/bottons/link-button";

interface faqType {
    question: string,
    answer: string
}
export default function FaqSection() {
    const [faqs, setFaqs] = useState<faqType[]>([
        {
            question: '여러분의 후원을 기다립니다.',
            answer: '더 풍성한 바 시티즌을 위해 후원을 모금하고 있어요. 후원에 관심이 있으시다면 디스코드로 문의해 주세요.',
        },
        {
            question: '모든 문의는 디스코드를 통해 받고 있어요!',
            answer: '바 시티즌 코리아의 디스코드로 문의해 주세요.',
        },
    ]);

    return (
        <CenterHeaderContentSection title={'궁금한 것이 있다면? 여기 주목!'}
                                    description={'여기에 많은 분들이 해주신 질문에 대한 답이 있어요.'}
                                    badge={'자주하는 질문'}
        >
            <div>
                <div className={classNames(
                    'divide-y divide-gray-500 border-y border-gray-500'
                )}>
                    {faqs.map((faq, id) => (
                        <BasicAccordion question={faq.question} key={hash(faq.question)}>
                            {faq.answer}
                        </BasicAccordion>
                    ))}
                </div>
                <div className={classNames(
                )}>
                    <div className={classNames(
                        'p-4 mt-4 flex flex-col items-center border-2 border-black border-dashed rounded-2xl',
                        'lg:px-0 lg:py-4 lg:mt-0 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 lg:border-x-0 lg:border-t-0 lg:border-b lg:border-gray-500 lg:border-solid lg:rounded-none'
                    )}>
                        <p className={classNames(
                            'font-medium text-center',
                            'lg:text-left'
                        )}>
                            여러분의 문의가 자주하는 질문에서 찾을 수 없다면 디스코드로 문의해주세요!
                        </p>
                        <div className={classNames(
                            'mt-4 mb-2'
                        )}>
                            <LinkButton href={'#'} className={classNames(
                                'btn btn-indigo bg-discord rounded-lg'
                            )}>
                                디스코드
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </CenterHeaderContentSection>
    );
}
