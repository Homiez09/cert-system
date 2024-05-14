'use client';

import { ICategory, IData } from "@/interfaces/RequestApiProps";
import Image from "next/image";
import Link from "next/link";

export default ({ data }: { data: IData }) => {
    const id = data.id;
    const title = data.attributes.title;
    // const category = data.attributes.categories.data.map((category: ICategory) => category.attributes.name_en).join(", ");
    const category = data.attributes.categories.data.map((category: ICategory) => category.attributes.name_th).join(", ");
    const categoryTH = data.attributes.categories.data.map((category: ICategory) => category.attributes.name_th).join(", ");
    const thumbnail = data.attributes.thumbnail?.data.attributes.url || "";
    const createdAt = data.attributes.createdAt;

    return (
        <div className="px-5 w-full">
            <div className="flex flex-col gap-3 w-full h-[325px] shadow-lg rounded-lg border relative z-[99]">
                <div className="relative w-full h-52 rounded-t-lg">
                    <Image
                        src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + thumbnail}
                        alt={title}
                        priority
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover rounded-t-lg w-full h-auto" />
                </div>
                <div className="flex flex-col p-2 w-full h-[100px] justify-between">
                    <Link href={`/news/cybernews/${id}`} className="text-lg font-bold hover:text-hover text-ellipsis">{title}</Link>
                    <div className="flex flex-row justify-between items-end">
                        <Link href={`/news/cybernews`} className="text-sm text-primary hover:text-hover">{categoryTH}</Link>
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