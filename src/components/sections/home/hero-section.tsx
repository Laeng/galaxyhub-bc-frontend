import classNames from "classnames";
import RegisterDiscordButtons from "@/components/bottons/register-discord-buttons";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className={classNames(
            'container'
        )}>
            <div className={classNames(
                'grid pt-0',
                'lg:pt-16 lg:grid-cols-3 '
            )}>
                <div className={classNames(
                    '',
                    'lg:col-span-2'
                )}>
                    <ul className={classNames(
                        'font-together text-6xl',
                        'lg:text-8xl lg:space-y-8'
                    )}>
                        <li className={classNames(
                            'float-none'
                        )}>
                            대한민국
                        </li>
                        <li className={classNames(
                            'float-none'
                        )}>
                            스타 시티즌
                        </li>
                        <li className={classNames(
                            'float-none'
                        )}>
                            모임
                        </li>
                    </ul>
                </div>

                <div className={classNames(
                    'flex flex-col pt-4',
                    'lg:pt-0 lg:col-span-1'
                )}>
                    <div className={classNames(
                        'space-y-4',
                        'lg:space-y-6'
                    )}>
                        <div className={classNames(
                            '',
                            'lg:border-l-4 lg:border-black'
                        )}>
                            <ul className={classNames(
                                'font-bold',
                                'lg:px-8 lg:space-y-2'
                            )}>
                                <li className={classNames(
                                    'text-2xl',
                                    'lg:text-5xl'
                                )}>
                                    2023.07.01. KST 18:00
                                </li>
                                <li className={classNames(
                                    'text-xl',
                                    'lg:text-3xl'
                                )}>
                                    서울 (예정)
                                </li>
                                <li className={classNames(
                                    'text-xl',
                                    'lg:text-3xl'
                                )}>
                                    참가비 70,000원 이상
                                </li>
                            </ul>
                        </div>
                        <ul className={classNames(
                            'space-y-2 text-sm'
                        )}>
                            <li className={classNames(
                                ''
                            )}>
                                원활한 행사 진행을 위하여 만 19세 이상 성인만 참여하실 수 있으며 한국어로 진행됩니다.
                            </li>
                            <li className={classNames(
                                ''
                            )}>
                                현재 사전 등록을 진행 중에 있으며 날짜와 장소는 변경될 수 있습니다. 참가 신청이 시작되면 연락드리겠습니다.
                            </li>
                        </ul>
                    </div>

                    <RegisterDiscordButtons className={classNames(
                        'mt-auto pt-6'
                    )}/>
                </div>
            </div>
        </section>
    );
}
