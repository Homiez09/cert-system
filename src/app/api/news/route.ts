import { fetchNews, fetchNewsById, fetchNewsByPage } from "@/libs/requestAPI";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json()
    if (data.page) { // number
        const getNews = await fetchNewsByPage(data.page);
        return NextResponse.json({
            ...getNews
        });
    } else if (data.recomment) { // boolean
        const getNews = await fetchNewsByPage(1, 5)
        return NextResponse.json({
            ...getNews
        });
    } else if (data.id) {
        const getNews = await fetchNewsById(data.id);
        return NextResponse.json({
            ...getNews
        });
    } else {
        const getNews = await fetchNews();
        return NextResponse.json({
            ...getNews
        });
    }
}