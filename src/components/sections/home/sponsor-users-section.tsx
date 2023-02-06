import CenterHeaderContentSection from "@/components/sections/center-header-content-section";
import classNames from "classnames";
import SponsorUsersTab, {sponsorListType} from "@/components/tabs/sponsor-users-tab";
import {langType} from "@/lang/langType";

interface props {
    lang: langType
}
export default function SponsorUsersSection({lang}: props) {
    const sponsors: sponsorListType[] = [
        {
            year: 2023,
            sponsors: [
                {
                   name: 'Shatagon',
                   comment: '다시 만나뵙게 되어 반갑습니다.'
                },
                {
                    name: 'Bill Red',
                    comment: '즐거운 시간 되세요~'
                },
                {
                    name: 'SSG477',
                    comment: '쓱 TV 많관부~'
                },
            ]
        },
        {
            year: 2022,
            sponsors: [
                {
                    name: 'Shatagon',
                    comment: '고기와 칵테일. 그리고 감자'
                },
                {
                    name: 'Bill Red',
                    comment: '이번에도 참석을 못하게 되었네요. 저 대신 고기 값 보내드립니다! 하하'
                },
                {
                    name: 'SSG477',
                    comment: ':D'
                },
                {
                    name: 'AruiD',
                    comment: '헐E에 바티즌 광고 달리는 날을 기원합니다'
                },
                {
                    name: 'ArkRayAlpha',
                    comment: '눈떠보니 낯선천장이 아니길 빌어봅니다...'
                },
                {
                    name: 'BBanishing',
                    comment: '삐약삐약'
                },
                {
                    name: 'Chams',
                    comment: '다들 오래도록 버티고 버티어 이렇게 좋은 모임도 만드시느라 수고가 많네요 저도 참여하고 싶지만 여의치 안네요 언젠가 다들 모일 그날을 위해! 좋은 모임은 계속되어야 한드아아아아아'
                },
                {
                    name: 'Cube Bystand',
                    comment: '이번 바시티즌도 기대됩니다!!'
                },
                {
                    name: 'KirinRush',
                    comment: '3년만에 할수 있어 기대됩니다'
                },
                {
                    name: 'Nileblue',
                    comment: '다들 5키로씩 찌고 가세요'
                },
                {
                    name: 'TangBox',
                    comment: '첫 바티즌 기대됩니다'
                },
                {
                    name: '건빵',
                    comment: '바티즌 참여시 상시 판매 함선 정가 제공'
                },
                {
                    name: '갤럭시허브',
                    comment: '이번 바시티즌 행사에서 도움을 드릴 수 있게 되어 정말 기쁩니다.'
                },
                {
                    name: '김봉팔',
                    comment: '바티즌 저쪽 신사분께서 개최하신 겁니다 찡긋'
                },
                {
                    name: '대머리독수리',
                    comment: '다이스키한 쓱장과 즐거운 바티즌을....'
                },
                {
                    name: '인생트롤',
                    comment: '크리스줄거 바티즌에게 보낸다'
                }
            ]
        }
    ];

    return (
        <CenterHeaderContentSection title={lang.main.sponsor_users.title}
                                    description={lang.main.sponsor_users.description}
                                    badge={lang.main.sponsor_users.badge}>
            <div className={classNames(
                'w-full',
                'lg:-mt-10'
            )}>
                <SponsorUsersTab sponsors={sponsors}/>
            </div>
        </CenterHeaderContentSection>
    );
}
