'use client'

import Card2, { CardSkeleton2 } from "@/components/new/Card2";
import axios from "axios";
import { SearchBox } from "@/components/new/SearchBox";
import { IData } from "@/interfaces/RequestApiProps";
import { useEffect, useState } from "react";


export default function Page() {
    const [dataList, setDataList] = useState<IData[]>();
    const [result, setResult] = useState<string>("");

    useEffect(() => {
        axios.post('/api/news').then((res) => {
            setDataList(res.data.data);
        }).catch(err => {
            // console.log(err);
        })
    }, [])

    return (
        <div className="flex flex-col pt-3 w-full max-lg:px-3 min-h-[60vh]">
            <SearchBox setResult={setResult} />
            <div className="w-full container max-w-5xl mt-5 h-full pt-5">
                {dataList ? dataList.filter((item: IData) => item.attributes.title.toLowerCase().includes(result.toLowerCase())).map((item: IData, index: number) => {
                    return (
                        <Card2 key={index} props={item} />
                    );
                }) : <><CardSkeleton2 /><CardSkeleton2 /></>}
            </div>
        </div>
    )
}