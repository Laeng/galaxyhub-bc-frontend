import classNames from "classnames";
import Image from "next/image";

export default function StorySection() {
    return (
        <section className={classNames(
            'container py-8 space-y-4',
            'lg:py-16'
        )}>
            <div style={{backgroundImage: 'url(\'/images/gwanghwamun.jpg\')'}} className={classNames(
                'bg-center bg-cover rounded-2xl flex items-center justify-center px-8 h-96 mix-blend-darken bg-black/10'
            )}>
                <div className={classNames(
                    'flex justify-center items-center rounded-2xl backdrop-blur-sm border border-white/20 h-48 w-36'
                )}>
                    <Image src={'/images/logo.svg'} width={520} height={720} alt={'bar citizen korea logo'} className={classNames(
                        'h-36 w-36'
                    )}/>
                </div>
            </div>
            <div className={classNames(
                'font-medium leading-relaxed',
                'lg:text-xl'
            )}>
                <p>
                    바시티즌은 스타 시티즌을 좋아하는 사람들이 모여 개최하고 함께 즐기는 행사로 2016년에 처음 개최되었습니다. 대한민국에서 열리는 바시티즌은 2019년 처음 개최되어 지금까지 여러분들과 함께하고 있습니다.
                    대한민국의 바시티즌은 편안한 공간에서 맛있는 저녁 식사와 간단한 주류를 제공하며 참가자 분들과 함께 스타 시티즌의 다양한 소식에 대해 이야기를 나누고 친분을 쌓을 수 있습니다.
                </p>
            </div>
        </section>
    );
}
