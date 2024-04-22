'use client';

import { AllCyberNews } from "@/components/News";
import { SearchBox } from "@/components/category/SearchBox";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
    const query = useSearchParams().get("query") || "";
    return (
        <div className="flex flex-col items-center container">
            <SearchBox query={query} category={params.slug} />
            <AllCyberNews category={params.slug} className="pt-7 gap-5" />
        </div>
    );
}