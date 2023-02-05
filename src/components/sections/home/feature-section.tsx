'use client'

import classNames from "classnames";
import Image from "next/image";
import {ReactNode, useState} from "react";
import hash from "@/utils/hash";
import {ChatBubbleOvalLeftIcon, GlobeAsiaAustraliaIcon, HeartIcon} from "@heroicons/react/24/outline";
import CenterHeaderContentSection from "@/components/sections/center-header-content-section";

interface featureType {
    icon: ReactNode,
    title: string,
    description1: string
    description2: string
}

export default function FeatureSection() {
    const [features] = useState<featureType[]>([
        {
            icon: <HeartIcon className="h-6 w-6" aria-hidden="true"/>,
            title: '저녁 식사',
            description1: '금강산도 식후경! 고기 매니아 샤타곤이 엄선한 저녁 식사로 든든하게 시작할 수 있어요.',
            description2: '효율적인 예산 운용을 위하여 별도의 채식을 준비할 계획이 없습니다. 건강, 신념상의 이유로 채식을 하시는 경우 별도로 도시락을 준비해주세요.'
        },
        {
            icon: <GlobeAsiaAustraliaIcon className="h-6 w-6" aria-hidden="true"/>,
            title: '정보 교류',
            description1: '스타 시티즌의 새로운 소식에 대해 이야기를 나누고 꿀팁을 서로 공유할 수 있어요.',
            description2: '혹시 라이벌을 만났다면 운영팀에게 알려주세요. 여러분의 뜨거운 복수가 보드 게임을 통해 이뤄질 수 있도록 저희 운영팀이 팝콘과 결투장을 준비할게요.'
        },
        {
            icon: <ChatBubbleOvalLeftIcon className="h-6 w-6" aria-hidden="true"/>,
            title: '친목 도모',
            description1: '혼자 노는 것은 이제 그만. 보드 게임을 통해 새로 만난 사람과 쉽게 친해질 수 있어요.',
            description2: '원활한 행사 진행을 위하여 만 19세 이상 성인만 참여하실 수 있으며 여러분의 귀엽고 사랑스러운 애완동물은 행사장 출입이 불가해요.',
        },
    ]);

    return (
        <CenterHeaderContentSection title={'처음 참가 하시나요? 어서오세요!'}
                                    description={'바 시티즌 코리아에서 어떤 것을 할 수 있는지 알려드릴게요!'}
                                    badge={'바 시티즌 소개'}
        >
            <div className={classNames(
                'rounded-2xl pb-4',
                'lg:pb-16'
            )}>
                <Image src={'/images/bar-citizen-korea-2022.jpg'}
                       alt={'bar citizen 2022 photo'}
                       width={'2048'} height={'1371'}
                       className={classNames(
                           'rounded-2xl w-full bg-blend-overlay'
                       )}
                       priority
                />
            </div>
            <div className={classNames(
                'grid gap-4',
                'lg:grid-cols-3'
            )}>
                {features.map((feature) => (
                    <div key={hash(feature.title)} className={classNames(
                        'flex space-x-2'
                    )}>
                        <div className={classNames(
                            'flex flex-col items-center'
                        )}>
                            <div className={classNames(
                                'h-6 w-6 text-blue-600'
                            )}>
                                {feature.icon}
                            </div>
                        </div>
                        <div className={classNames(
                            'space-y-2'
                        )}>
                            <p className={classNames(
                                'space-x-2',
                                'lg:text-lg'
                            )}>
                                <span className={classNames(
                                    'font-medium'
                                )}>
                                    {feature.title}
                                </span>
                                <span className={classNames(
                                    'text-gray-600'
                                )}>
                                    {feature.description1}
                                </span>
                            </p>
                            <p className={classNames(
                                'text-gray-600'
                            )}>
                                {feature.description2}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </CenterHeaderContentSection>
    );
}
