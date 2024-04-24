import { AllCyberNews } from "@/components/new/ShowNews";
import { SearchBox } from "@/components/new/SearchBox";
import { fetchNews, fetchNewsByPage } from "@/libs/requestAPI";
import { Suspense } from "react";

export default async function Page() {
    // const getNews = await fetchNews();
    const getNews = await fetchNewsByPage(1);

    return (
        <div className="flex flex-col items-center container md:pt-8 gap-5">
            <span className="lg:text-3xl text-2xl text-center">ความเคลื่อนไหวภัยคุกคามทางไซเบอร์</span>
            {/* <SearchBox category={params.slug} /> */}
            <AllCyberNews className={`gap-5`} />
        </div >
    );
}