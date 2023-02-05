import LinkButton from "@/components/bottons/link-button";
import classNames from "classnames";

interface props {
    className?: string
}

export default function RegisterDiscordButtons({className = ''}: props) {
    return (
        <div className={classNames(
            'flex space-x-2 mb-2',
            className
        )}>
            <div>
                <LinkButton href={'#'} className={classNames(
                    'btn btn-blue rounded-lg'
                )}>
                    사전 등록
                </LinkButton>
            </div>
            <div>
                <LinkButton href={'#'} className={classNames(
                    'btn btn-indigo bg-discord rounded-lg'
                )}>
                    디스코드
                </LinkButton>
            </div>
        </div>
    )
}
