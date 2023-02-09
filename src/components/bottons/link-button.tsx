import {ReactNode} from "react";
import Link from "next/link";

interface props {
    children: ReactNode,
    className?: string,
    href: string,
    target?: string
}

export default function LinkButton({ children, href, className = '', target = '_self' }: props) {

    if (target === '_blank' || href.includes('#')) {
        return <a href={href} target={target} className={className} rel={'noreferrer noopener nofollow'}>{ children }</a>
    }

    return <Link href={href} target={target} className={className}>{ children }</Link>
}
