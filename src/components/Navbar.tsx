'use client'

import Image from "next/image"
import ItemNavbarProps from "@/interfaces/NavbarItemProps";
import Link from "next/link";
import { RiSearchLine } from "@/icons/SearchIcon"
import { Dropdown, type MenuProps } from 'antd';
import { kanit } from "@/libs/font";
import { UiwDown } from "@/icons/DownIcon";
import { IconamoonMenuBurgerHorizontalDuotone } from "@/icons/HamBurger";
import { useEffect, useState } from "react";
import { MingcuteCloseFill } from "@/icons/Close";

export default () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) { // Adjust this value based on when you want the navbar to become fixed
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const toggleDropdownClose = () => {
        setIsDropdownOpen(false);
    };

    const getLabel = (label: string, link: string) => {
        return (
            <Link className={kanit.className} href={link} onClick={toggleDropdownClose}>
                {label}
            </Link>
        )
    }

    const menuitems: ItemNavbarProps[] = [
        {
            title: "หน้าแรก",
            href: "/",
        },
        {
            title: "เกี่ยวกับ KU-CERT",
            href: "/about",
            dropdown: [
                {
                    key: '1',
                    label: getLabel("เกี่ยวกับ KU-CERT", "/")
                },
                {
                    key: '2',
                    label: getLabel("หน้าที่และอำนาจของ KU-CERT", "/")
                },
                {
                    key: '3',
                    label: getLabel("กลไกการบริหารจัดการด้านไซเบอร์", "/")
                },
                {
                    key: '4',
                    label: getLabel("หน่วยงาน Regulator", "/")
                },
                {
                    key: '5',
                    label: getLabel("หน่วยงาน CII", "/")
                },
                {
                    key: '6',
                    label: getLabel("Sectoral CERT", "/")
                },
                {
                    key: '7',
                    label: getLabel("พนักงานเจ้าหน้าที่ตาม พรบ.ไซเบอร์", "/")
                },
                {
                    key: '8',
                    label: getLabel("การสร้างความรู้และความตระหนักรู้เกี่ยวกับภัยคุกคามทางไซเบอร์", "/")
                }
            ]
        },
        {
            title: "ข่าวสารภัยคุกคามทางไซเบอร์",
            href: "/news/cybernews",
        },
        {
            title: "แจ้งเหตุภัยคุกคาม",
            href: "/informcyber",
        },
        {
            title: "กิจกรรมหน่วยงาน",
            href: "/activities",
            dropdown: [
                {
                    key: '1',
                    label: getLabel("ปฏิทินกิจกรรม", "/")
                },
                {
                    key: '2',
                    label: getLabel("แหล่งความรู้", "/")
                },
                {
                    key: '3',
                    label: getLabel("พื้นฐานความมั่นคงปลอดภัยไซเบอร์", "/")
                },
                {
                    key: '4',
                    label: getLabel("Questions & Answers", "/")
                }

            ]
        },
        {
            title: "ติดต่อเรา",
            href: "/contact-us",
        },
        {
            title: <RiSearchLine className="w-6 h-auto" />,
            href: "/news/search",
        }
    ]
    return (
        <>
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col px-3 gap-5">
                    <div className="flex flex-row items-center gap-5">
                        <Image src="/KU-thai-80-borderless.webp" className="w-auto h-auto" width={80} height={50} alt="KU-CERT Logo" />
                        <Link href="/">KU Computer Emergency Response Team (KU-CERT)</Link>
                    </div>
                    <ul className="flex flex-row gap-9 max-lg:hidden">
                        {menuitems.map((item, index) => {
                            if (item.dropdown) {
                                const items: MenuProps['items'] = item.dropdown
                                return (
                                    <Dropdown key={index} menu={{ items }} className="hover:cursor-default">
                                        <div className="flex flex-row gap-2">
                                            <span className={kanit.className}>{item.title}</span>
                                            <UiwDown className="w-3 h-auto" />
                                        </div>
                                    </Dropdown>
                                )
                            } else {
                                return (
                                    <Link href={item.href} key={index} className="hover:cursor-pointer">{item.title}</Link>
                                )
                            }
                        })}
                    </ul>

                    <div className={`z-[999] bg-white ${isFixed ? 'fixed top-0 left-0 right-0 shadow-md py-3' : ''} lg:hidden`}>
                        <div className="flex flex-row justify-between items-center px-2 w-full">
                            {isDropdownOpen ? (
                                <MingcuteCloseFill className="w-7" onClick={toggleDropdown} />
                            ) : (
                                <IconamoonMenuBurgerHorizontalDuotone className="w-7 h-auto" onClick={toggleDropdown} />
                            )}
                            <Link href="/news/search"><RiSearchLine className="w-6 h-auto" onClick={toggleDropdownClose} /></Link>
                        </div>
                        {isDropdownOpen && ( 
                            <div className="p-5">
                                <ul className="flex flex-col gap-6">
                                    {menuitems.slice(0, -1).map((item, index) => {
                                        if (item.dropdown) {
                                            const items: MenuProps['items'] = item.dropdown
                                            return (
                                                <Dropdown key={index} menu={{ items }} className="hover:cursor-default">
                                                    <div className="flex flex-row gap-2">
                                                        <span className={kanit.className}>{item.title}</span>
                                                        <UiwDown className="w-3 h-auto" />
                                                    </div>
                                                </Dropdown>
                                            )
                                        } else {
                                            return (
                                                <Link href={item.href} key={index} className="hover:cursor-pointer" onClick={toggleDropdownClose}>{item.title}</Link>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}