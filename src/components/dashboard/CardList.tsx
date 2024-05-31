"use client";

import Card, { CardSkeleton } from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import CardLineChart from "./CardLineChart";

export interface ICategory {
    title: string;
    number: number;
    colorTailwind1: string;
    colorTailwind2: string;
}

export default function CardList() {
    const [categories, setCategories] = useState<ICategory[]>([
        {
            title: "Defecement",
            number: 0,
            colorTailwind1: "bg-primary",
            colorTailwind2: "bg-hover"
        },
        {
            title: "Gambling",
            number: 0,
            colorTailwind1: "bg-primary",
            colorTailwind2: "bg-hover"
        },
        {
            title: "Malware",
            number: 0,
            colorTailwind1: "bg-primary",
            colorTailwind2: "bg-hover"
        },
        {
            title: "Other",
            number: 0,
            colorTailwind1: "bg-primary",
            colorTailwind2: "bg-hover"
        }
    ]);

    const [isReady, setReady] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('All');
    const [data, setData] = useState<any>();

    useEffect(() => {
        console.log(selected);
    }, [selected])

    useEffect(() => {
        axios.get('/api/informcyber').then((res) => {
            // split categories
            const data = res.data.data;
            interface ICategory {
                category: string;
                approval: string;
            }

            const categories: ICategory[] = data.map((item: any) => {
                return {
                    category: item.attributes.category,
                    approval: item.attributes.inform_cyber_approval.data?.attributes?.type || 'Pending',
                }
            });

            // count categories
            const count = categories.reduce((acc: any, item: ICategory) => {
                acc[item.category] = {
                    All: (acc[item.category]?.All || 0) + 1,
                    Approved: (acc[item.category]?.Approved || 0) + (item.approval === 'Approved' ? 1 : 0),
                    Pending: (acc[item.category]?.Pending || 0) + (item.approval === 'Pending' ? 1 : 0),
                    Rejected: (acc[item.category]?.Rejected || 0) + (item.approval === 'Rejected' ? 1 : 0),
                };
                return acc;
            }, {});

            setData(count);

            // update state
            setCategories((prev) => {
                return prev.map((item, index) => {
                    return {
                        ...item,
                        number: count[item.title].Approved || 0
                    }
                })
            });

            setReady(true);
        });
    }, [])
    return (
        <>
            <p className="pt-3">ออกแบบมาเพื่อช่วยในการติดตามยอดการแจ้งภัยคุกคามทางไซเบอร์ต่างๆ นอกจากนี้สามารถคลิกเพื่อดูรายละเอียดเพิ่มเติมได้ ในส่วนของการอัพเดทจะทำทุกครั้งที่มีการแจ้งเข้ามา</p>
            <div className="grid grid-cols-1 md:grid-cols-4 px-3 pt-6 container max-w-5xl gap-5 w-full">
                <div className="md:col-start-4"><div onClick={() => setSelected('All')} className="border text-center py-1 cursor-pointer rounded-xl hover:border-primary">Overall</div></div>
                {isReady ? categories?.map((item: ICategory, index: number) => {
                    return (
                        <Card key={index} form={item} onClick={setSelected} select={selected} />
                    )
                }) : categories?.map((item: ICategory, index: number) => {
                    return (
                        <CardSkeleton key={index} form={item} />
                    )
                })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-3 pt-12 container max-w-5xl gap-5 w-full">
                <div className="col-span-2">
                    <CardLineChart select={selected} />
                </div>
                <div className="">
                    {
                        data && selected !== 'All' && <>
                            <p>Approved: {data[selected]?.Approved}</p>
                            <p>Pending: {data[selected]?.Pending}</p>
                            <p>Rejected: {data[selected]?.Rejected}</p>
                        </>
                        || <>
                            {categories.map((item: ICategory, index: number) => {
                                return (
                                    <div key={index} className="">{item.title}: {item.number}</div>
                                )
                            })}
                        </>
                    }
                </div>
            </div >
        </>
    )
}