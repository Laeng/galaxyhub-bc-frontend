'use client'

import { Tab } from '@headlessui/react'
import {Fragment, ReactNode, useState} from "react";
import hash from "@/utils/hash";
import classNames from "classnames";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export interface tabType {
    title: ReactNode|string,
    contents: ReactNode|string
}
interface props {
    tabs: tabType[],
    tabClassName?: string,
    contentsClassName?: string
}

export default function PillsTab({tabs, tabClassName = '', contentsClassName = ''}: props) {
    const [tabsState] = useState(tabs);

    return (
        <Tab.Group>
            <div className={classNames(
                tabClassName
            )}>
                <Tab.List>
                    {tabsState.map((tab, id) => (
                        <Tab key={hash(id.toString() + '-title')} as={Fragment}>
                            {({selected}) => (
                                <button  className={classNames({
                                    'btn-blue': selected,
                                    'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200': !selected,
                                    'btn px-3 py-2 rounded-md': true
                                })}>
                                    { tab.title }
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
            </div>
            <div className={classNames(
                contentsClassName
            )}>
                <Tab.Panels>
                    {tabsState.map((tab, id) => (
                        <Tab.Panel key={hash(id.toString() + '-content')}>
                            <ResponsiveMasonry columnsCountBreakPoints={{
                                640: 1,
                                768: 2,
                                1024: 2,
                                1280: 3,
                                1536: 3
                            }}>
                                <Masonry className={classNames(

                                )} gutter={'1rem'}>
                                    {tab.contents}
                                </Masonry>
                            </ResponsiveMasonry>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </div>
        </Tab.Group>
    );
}
