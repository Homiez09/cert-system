'use client'

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardDataProps } from "@/interfaces/CardDataProps";
import Card from "./Card";
import { useSearchParams } from "next/navigation";
import { truncate } from "fs/promises";
import Image from "next/image";
import { Avatar } from "antd";
import { CarbonUserAvatarFilled } from "@/icons/Avatar";
import { RiTimeLine } from "@/icons/Clock";
import { MaterialSymbolsFolderOutline } from "@/icons/Folder";

const dataHardCodeCyberNews: CardDataProps[] = [
    {
        id: 0,
        title: 'Cisco เตือนถึงการโจมตีแบบ Brute-Force ที่พุ่งเป้าไปที่บริการ VPN และ SSH ทั่วโลก',
        category: ['cybernews'],
        date: new Date(2024, 4, 8),
        thumbnail: '/backgound1.jpg',
        content: 'xxxxxxxxxxxx',
        author: ['Admin', 'User01']
    },
    {
        id: 1,
        title: 'กลุ่มแรนซัมแวร์ Dark Angels อ้างว่าได้ขโมยข้อมูลจากผู้ผลิตชิป Nexperia',
        category: ['cybernews'],
        date: new Date(2024, 4, 8),
        thumbnail: '/1.webp',
        content: 'xxxxxxxxxxxx',
        author: ['Admin']
    },
    {
        id: 2,
        title: 'CISA เพิ่มช่องโหว่ PAN-OS Command Injection ลงใน Known Exploited Vulnerabilities catalog',
        category: ['cybernews'],
        date: new Date(2024, 4, 8),
        thumbnail: '/2.webp',
        content: 'xxxxxxxxxxxx',
        author: ['Admin']
    },
    {
        id: 3,
        title: '10 อันดับของแบรนด์ที่มีการแอบอ้างมากที่สุด เพื่อใช้ในการหลอกลวงแบบฟิชชิ่ง',
        category: ['cybernews'],
        date: new Date(2024, 4, 8),
        thumbnail: '/3.webp',
        content: 'xxxxxxxxxxxx',
        author: ['Admin']
    },
    {
        id: 4,
        title: 'นักวิจัยค้นพบช่องโหว่ Root Access  ของ LG Smart TV',
        category: ['cybernews'],
        date: new Date(2024, 4, 8),
        thumbnail: '/4.webp',
        content: 'xxxxxxxxxxxx',
        author: ['Admin']
    },
    {
        id: 5,
        title: 'แฮกเกอร์มุ่งเป้าไปที่นักเคลื่อนไหวด้านสิทธิมนุษยชนในโมร็อกโกและซาฮาราตะวันตก',
        category: ['cybernews'],
        date: new Date(2024, 4, 8),
        thumbnail: '/0.webp',
        content: 'xxxxxxxxxxxx',
        author: ['Admin']
    },
    {
        id: 6,
        title: 'ช่องโหว่ RCE ที่สำคัญในอุปกรณ์ D-Link NAS จำนวนกว่า 92,000 เครื่อง ถูกใช้ exploit แล้ว',
        category: ['cybernews'],
        date: new Date(2024, 4, 8),
        thumbnail: '/0.webp',
        content: 'xxxxxxxxxxxx',
        author: ['Admin']
    },
    {
        id: 7,
        title: "อุปกรณ์ Ivanti VPN หลายพันรายการได้รับผลกระทบจากช่องโหว่ล่าสุด",
        category: ["cybernews"],
        date: new Date(2024, 4, 8),
        thumbnail: "/0.webp",
        content: "xxxxxxxxxxxx",
        author: ['Admin']
    },
    {
        id: 8,
        title: "Cisco เตือนถึงการโจมตีแบบ Brute-Force ที่พุ่งเป้าไปที่บริการ VPN และ SSH ทั่วโลก",
        category: ["cybernews"],
        date: new Date(2024, 4, 8),
        thumbnail: "/1.webp",
        content: "xxxxxxxxxxxx",
        author: ['Admin']
    },
    {
        id: 9,
        title: "Cisco เตือนถึงการโจมตีแบบ Brute-Force ที่พุ่งเป้าไปที่บริการ VPN และ SSH ทั่วโลก",
        category: ["cybernews"],
        date: new Date(2024, 4, 8),
        thumbnail: "/2.webp",
        content: "xxxxxxxxxxxx",
        author: ['Admin']
    },
    {
        id: 10,
        title: "Cisco เตือนถึงการโจมตีแบบ Brute-Force ที่พุ่งเป้าไปที่บริการ VPN และ SSH ทั่วโลก",
        category: ["cybernews"],
        date: new Date(2024, 4, 8),
        thumbnail: "/3.webp",
        content: "xxxxxxxxxxxx",
        author: ['Admin']
    },
    {
        id: 11,
        title: "Cisco เตือนถึงการโจมตีแบบ Brute-Force ที่พุ่งเป้าไปที่บริการ VPN และ SSH ทั่วโลก",
        category: ["cybernews"],
        date: new Date(2024, 4, 8),
        thumbnail: "/4.webp",
        content: "xxxxxxxxxxxx",
        author: ['Admin']
    },
    {
        id: 12,
        title: "Cisco เตือนถึงการโจมตีแบบ Brute-Force ที่พุ่งเป้าไปที่บริการ VPN และ SSH ทั่วโลก",
        category: ["cybernews"],
        date: new Date(2024, 4, 8),
        thumbnail: "/0.webp",
        content: "xxxxxxxxxxxx",
        author: ['Admin']
    }

]

export const AllCyberNews = ({ category, className }: { category: string, className: string }) => {
    const query = useSearchParams().get("query");
    if (category) {
        return (
            <>
                <div className={`w-full grid lg:grid-cols-3 grid-cols-1 ${className}`}>
                    {dataHardCodeCyberNews.filter((CyberNews) => {
                        if (query) {
                            return CyberNews.title.toLowerCase().includes(query.toLowerCase())
                        }
                        return true;
                    }).map((item: CardDataProps, index: number) => {
                        return (
                            <Card key={index} data={item} />
                        );
                    })};
                </div>
            </>
        );
    }
}

export const RecommendCyberNews = ({ num }: { num: number }) => {
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
                <Slider
                    dots
                    infinite
                    autoplay
                    autoplaySpeed={2000}
                    slidesToShow={screenWidth > 1024 ? 3 : 1}
                    slidesToScroll={1}
                    arrows={false}
                    className="hover:cursor-grab active:cursor-grabbing">
                    {dataHardCodeCyberNews.slice(0, num).map((item: CardDataProps, index: number) => {
                        return (
                            <Card key={index} data={item} />
                        );
                    })}
                </Slider>
            </div>
        </>
    );
}

export const GetContentById = ({ id }: { id: number }) => {
    const content = dataHardCodeCyberNews.find((item) => item.id === id);
    if (!content) return <div className="h-screen">Not Found</div>;
    return (
        <>
            <div className="relative w-full lg:h-[180px] h-[90px] bg-black">
                <div className="flex flex-col h-full items-center justify-center text-white">
                    <span className="lg:text-2xl text-xl text-center px-2 text-ellipsis">{content!.title}</span>
                </div>
                <Image src={content.thumbnail} className="object-cover opacity-30" fill={true} alt={content.title} />
            </div>
            <div className="md:w-[680px] w-full border h-[480px] px-1">
                <div className="w-full flex flex-row items-center justify-center p-3 gap-1">
                    <CarbonUserAvatarFilled className="w-4 h-auto" />
                    <span className="text-xs text-gray-500">
                        {content!.author.join(', ')}
                    </span>
                    <RiTimeLine className="w-4 h-auto ml-2" />
                    <span className="text-xs text-gray-500">
                        {content!.date.toDateString()}
                    </span>
                    <MaterialSymbolsFolderOutline className="w-4 h-auto ml-2" />
                    <span className="text-xs text-gray-500">
                        {content!.category.join(', ')}
                    </span>
                </div>
                <div className="w-full prose" dangerouslySetInnerHTML={{ __html: content!.content}}/>
            </div>
        </>
    );
}