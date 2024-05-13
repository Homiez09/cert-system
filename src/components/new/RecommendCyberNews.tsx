'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardSkeleton } from "./Card";
import { IData, RequestApiProps } from "@/interfaces/RequestApiProps";
import ViewPort from "@/libs/viewPort";
import Custom404 from "@/app/not-found";

export const RecommendCyberNews = ({ numItems }: { numItems: Number }) => {
    const screenWidth = ViewPort().screenWidth;
    const [dataList, setDataList] = useState<RequestApiProps>();
    const [isReady, setReady] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);

    useEffect(() => {
        axios.post('/api/newByPage', { page: 1, pageSize: numItems }).then(async (res) => {
            setDataList(res.data);
            setReady(true);
        }).catch((err) => { setError(true) });
    }, [])

    
    return (
        <>
            {isError ? <Custom404 /> :
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