import classNames from "classnames";
import Image from "next/image";

export default function FooterSection() {
    return (
        <div className={classNames(
            'mt-auto py-24 bg-gray-800'
        )}>
            <div className={classNames(
                'flex justify-center container'
            )}>
                <div className={classNames(
                    'flex flex-col items-center',
                    'lg:flex-row lg:items-center lg:space-x-8 lg:w-2/3'
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
                                'font-together text-2xl mt-4',
                                'lg:mt-0, lg:text-3xl'
                            )}>
                                바 시티즌 코리아
                            </p>
                        </li>
                        <li>
                            <p className={classNames(
                                'mt-4 text-sm'
                            )}>
                                바 시티즌 코리아에 게재된 내용에 대한 저작권은 바 시티즌 코리아 운영팀에게 있으며 사진, 영상과 같은 컨텐츠의 경우 컨텐츠 제공자에게 있습니다.
                            </p>
                        </li>
                        <li>
                            <p className={classNames(
                                'text-gray-400 text-sm'
                            )}>
                                본 웹사이트는 갤럭시허브의 지원을 받아 운영되며 Laeng에 의해 만들어졌습니다.
                            </p>
                        </li>
                        <li>
                            <p className={classNames(
                                'text-gray-400 text-sm'
                            )}>
                                주식회사 투게더그룹에서 제작한 TT 투게더체가 사용되었습니다.
                            </p>
                        </li>
                        <li>
                            <p className={classNames(
                                'pt-2 text-gray-400 text-sm'
                            )}>
                                &copy; 2019 ~ 2023 바시티즌 코리아 All rights reserved.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
