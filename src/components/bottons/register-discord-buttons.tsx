import LinkButton from "@/components/bottons/link-button";
import classNames from "classnames";
import {langType} from "@/lang/langType";

interface props {
    lang: langType,
    className?: string
}

export default function RegisterDiscordButtons({lang, className = ''}: props) {
    return (
        <div className={classNames(
            'flex space-x-2 mb-2',
            className
        )}>
            <div>
                <LinkButton target={'_blank'} href={lang.assets.buttons.pre_registration.url} className={classNames(
                    'btn btn-blue rounded-lg'
                )}>
                    {lang.assets.buttons.pre_registration.title}
                </LinkButton>
            </div>
            <div>
                <LinkButton target={'_blank'} href={lang.assets.buttons.discord.url} className={classNames(
                    'btn btn-indigo bg-discord rounded-lg'
                )}>
                    {lang.assets.buttons.discord.title}
                </LinkButton>
            </div>
        </div>
    )
}
