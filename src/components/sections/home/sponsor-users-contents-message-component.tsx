import PillsTab, {tabType} from "@/components/tabs/pills-tab";
import {ReactNode} from "react";
import classNames from "classnames";
import hash from "@/utils/hash";

export interface sponsorListType {
    year: number,
    sponsors: sponsorType[]
    reason?: string
}

interface sponsorType {
    name: string,
    comment: string
}

interface props {
    sponsors: sponsorListType[]
}

export default function SponsorUsersContentsMessageComponent({sponsors}: props) {
    let tabs: tabType[] = [];

    sponsors.forEach((sponsor) => {
       tabs.push({
           title: sponsor.year,
           contents: reactNodeConverter(sponsor)
       });
    });

    return (
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
    );
}

function reactNodeConverter(sponsorList: sponsorListType): ReactNode {
    if (sponsorList.sponsors.length == 0 ) {
        return (
            <>
                <div className={classNames(

                )}>
                </div>
                <div className={classNames(
                    ''
                )}>
                    <p className={classNames(
                        'flex justify-center font-bold'
                    )}>
                        {sponsorList.reason !== undefined ? sponsorList.reason : ''}
                    </p>
                </div>
                <div className={classNames(

                )}>
                </div>
            </>
        );
    }

    return sponsorList.sponsors.map((sponsor) => (
        <div key={hash(sponsor.name)} className={classNames(
            'p-4 rounded-xl border border-gray-300 dark:border-gray-700'
        )}>
            <h4 className={classNames(
                'font-bold'
            )}>
                {sponsor.name}
            </h4>
            <p className={classNames(
                ''
            )}>
                {sponsor.comment}
            </p>
        </div>
    ));
}
