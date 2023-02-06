'use client'

import {Fragment} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from "classnames";
import {langType} from "@/lang/langType";
import hash from "@/utils/hash";
import LinkButton from "@/components/bottons/link-button";

interface props {
    lang: langType
}
export default function HeaderSection({lang}: props) {
    return (
        <section className={classNames(
            'relative'
        )}>
            <div className={classNames(
                'h-16'
            )}>
            </div>
            <Disclosure as="nav" className="fixed top-0 w-full bg-gray-800 z-20">
                {({ open }) => (
                    <>
                        <div className={classNames(
                            'container py-0'
                        )}>
                            <div className={classNames(
                                'flex h-16 items-center justify-between'
                            )}>
                                <div className={classNames(
                                    'flex-shrink-0'
                                )}>
                                    <h1 className={classNames(
                                        'font-bold text-xl text-white'
                                    )}>
                                        <LinkButton href={lang.assets.buttons.bar_citizen_korea.url}>
                                            {lang.assets.buttons.bar_citizen_korea.title}
                                        </LinkButton>
                                    </h1>
                                </div>

                                <div className={classNames(
                                    '-mr-2 flex',
                                    'md:hidden'
                                )}>
                                    <Disclosure.Button className={classNames(
                                        'inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                    )}>
                                        <span className={classNames(
                                            'sr-only'
                                        )}>
                                            Open main menu
                                        </span>
                                        <Bars3Icon className={classNames('block h-6 w-6')} aria-hidden="true"/>
                                    </Disclosure.Button>
                                </div>

                                <div className={classNames(
                                    'absolute top-0 left-0 transition-transform duration-200 overflow-hidden z-30',
                                    'md:relative md:ml-6 md:transition-none md:w-full',
                                    {
                                        'translate-y-0 opacity-100 w-full': open,
                                        'md:w-auto': open,

                                        'translate-y-[100vh] opacity-0 w-full': !open,
                                        'md:opacity-100 md:translate-y-0': !open
                                    }
                                )}>
                                    <div className={classNames(
                                        'rounded-t-2xl border-t border-gray-300 dark:border-gray-700 bg-gray-800',
                                        'md:p-0 md:items-end md:rounded-none md:border-0 md:bg-transparent'
                                    )}>
                                        <div className={classNames(
                                            'mr-2 flex justify-end items-center h-16',
                                            'md:hidden'
                                        )}>
                                            <Disclosure.Button className={classNames(
                                                'inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                            )}>
                                                <span className={classNames(
                                                    'sr-only'
                                                )}>
                                                    Close main menu
                                                </span>
                                                <XMarkIcon className={classNames('block h-6 w-6')} aria-hidden="true" />
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                    <div className={classNames(
                                        'overflow-auto h-screen bg-gray-800',
                                        'md:h-auto md:max-h-fit'
                                    )}>
                                        <ul className={classNames(
                                            'w-full text-center border-t border-gray-700',
                                            'md:flex md:w-full md:items-center md:border-0'
                                        )}>
                                            {lang.assets.menu.map(part => (
                                                <li key={hash(part.title)} className={classNames(
                                                    'py-4 flex justify-around w-full text-center border-b border-gray-700 font-medium text-gray-300',
                                                    'md:px-3 md:py-2 md:block md:w-auto md:float-left md:block md:rounded-md md:text-sm hover:md:bg-gray-700 hover:md:text-white md:border-0 md:mr-2'
                                                )}>
                                                    <LinkButton href={part.url} className={classNames(
                                                        'w-full text-center',
                                                        'md:w-auto'
                                                    )}>
                                                        {part.title}
                                                    </LinkButton>
                                                </li>
                                            ))}
                                            {/*
                                               <li className={classNames(
                                                'w-full text-center border-b border-gray-300 dark:border-white/10 font-medium',
                                                'md:ml-auto md:block md:w-auto md:px-3 md:py-2 md:float-left md:block md:rounded-md md:text-sm md:text-gray-300 hover:md:bg-gray-700 hover:md:text-white md:border-0')}>
                                                <LinkButton href={'/login'} className={classNames(
                                                    'w-full text-center',
                                                    'md:w-auto'
                                                )}>
                                                    로그인
                                                </LinkButton>
                                            </li>
                                            */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        </section>
    )
}
