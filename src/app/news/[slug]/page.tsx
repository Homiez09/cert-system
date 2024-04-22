import { AllCyberNews } from "@/components/News";
import { SearchBox } from "@/components/category/SearchBox";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="flex flex-col items-center container">
            <SearchBox category={params.slug} />
            <AllCyberNews category={params.slug} className="pt-7 gap-5" />
        </div>
    );
}