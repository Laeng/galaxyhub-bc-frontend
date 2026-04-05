'use client';

import {useEffect, useRef} from "react";

declare global {
    interface Window {
        google: typeof google;
    }
}

interface MapProps {
    lat: number;
    lng: number;
}

export default function Map({ lat, lng }: MapProps) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_STYLE_ID;

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&map_ids=${mapId}`;

        document.head.appendChild(script);

        const onLoadMap = () => {
            if (!container.current || !window.google) return;

            const map = new window.google.maps.Map(container.current, {
                center: { lat, lng },
                zoom: 15,
                mapId: mapId,
            });

            new window.google.maps.marker.AdvancedMarkerElement({
                position: { lat, lng },
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