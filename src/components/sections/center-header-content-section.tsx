import {ReactNode} from "react";
import classNames from "classnames";

interface props {
    badge?: string,
    title?: string,
    description?: string,
    children?: ReactNode
}

export default function CenterHeaderContentSection({
                                                       badge = '',
                                                       title = '',
                                                       description = '',
                                                       children = <></>
}: props) {
    return (
        <section className={classNames(
            'container py-8',
            'lg:px-24 lg:py-16'
        )}>
            <div className={classNames(
                'flex flex-col items-start space-y-2 pb-4',
                'lg:items-center lg:pb-16 lg:space-y-4'
            )}>
                <p className={classNames(
                    'badge badge-blue py-1.5 px-4'
                )}>
                    {badge}
                </p>
                <h3 className={classNames(
                    'font-together text-4xl'
                )}>
                    {title}
                </h3>
                <p className={classNames(
                    ''
                )}>
                    {description}
                </p>
            </div>
            {children}
        </section>
    );
}
