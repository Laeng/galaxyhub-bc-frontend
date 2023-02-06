import classNames from "classnames";
import Image from "next/image";
import {langType} from "@/lang/langType";

interface props {
    lang: langType
}

export function SponsorFleetsSection({lang}: props) {
    return (
        <section className={classNames(
            'container py-16'
        )}>
            <div className={classNames(
                'flex flex-col items-center space-y-8'
            )}>
                <h4 className={classNames(classNames(
                    'font-medium text-gray-600 dark:text-gray-300 text-center',
                    'lg:w-1/2'
                ))}>
                    {lang.main.sponsor_fleets.description}
                </h4>
                <div className={classNames(
                    'flex justify-center items-center space-x-8',
                    'lg:space-x-16 lg:w-1/2'
                )}>
                    <Image src={'/images/brands/sha.png'}
                           alt={'shatagon fleet logo'}
                           height={'490'} width={'490'}
                           className={classNames(
                               'invert dark:invert-0 w-16 h-16',
                               'lg:w-24 lg:h-24'
                           )}
                           priority
                    />
                    <Image src={'/images/brands/msf.png'}
                           alt={'msf fleet logo'}
                           height={'490'} width={'490'}
                           className={classNames(
                               'w-16 h-16',
                               'lg:w-24 lg:h-24'
                           )}
                           priority
                    />
                    <Image src={'/images/brands/fal.png'}
                           alt={'falco rescue fleet logo'}
                           height={'490'} width={'490'}
                           className={classNames(
                               'w-16 h-16',
                               'lg:w-24 lg:h-24'
                           )}
                           priority
                    />
                </div>
            </div>
        </section>
    );
}
