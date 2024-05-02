import { uploadInformCyber } from "@/libs/requestAPI";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.formData();

    try {
        const allowedOrigin = process.env.NEXT_PUBLIC_URL;

        if (request.headers.get('origin') !== allowedOrigin) {
            throw new Error('Unauthorized');
        }
;
        const response = await uploadInformCyber(data);
        return NextResponse.json({
            ...response
        });

    } catch (err) {
        console.error("Error occurred:", err);
        return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 });
    }
}