import classNames from "classnames";
import Image from "next/image";
import {langType} from "@/lang/langType";
import hash from "@/utils/hash";

interface props {
    lang: langType
}

export default function FooterSection({lang}: props) {
    return (
        <div className={classNames(
            'mt-auto py-24 bg-gray-800'
        )}>
            <div className={classNames(
                'flex justify-center container'
            )}>
                <div className={classNames(
                    'flex flex-col items-center',
                    'lg:flex-row lg:space-x-8 lg:w-2/3'
                )}>
                    <Image src={'/images/logo.svg'} width={520} height={720} alt={'bar citizen korea logo'} className={classNames(
                        'h-36 w-36'
                    )}/>
                    <ul className={classNames(
                        'text-white text-center',
                        'lg:text-left'
                    )}>
                        <li>
                            <p className={classNames(
                                'font-bold text-2xl mt-4',
                                'lg:mt-0, lg:text-3xl'
                            )}>
                                {lang.footer.title}
                            </p>
                        </li>
                        <li>
                            <p className={classNames(
                                'mt-4 text-sm'
                            )}>
                                {lang.footer.copyright}
                            </p>
                        </li>
                        {lang.footer.description.map((part, id) => (
                            <li key={hash(id.toString())}>
                                <p className={classNames(
                                    'text-gray-400 text-sm'
                                )}>
                                    {part}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
