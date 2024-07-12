import {langType} from "@/lang/lang-type";
import {locationType} from "@/types/api-contents-home-type";
import CenterHeaderContentSection from "@/components/sections/center-header-content-section";
import classNames from "classnames";
import LocationMap from "@/components/map/location-map";
import HorizontalButtons from "@/components/bottons/horizontal-buttons";
import Image from "next/image";

interface props {
    lang: langType,
    data: {
        location: locationType
    }
}

export default function LocationSection({lang, data}: props) {


    return (
        <CenterHeaderContentSection title={lang.main.location.title}
                                    description={lang.main.location.description}
                                    badge={lang.main.location.badge}>

            <div className={classNames('space-y-4'
            )}>
                <LocationMap lang={lang} data={data} className={classNames(
                    'h-96 w-full rounded-lg border border-gray-300 dark:border-gray-700'
                )}/>
                <div className={classNames(
                    'grid gap-4'
                )}>
                    <div className={classNames(
                        'h-full flex flex-col rounded-lg border border-gray-300 dark:border-gray-700 p-4'
                    )}>
                        <h4 className={classNames(
                            'font-bold text-2xl'
                        )}>
                            {data.location.name}
                        </h4>
                        <div className={classNames(
                            'mt-2'
                        )}>
                            <p className={classNames(
                                'font-medium'
                            )}>
                                {data.location.address}
                            </p>

                            <p className={classNames(
                                'font-medium'
                            )}>
                                {data.location.address_ko}
                            </p>
                        </div>
                        <div className={classNames(
                            'mt-auto pt-4'
                        )}>
                            <HorizontalButtons buttons={data.location.button}/>
                        </div>
                    </div>
                </div>
            </div>
        </CenterHeaderContentSection>
    );
}
