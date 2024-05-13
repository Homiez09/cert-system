'use client'

import { useEffect, useState } from "react";

export default function ViewPort() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
        return () => window.removeEventListener("resize", () => setScreenWidth(window.innerWidth));
    }, [])

    return { screenWidth };
}