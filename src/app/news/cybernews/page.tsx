import Loading from "@/components/Loading";
import { AllCyberNews } from "@/components/new/ShowNews";
import { Suspense } from "react";

export default async function Page() {
    return (
        <div className="flex flex-col items-center container md:pt-8 gap-5">
            <span className="lg:text-3xl text-2xl text-center">ความเคลื่อนไหวภัยคุกคามทางไซเบอร์</span>
            <Suspense fallback={<Loading />}>
                <AllCyberNews />
            </Suspense>
        </div >
    );
}