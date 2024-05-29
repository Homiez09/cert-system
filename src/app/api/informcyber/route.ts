import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

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
        return NextResponse.json({ status: 400, message: err }, { status: 400 })
    }
}

export async function GET(request: Request) {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/inform-cybers?populate=*&pagination[page]=1&pagination[pageSize]=99999`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });

        return NextResponse.json({
            status: res.status,
            message: res.statusText,
            data: res.data.data
        })
    } catch (err) {
        return NextResponse.json({ status: 400, message: err }, { status: 400 })
    }
}