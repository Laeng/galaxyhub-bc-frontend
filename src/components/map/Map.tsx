'use client';

import {useEffect, useRef} from "react";

interface MapProps {
    lat: number;
    lng: number;
}

export default function Map({ lat, lng }: MapProps) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;

        document.head.appendChild(script);

        const onLoadMap = () => {
            if (!container.current || !window.naver) return;

            const map = new window.naver.maps.Map(container.current, {
                center: new window.naver.maps.LatLng(lat, lng),
                zoom: 15,
            });

            new window.naver.maps.Marker({
                position: new window.naver.maps.LatLng(lat, lng),
                map: map,
            });
        };

        script.addEventListener("load", onLoadMap);

        return () => {
            script.removeEventListener("load", onLoadMap);
        };
    }, [lat, lng]);

    return (
        <div ref={container} className={
            'flex justify-center items-center h-full w-full'
        }>
            <p className={
                'font-medium text-gray-500'
            }>
                불러오는 중...
            </p>
        </div>
    );
}

declare global {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    interface Window {
        naver: {
            maps: any;
        };
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
}