import { AllCyberNews } from "@/components/new/ShowNews";
import { SearchBox } from "@/components/new/SearchBox";
import { Suspense } from "react";

export default async function Page() {
    return (
        <div className="flex flex-col items-center container md:pt-8 gap-5">
            <span className="lg:text-3xl text-2xl text-center">ความเคลื่อนไหวภัยคุกคามทางไซเบอร์</span>
            {/* <SearchBox category={params.slug} /> */}
            <Suspense>
                <AllCyberNews />
            </Suspense>
        </div >
    );
}