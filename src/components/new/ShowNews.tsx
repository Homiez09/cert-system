'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Pagination from "./Pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardSkeleton } from "./Card";
import { useSearchParams } from "next/navigation";
import { CarbonUserAvatarFilled } from "@/icons/Avatar";
import { RiTimeLine } from "@/icons/Clock";
import { MaterialSymbolsFolderOutline } from "@/icons/Folder";
import { IData, RequestApiProps, RequestApiPropsById } from "@/interfaces/RequestApiProps";

export const AllCyberNews = () => {
    const query = useSearchParams().get("page") || 1;

    const [perPage, setPerPage] = useState<RequestApiProps>();
    const [isReady, setReady] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        axios.post('/api/newByPage', { page: query }).then(async (res) => {
            await setPerPage(res.data);
            await setReady(true);
        }).catch((err) => { setError(true) });
    }, [query])

    return (
        <>
            {isError ? <div className="flex flex-col justify-center items-center w-full lg:px-10 pt-3 h-[60vh]">Not Found</div> :
                <>
                    <div className={`w-full grid lg:grid-cols-3 grid-cols-1 gap-5`}>
                        {isReady ?
                            <>
                                {perPage!.data.map((item: IData, index: number) => {
                                    return (
                                        <Card key={index} data={item} />
                                    );
                                })}
                            </>
                            :
                            <>
                                <CardSkeleton />
                                <CardSkeleton />
                                <CardSkeleton />
                                <CardSkeleton />
                            </>
                        }
                    </div>
                    {perPage?.status === 200 ? <Pagination pageCount={perPage.meta?.pagination.pageCount} /> : <Pagination pageCount={10} />}
                </>
            }
        </>
    )
}

export const RecommendCyberNews = ({ numItems }: { numItems: Number }) => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [dataList, setDataList] = useState<RequestApiProps>();

    const [isReady, setReady] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        axios.post('/api/newByPage', { page: 1, pageSize: numItems }).then(async (res) => {
            setDataList(res.data);
            setReady(true);
        }).catch((err) => { setError(true) });
    }, [])

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
            {isError ? <div className="flex flex-col justify-center items-center w-full h-[40vh] lg:px-10 pt-3">Not Found</div> :
                <div className="w-full lg:px-10 pt-3">
                    {isReady && screenWidth != 0 ?
                        <Slider
                            dots
                            infinite
                            draggable={dataList!.data.length > 3}
                            autoplay
                            autoplaySpeed={10000}
                            slidesToShow={screenWidth > 1024 ? 3 : 1}
                            slidesToScroll={screenWidth > 1024 ? 2 : 1}
                            arrows={false}
                            className="hover:cursor-grab active:cursor-grabbing"
                        >
                            {dataList!.data.map((item: IData, index: number) => {
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
            }
        </>
    );
}

export const GetContentById = ({ id }: { id: Number }) => {
    const [res, setRes] = useState<{
        title: string,
        category: string,
        categoryTH: string,
        content: string,
        thumbnail: string,
        createdAt: string
    }>({
        title: "",
        category: "",
        categoryTH: "",
        content: "",
        thumbnail: "",
        createdAt: ""
    });

    const [isReady, setReady] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        axios.post('/api/newById', { id: id }).then(async (res) => {
            await setRes({
                title: res.data.data.attributes.title,
                category: res.data.data.attributes.categories.data[0].attributes?.name_en || "",
                categoryTH: res.data.data.attributes.categories.data[0].attributes.name_th || "",
                content: res.data.data.attributes.content,
                thumbnail: res.data.data.attributes.thumbnail.data.attributes.url,
                createdAt: res.data.data.attributes.createdAt,
            });

            await setReady(true);
        }).catch((err) => { setError(true) });
    }, []);

    return (
        <>
            {isError ? <div className="flex flex-col justify-center h-[60vh]">Not Found</div> :
                isReady ?
                    <>
                        < div className="relative w-full lg:h-[180px] h-[90px] bg-black" >
                            <div className="flex flex-col h-full items-center justify-center text-white">
                                <span className="lg:text-2xl text-xl text-center px-2 text-ellipsis">{res!.title}</span>
                            </div>
                            <Image placeholder="empty" quality={100} loading="lazy" src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + res!.thumbnail} className="object-cover opacity-30 w-auto h-auto" fill={true} alt={res!.title} />
                        </div >
                        <div className="md:w-[680px] w-full px-1">
                            <div className="w-full flex flex-row items-center justify-center p-3 gap-1">
                                <CarbonUserAvatarFilled className="w-4 h-auto" />
                                <span className="text-xs text-gray-500">
                                    Admin
                                </span>
                                <RiTimeLine className="w-4 h-auto ml-2" />
                                <span className="text-xs text-gray-500">
                                    {res!.createdAt.slice(0, 10)}
                                </span>
                                <MaterialSymbolsFolderOutline className="w-4 h-auto ml-2" />
                                <span className="text-xs text-gray-500">
                                    {res!.categoryTH}
                                </span>
                            </div>
                            <div id="content" className={`w-full prose`} dangerouslySetInnerHTML={{ __html: res!.content }} />
                        </div>
                    </>
                    :
                    <div className="flex flex-col justify-center h-[60vh]">Loading...</div>
            }
        </>
    );
}