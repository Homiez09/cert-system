import { RequestApiProps } from "@/interfaces/RequestApiProps";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contents?populate=*&sort[0]=id:desc`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });

        if (res.status === 200) {
            return NextResponse.json({
                status: res.status,
                message: res.statusText,
                data: res.data.data,
                meta: res.data.meta
            } as RequestApiProps)
        } else {
            return NextResponse.json({
                status: res.status,
                message: res.statusText
            } as RequestApiProps)
        }
    } catch (err) {
        return NextResponse.json({ status: 400, message: err }, { status: 400 })
    }
}