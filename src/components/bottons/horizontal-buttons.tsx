import classNames from "classnames";
import LinkButton from "@/components/bottons/link-button";
import hash from "@/utils/hash";

interface props {
    className?: string,
    buttons: button[]
}

export interface button {
    name: string,
    url: string,
    target: string,
    class: string,
}

export default function HorizontalButtons({className = '', buttons}: props) {
    return (
        <div className={classNames(
            'flex space-x-2 mb-2',
            className
        )}>
            {buttons.map(button => (
                <div key={hash(button.name)}>
                    <LinkButton target={button.target} href={button.url} className={classNames(
                        button.class
                    )}>
                        {button.name}
                    </LinkButton>
                </div>
            ))}
        </div>
    );
}
