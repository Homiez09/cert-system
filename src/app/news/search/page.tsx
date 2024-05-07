import Card2 from "@/components/new/Card2";
import { SearchBox } from "@/components/new/SearchBox";

export default function Page() {
    return (
        <div className="flex flex-col pt-3 w-full max-lg:px-3">
            <SearchBox category="cyberNews"/>
            <div className="h-5 w-full container max-w-5xl mt-5 min-h-[40vh] pt-5">
                <Card2 />
            </div>
        </div>
    )
}