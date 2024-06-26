import { RequestApiProps } from "@/interfaces/RequestApiProps";
import axios from "axios";
import { NextResponse } from "next/server";

interface IPayload {
    id: number;
}

export async function POST(request: Request) {
    try {
        const payload = await request.json() as IPayload;
        
        const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contents/${payload.id}?populate=*`, {
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