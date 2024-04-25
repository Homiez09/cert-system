'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Pagination from "./Pagination";
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import Card, { CardSkeleton } from "./Card";
import { useSearchParams } from "next/navigation";
import { CarbonUserAvatarFilled } from "@/icons/Avatar";
import { RiTimeLine } from "@/icons/Clock";
import { MaterialSymbolsFolderOutline } from "@/icons/Folder";
import { kanit } from "@/libs/font";
import { IData, RequestApiProps } from "@/interfaces/RequestApiProps";

export const AllCyberNews = () => {
    const query = useSearchParams().get("page") || 1;

    const [perPage, setPerPage] = useState<RequestApiProps>();

    useEffect(() => {
        axios.post('/api/news', { page: query }).then((res) => {
            setPerPage(res.data);
            console.log(res.data.message)
        });
    }, [query])

    return (
        <>
            <div className={`w-full grid lg:grid-cols-3 grid-cols-1 gap-5`}>
                {perPage ? perPage.data?.map((item: IData, index: number) => {
                    return (
                        <Card key={index} data={item} />
                    );
                }) :
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>}
            </div>
            {perPage ? <Pagination pageCount={perPage.meta?.pagination.pageCount} /> : <Pagination pageCount={10} />}
        </>
    )
}

export const RecommendCyberNews = ({ dataList }: { dataList: any }) => {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });
        return () => {
            window.removeEventListener('resize', () => {
                setScreenWidth(window.innerWidth);
            });
        }
    }, [screenWidth]);
    return (
        <>
            <div className="w-full lg:px-10 pt-3">
                {dataList && dataList.data != null && screenWidth != 0 ?
                    <Slider
                        dots
                        infinite
                        autoplay
                        autoplaySpeed={2000}
                        slidesToShow={screenWidth > 1024 ? 3 : 1}
                        slidesToScroll={1}
                        arrows={false}
                        className="hover:cursor-grab active:cursor-grabbing">
                        {dataList.data.map((item: IData, index: number) => {
                            return (
                                <Card key={index} data={item} />
                            );
                        })}
                    </Slider>
                    :
                    <>
                    <div className="flex flex-row w-full max-lg:hidden">
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </div>
                    <div className="flex flex-row w-full lg:hidden">
                        <CardSkeleton />
                    </div>
                    </>                
                }
            </div>
        </>
    );
}

export const GetContentById = ({ data }: { data: IData }) => {
    if (data.id == null) return <div className="h-screen">Not Found</div>;
    const id = data.id;
    const title = data.attributes.title;
    const category = data.attributes.categories.data[0].attributes?.name_en || "";
    const categoryTH = data.attributes.categories.data[0].attributes.name_th || "";
    const content = data.attributes.content;
    const thumbnail = data.attributes.thumbnail.data.attributes.url;
    const createdAt = data.attributes.createdAt;
    return (
        <>
            <div className="relative w-full lg:h-[180px] h-[90px] bg-black">
                <div className="flex flex-col h-full items-center justify-center text-white">
                    <span className="lg:text-2xl text-xl text-center px-2 text-ellipsis">{title}</span>
                </div>
                <Image src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + thumbnail} className="object-cover opacity-30" fill={true} alt={title} />
            </div>
            <div className="md:w-[680px] w-full px-1">
                <div className="w-full flex flex-row items-center justify-center p-3 gap-1">
                    <CarbonUserAvatarFilled className="w-4 h-auto" />
                    <span className="text-xs text-gray-500">
                        Admin
                    </span>
                    <RiTimeLine className="w-4 h-auto ml-2" />
                    <span className="text-xs text-gray-500">
                        {createdAt.slice(0, 10)}
                    </span>
                    <MaterialSymbolsFolderOutline className="w-4 h-auto ml-2" />
                    <span className="text-xs text-gray-500">
                        {categoryTH}
                    </span>
                </div>
                <div id="content" className={`w-full prose`} dangerouslySetInnerHTML={{ __html: content }}/>
            </div>
        </>
    );
}