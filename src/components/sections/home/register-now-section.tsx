import classNames from "classnames";
import RegisterDiscordButtons from "@/components/bottons/register-discord-buttons";
import NameTag from "@/components/brands/name-tag";

export default function RegisterNowSection() {
    return (
        <section className={classNames(
            'container py-8',
            'lg:py-16'
        )}>
            <div className={classNames(
                'grid rounded-2xl p-8 border-2 border-gray-700 border-dashed',
                'lg:grid-cols-2 lg:px-24 lg:py-14'
            )}>
                <div className={classNames(
                    'flex flex-col',
                    'lg:py-8'
                )}>
                    <div className={classNames(
                        'space-y-4',
                        'lg:space-y-8'
                    )}>
                        <ul className={classNames(
                            'font-together text-2xl',
                            'lg:text-4xl lg:space-y-4'
                        )}>
                            <li>
                                <p>
                                    바 시티즌 코리아 2023
                                </p>
                            </li>
                            <li>
                                <p>
                                    지금 바로 등록하세요!
                                </p>
                            </li>
                        </ul>
                        <ul className={classNames(
                            'font-medium leading-relaxed space-y-2'
                        )}>
                            <li>
                                <p>
                                    2023년 개최되는 바 시티즌 코리아는 더 많은 분들과 함께합니다. 더 넓은 공간에서 친구를 만나거나 새로 사귀어 보세요.
                                </p>
                            </li>
                            <li>
                                <p>
                                    작년과 같이 올해에도 클라우드 임페리움 게임즈의 직원이 함께 할 예정이니 많은 관심 부탁드립니다!
                                </p>
                            </li>
                            <li>
                                <p>
                                    본 행사는 한국어로 진행되며 통역 서비스를 제공하지 않습니다.
                                </p>
                            </li>
                            <li>
                                <p>
                                    사전 등록 마감: 2023.3.20. 20:00
                                </p>
                            </li>
                        </ul>
                    </div>

                    <RegisterDiscordButtons className={classNames(
                        'mt-auto pt-6'
                    )}/>
                </div>
                <div className={classNames(
                    'hidden',
                    'lg:block lg:flex lg:items-center lg:justify-center'
                )}>
                    <div className={classNames(
                        'relative'
                    )}>
                        <div className={classNames(
                            'absolute inset-0'
                        )}>
                            <NameTag className={classNames(
                                'scale-75'
                            )}/>
                        </div>
                        <div className={classNames(
                            'relative z-10 origin-bottom rotate-12'
                        )}>
                            <NameTag className={classNames(
                                'scale-75'
                            )}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
