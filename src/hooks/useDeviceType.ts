import { useEffect, useState } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    return width
}


export function useDeviceType(): DeviceType {
    const width = useWindowWidth();
    if (width < 768) {
        return "mobile";
    }
    if (width < 1024) {
        return "tablet";
    }
    return "desktop";
}