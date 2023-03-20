import CenterHeaderContentSection from "@/components/sections/center-header-content-section";
import classNames from "classnames";
import hash from "@/utils/hash";
import BasicAccordion from "@/components/accordions/basic-accordion";
import LinkButton from "@/components/bottons/link-button";
import {langType} from "@/lang/lang-type";
import {infoType} from "@/types/api-contents-home-type";
import {info} from "autoprefixer";

interface faqType {
    question: string,
    answer: string
}

interface props {
    lang: langType,
    data: {
        info: infoType
        faq: faqType[]
    }
}

export default function FaqSection({lang, data}: props) {
    let discord = data.info.button.find((button) => button.url.includes('discord'));

    return (
        <CenterHeaderContentSection title={lang.main.faq.title}
                                    description={lang.main.faq.description}
                                    badge={lang.main.faq.badge}
        >
            <div>
                <div className={classNames(
                    'divide-y divide-gray-300 dark:divide-gray-700 border-y border-gray-300 dark:border-gray-700'
                )}>
                    {data.faq.map((faq) => (
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
                            'mt-4 mb-2', {
                                'hidden': discord === undefined
                            }
                        )}>
                            <LinkButton href={discord?.url ?? ''} className={classNames(
                                'btn btn-indigo bg-discord rounded-lg'
                            )}>
                                {discord?.name ?? ''}
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </CenterHeaderContentSection>
    );
}
