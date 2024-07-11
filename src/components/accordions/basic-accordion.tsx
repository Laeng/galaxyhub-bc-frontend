'use client'

import hash from "@/utils/hash";
import classNames from "classnames";
import {MinusIcon, PlusIcon} from "@heroicons/react/24/outline";
import {ReactNode, useState} from "react";

interface props {
    children?: ReactNode,
    question: string,

}
export default function BasicAccordion({children = <></>, question}: props) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={classNames(
            'w-full'
        )}>
            <button onClick={e => setOpen(!isOpen)} className={classNames(
                'flex justify-between items-center w-full'
            )}>
                <p className={classNames({
                    'font-medium py-4': true,
                    'text-blue-700 dark:text-blue-500': isOpen
                })}>
                    {question}
                </p>
                <div className={classNames(
                    'flex items-center'
                )}>
                    <PlusIcon className={classNames({
                        'w-6 h-6': true,
                        'block': !isOpen,
                        'hidden': isOpen
                    })}/>
                    <MinusIcon className={classNames({
                        'w-6 h-6': true,
                        'block': isOpen,
                        'hidden': !isOpen
                    })}/>
                </div>
            </button>
            <p className={classNames({
                'pb-6 pt-0': true,
                'block': isOpen,
                'hidden': !isOpen
            })}>
                {children}
            </p>
        </div>
    );
}
