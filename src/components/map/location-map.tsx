'use client';

import {langType} from "@/lang/lang-type";
import {infoType, locationType} from "@/types/api-contents-home-type";
import classNames from "classnames";
import {useEffect, useRef} from "react";
import {} from "react-kakao-maps-sdk";
import * as process from "process";

interface props {
    lang: langType,
    data: {
        location: locationType
    },
    className: string
}

export default function LocationMap({lang, data, className}: props) {
    const container = useRef(null);

    const lat = data.location.coordinate.latitude;
    const lon = data.location.coordinate.longitude;

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
                new window.kakao.maps.Map(container.current ?? new HTMLElement(), options);

                let map = new window.kakao.maps.Map(container.current ?? new HTMLElement(), options);
                let zoom = new window.kakao.maps.ZoomControl();

                map.addControl(zoom, window.kakao.maps.ControlPosition.RIGHT);

                let marker = new window.kakao.maps.Marker({
                    position: map.getCenter()
                });

                marker.setMap(map);
            });
        };

        script.addEventListener("load", onLoadMap);
    }, [lat, lon]);

    return (
        <div ref={container} className={classNames(
            'flex justify-center items-center',
            className
        )}>
            <p className={classNames(
                'font-medium text-gray-500'
            )}>
                {lang.main.location.contents.loading}
            </p>
        </div>
    );
}
