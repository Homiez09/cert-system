import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const res = await axios.post(`/api/inform-cybers/`, formData, {
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