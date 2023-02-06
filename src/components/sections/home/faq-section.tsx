import CenterHeaderContentSection from "@/components/sections/center-header-content-section";
import {ReactNode, useState} from "react";
import classNames from "classnames";
import hash from "@/utils/hash";
import BasicAccordion from "@/components/accordions/basic-accordion";
import LinkButton from "@/components/bottons/link-button";
import {langType} from "@/lang/langType";

interface faqType {
    question: string,
    answer: string
}

interface props {
    lang: langType
}

export default function FaqSection({lang}: props) {
    lang.main.faq.contents.faq.push(
        {
            question: '여러분의 후원을 기다립니다.',
            answer: '더 풍성한 바 시티즌을 위해 후원을 모금하고 있어요. 후원에 관심이 있으시다면 디스코드로 문의해 주세요.',
        },
        {
            question: '모든 문의는 디스코드를 통해 받고 있어요!',
            answer: '바 시티즌 코리아의 디스코드로 문의해 주세요.',
        },
    )

    return (
        <CenterHeaderContentSection title={lang.main.faq.title}
                                    description={lang.main.faq.description}
                                    badge={lang.main.faq.badge}
        >
            <div>
                <div className={classNames(
                    'divide-y divide-gray-300 dark:divide-gray-700 border-y border-gray-300 dark:border-gray-700'
                )}>
                    {lang.main.faq.contents.faq.map((faq, id) => (
                        <BasicAccordion question={faq.question} key={hash(faq.question)}>
                            {faq.answer}
                        </BasicAccordion>
                    ))}
                </div>
                <div className={classNames(
                )}>
                    <div className={classNames(
                        'p-4 mt-4 flex flex-col items-center border-2 border-black dark:border-gray-700 border-dashed rounded-2xl',
                        'lg:px-0 lg:py-4 lg:mt-0 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 lg:border-x-0 lg:border-t-0 lg:border-b lg:border-solid lg:rounded-none lg:border-gray-300 dark:lg:border-gray-700'
                    )}>
                        <p className={classNames(
                            'font-medium text-center',
                            'lg:text-left'
                        )}>
                            {lang.main.faq.contents.contacts.description}
                        </p>
                        <div className={classNames(
                            'mt-4 mb-2'
                        )}>
                            <LinkButton href={lang.assets.buttons.discord.url} className={classNames(
                                'btn btn-indigo bg-discord rounded-lg'
                            )}>
                                {lang.assets.buttons.discord.title}
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </CenterHeaderContentSection>
    );
}
