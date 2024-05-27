"use client"

import Card, { CardSkeleton } from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

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

    useEffect(() => {
        axios.get('/api/informcyber').then((res) => {
            // split categories
            const data = res.data.data;
            const categories = data.map((item: any) => {
                return item.attributes.category;
            });
            // count categories
            const count = categories.reduce((acc: any, curr: any) => {
                acc[curr] = (acc[curr] || 0) + 1;
                return acc;
            }, {});
            console.log(count);
            // update state
            setCategories((prev) => {
                return prev.map((item, index) => {
                    return {
                        ...item,
                        number: count[item.title] || 0
                    }
                })
            });

            setReady(true);
        });
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 px-3 pt-5 container max-w-5xl md:p-8 gap-5 w-full">
            {isReady ? categories?.map((item: ICategory, index: number) => {
                return (
                    <Card key={index} form={item} />
                )
            }) : categories?.map((item: ICategory, index: number) => {
                return (
                    <CardSkeleton key={index} form={item} />
                )
            })}
        </div >
    )
}