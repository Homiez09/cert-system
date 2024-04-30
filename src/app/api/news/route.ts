import { fetchNews, fetchNewsById, fetchNewsByPage } from "@/libs/requestAPI";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json()

    try {
        const allowedOrigin = process.env.NEXT_PUBLIC_URL;

        if (request.headers.get('origin') !== allowedOrigin) {
            throw new Error('Unauthorized');
        }

        if (data.page) { // number
            const getNews = await fetchNewsByPage(data.page);
            return NextResponse.json({ ...getNews });
        } else if (data.recomment) { // boolean
            const getNews = await fetchNewsByPage(1, 5)
            return NextResponse.json({ ...getNews });
        } else if (data.id) {
            const getNews = await fetchNewsById(data.id);
            return NextResponse.json({ ...getNews });
        } else {
            const getNews = await fetchNews();
            return NextResponse.json({ ...getNews });
        }
    } catch (err) {
        console.error("Error occurred:", err);
        return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 });
    }
}