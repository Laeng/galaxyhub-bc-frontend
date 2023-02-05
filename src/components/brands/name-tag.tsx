import classNames from "classnames";
import {ReactNode} from "react";

interface props {
    className?: string
}

export default function NameTag({className = ''}: props) {
    const decoration: ReactNode = (
        <div className={classNames(
            'flex flex-col space-y-3 py-2'
        )}>
            <div style={{
                height: '1px'
            }} className={classNames(
                'h-px bg-yellow-800 w-2'
            )}>
            </div>
            <div style={{
                height: '1px'
            }} className={classNames(
                'h-px bg-yellow-800 w-2'
            )}>
            </div>
            <div style={{
                height: '1px'
            }} className={classNames(
                'h-px bg-yellow-800 w-2'
            )}>
            </div>
            <div style={{
                height: '1px'
            }} className={classNames(
                'h-px bg-yellow-800 w-2'
            )}>
            </div>
        </div>
    );

    return (
        <div className={classNames(
            'rounded-xl bg-black border border-gray-700',
            className
        )}>
            <div className={classNames(
                'px-4'
            )}>
                <div className={classNames(
                    'grid grid-cols-3 items-center gap-4 pt-4'
                )}>
                    <div className={classNames(
                        'flex items-center justify-start'
                    )}>
                        <div className={classNames(
                            'text-xs text-yellow-300'
                        )}>
                            <p style={{
                                marginTop: '1px',
                                marginRight: '-1px'
                            }}>
                                &gt;
                            </p>
                        </div>
                        <div className={classNames(
                            'flex items-end'
                        )}>
                            <div style={{
                                height: '1px',
                                marginRight: '2px'
                            }} className={classNames(
                                'bg-yellow-300 w-2'
                            )}>

                            </div>
                            <div className={classNames(
                                'flex flex-col w-4'
                            )}>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '2px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                            </div>
                            <div className={classNames(
                                'flex flex-col w-2'
                            )}>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '2px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                            </div>
                            <div className={classNames(
                                'flex flex-col w-1'
                            )}>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '2px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                            </div>
                            <div style={{
                                width: '2px'
                            }} className={classNames(
                                'flex flex-col'
                            )}>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '2px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                            </div>
                            <div className={classNames(
                                'flex flex-col w-1'
                            )}>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '2px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                            </div>
                            <div className={classNames(
                                'flex flex-col w-1'
                            )}>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '2px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                            </div>
                            <div style={{
                                width: '1px'
                            }} className={classNames(
                                'flex flex-col'
                            )}>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '2px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                            </div>
                            <div style={{
                                width: '2px'
                            }} className={classNames(
                                'flex flex-col'
                            )}>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '2px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                            </div>
                            <div style={{
                                width: '1px'
                            }} className={classNames(
                                'flex flex-col'
                            )}>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '2px'
                                }} className={classNames(
                                    'bg-transparent w-full'
                                )}>
                                </div>
                                <div style={{
                                    height: '1px'
                                }} className={classNames(
                                    'bg-yellow-300 w-full'
                                )}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(
                        'flex justify-center items-center'
                    )}>
                        <div className={classNames(
                            'rounded-full bg-transparent border-2 border-gray-700 h-4 w-16'
                        )}>
                        </div>
                    </div>
                    <div className={classNames(
                        ''
                    )}>

                    </div>
                </div>
                <div className={classNames(
                    'flex justify-center items-center pb-3 pt-2'
                )}>
                    <p className={classNames(
                        'font-black text-4xl tracking-widest text-white'
                    )}>
                        CITIZEN PASS
                    </p>
                </div>
            </div>
            <div style={{
                backgroundImage: 'linear-gradient(#ca8a04 1px, transparent 1px), linear-gradient(to right, #ca8a04 1px, #f59e0b 1px)',
                backgroundSize: '4px 4px'
            }} className={classNames(
                'w-full px-2'
            )}>
                <div className={classNames(
                    'flex justify-between items-center'
                )}>
                    { decoration }
                    { decoration }
                </div>
            </div>
            <div className={classNames(
                'py-12 text-white text-center uppercase '
            )}>
                <p className={classNames(
                    'text-xs'
                )}>
                    Bar Citizen will be waiting for
                </p>
                <p className={classNames(
                    'font-black text-4xl text-yellow-500 py-6'
                )}>
                    You
                </p>
                <p className={classNames(
                    'text-xs'
                )}>
                    Thank you for visiting.
                </p>
            </div>
            <div style={{
                backgroundImage: 'linear-gradient(#ca8a04 1px, transparent 1px), linear-gradient(to right, #ca8a04 1px, #f59e0b 1px)',
                backgroundSize: '4px 4px'
            }} className={classNames(
                'w-full px-2'
            )}>
                <div className={classNames(
                    'flex justify-between items-center'
                )}>
                    { decoration }
                    { decoration }
                </div>
            </div>
            <div className={classNames(
                'px-4 py-2'
            )}>
                <div className={classNames(
                    'flex justify-between items-center text-white'
                )}>
                    <p>
                        Bar Citizen Korea
                    </p>
                    <p>
                        2953
                    </p>
                </div>
            </div>
        </div>
    );
}
