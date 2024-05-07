import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const allowedOrigin = process.env.NEXT_PUBLIC_URL;

        if (request.headers.get('origin') !== allowedOrigin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

        const res = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/inform-cybers/`, formData, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });

        return NextResponse.json({
            status: res.status,
            message: res.statusText,
        })
    } catch (err) {
        return NextResponse.json({ error: "Payload is required" }, { status: 400 })
    }
}