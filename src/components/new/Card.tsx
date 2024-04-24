'use client';

import Image from "next/image";
import Link from "next/link";

export default ({ data }: { data: any }) => {
    const id = data.id;
    const title = data.attributes.title;
    const category = data.attributes.categories.data[0].attributes?.name_en || "";
    const categoryTH = data.attributes.categories.data[0].attributes.name_th || "";
    const thumbnail = data.attributes.thumbnail.data.attributes.url;
    const createdAt = data.attributes.createdAt;

    return (
        <div className="px-5 w-full">
            <div className="flex flex-col gap-3 w-full h-[325px] shadow-lg rounded-lg border">
                <Image loading="lazy" src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + thumbnail} alt="thumbnail" className="w-full h-52 object-cover rounded-t-lg" width={1270} height={720} />
                <div className="p-2">
                    <Link href={`/news/${category}/${id}`} className="text-lg font-bold hover:text-[#02b371] text-ellipsis">{title}</Link>
                    <div className="flex flex-row justify-between items-end">
                        <Link href={`/news/${category}`} className="text-sm text-white border rounded-full px-1 bg-[#02b371] bg-opacity-70">{categoryTH}</Link>
                        <span className="text-sm text-gray-500 pt-2">{createdAt.slice(0, 10)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const CardSkeleton = () => {
    return (
        <div className="px-5 w-full">
            <div className="flex flex-col gap-3 w-full border h-[325px] shadow-md rounded-lg animate-pulse">
                <div className="w-full h-52 bg-gray-300 object-cover rounded-t-lg"></div>
                <div className="p-2">
                    <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                    <div className="flex flex-row justify-between items-end">
                        <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
                        <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}