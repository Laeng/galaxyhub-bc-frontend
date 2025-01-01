'use client';

import {useEffect, useRef} from "react";
import * as process from "process";

export default function Map() {
    const container = useRef<HTMLDivElement>(null);

    const lat = 37.500330;
    const lon = 127.105728;

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`;

        document.head.appendChild(script);

        const onLoadMap = () => {
            window.kakao.maps.load(() => {
                const options = {
                    center: new window.kakao.maps.LatLng(lat, lon),
                    level: 3,
                };
                new window.kakao.maps.Map(container.current ?? document.createElement('div'), options);

                const map = new window.kakao.maps.Map(container.current ?? document.createElement('div'), options);
                const zoom = new window.kakao.maps.ZoomControl();

                map.addControl(zoom, window.kakao.maps.ControlPosition.RIGHT);

                const marker = new window.kakao.maps.Marker({
                    position: map.getCenter()
                });

                marker.setMap(map);
            });
        };

        script.addEventListener("load", onLoadMap);
    }, [lat, lon]);

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
        kakao: {
            maps: any;
        };
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
}