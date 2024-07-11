import CenterHeaderContentSection from "@/components/sections/center-header-content-section";
import classNames from "classnames";
import {langType} from "@/lang/lang-type";
import PillsTab, {tabType} from "@/components/tabs/pills-tab";
import hash from "@/utils/hash";
import {sponsorsType} from "@/types/api-contents-home-type";

interface props {
    lang: langType,
    data: {
        sponsor: sponsorsType[]
    }
}

export default function SponsorUsersSection({lang, data}: props) {
    let tabs: tabType[] = [];
    data.sponsor.map(sponsor => {
        tabs.push({
            title: sponsor.year,
            contents: sponsor.sponsors.map(user => (
                <div key={hash(user.name)} className={classNames(
                    'p-4 rounded-xl border border-gray-300 dark:border-gray-700'
                )}>
                    <h4 className={classNames(
                        'font-bold'
                    )}>
                        {user.name}
                    </h4>
                    <p className={classNames(
                        ''
                    )}>
                        {user.comment}
                    </p>
                </div>
            ))
        })
    });


    return (
        <CenterHeaderContentSection title={lang.main.sponsor_users.title}
                                    description={lang.main.sponsor_users.description}
                                    badge={lang.main.sponsor_users.badge}>
            <div className={classNames(
                'w-full',
                'lg:-mt-10'
            )}>
                <PillsTab tabs={tabs}
                          tabClassName={classNames(
                              'hidden',
                              'md:pb-4 md:block md:flex md:justify-start',
                              'lg:pb-8 lg:block lg:flex lg:justify-center'
                          )}
                          contentsClassName={classNames(
                              ''
                          )}
                />
            </div>
        </CenterHeaderContentSection>
    );
}
