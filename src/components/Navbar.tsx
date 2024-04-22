import Image from "next/image"
import ItemNavbarProps from "@/interfaces/NavbarItemProps";
import Link from "next/link";
import { RiSearchLine } from "@/icons/SearchIcon"
import { Dropdown, type MenuProps } from 'antd';
import { kanit } from "@/libs/font";
import { UiwDown } from "@/icons/DownIcon";
import { IconamoonMenuBurgerHorizontalDuotone } from "@/icons/HamBurger";


export default () => {
    const menuitems: ItemNavbarProps[] = [
        {
            title: "หน้าแรก",
            href: "/",
        },
        {
            title: "เกี่ยวกับ ThaiCERT",
            href: "/about",
            dropdown: [
                {
                    key: '1',
                    label: (
                        <Link className={kanit.className} href="/">
                            เกี่ยวกับ ThaiCERT
                        </Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link className={kanit.className} href="/">
                            หน้าที่และอำนาจของ ThaiCERT
                        </Link>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <Link className={kanit.className} href="/">
                            กลไกการบริหารจัดการด้านไซเบอร์
                        </Link>
                    ),
                },
                {
                    key: '4',
                    label: (
                        <Link className={kanit.className} href="/">
                            หน่วยงาน Regulator
                        </Link>
                    ),
                },
                {
                    key: '5',
                    label: (
                        <Link className={kanit.className} href="/">
                            หน่วยงาน CII
                        </Link>
                    ),
                },
                {
                    key: '6',
                    label: (
                        <Link className={kanit.className} href="/">
                            Sectoral CERT
                        </Link>
                    ),
                },
                {
                    key: '7',
                    label: (
                        <Link className={kanit.className} href="/">
                            พนักงานเจ้าหน้าที่ตาม พรบ.ไซเบอร์
                        </Link>
                    ),
                },
                {
                    key: '8',
                    label: (
                        <Link className={kanit.className} href="/">
                            การสร้างความรู้และความตระหนักรู้เกี่ยวกับภัยคุกคามทางไซเบอร์
                        </Link>
                    ),
                }
            ]
        },
        {
            title: "ข่าวสารภัยคุกคามทางไซเบอร์",
            href: "news/cybernews",
        },
        {
            title: "เอกสารเผยแพร่",
            href: "/documents",
        },
        {
            title: "กิจกรรมหน่วยงาน",
            href: "/activities",
            dropdown: [
                {
                    key: '1',
                    label: (
                        <Link className={kanit.className} href="/">
                            ปฏิทินกิจกรรม
                        </Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link className={kanit.className} href="/">
                            แหล่งความรู้
                        </Link>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <Link className={kanit.className} href="/">
                            พื้นฐานความมั่นคงปลอดภัยไซเบอร์
                        </Link>
                    ),
                },
                {
                    key: '4',
                    label: (
                        <Link className={kanit.className} href="/">
                            Questions & Answers
                        </Link>
                    ),
                }

            ]
        },
        {
            title: "ติดต่อสำนักงาน",
            href: "/contact",
        },
        {
            title: <RiSearchLine className="w-6 h-auto" />,
            href: "/news/cybernews?query=",
        }
    ]
    return (
        <>
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col px-3 gap-5">
                    <div className="relative z-10 flex flex-row items-center gap-5">
                        <Image className="flex" src="/ncert_logo.webp" width={153} height={50} alt="ThaiCERT Logo" />
                        <Link href="/" className="flex">Thailand Computer Emergency Response Team (ThaiCERT)</Link>
                    </div>
                    {/* <ul className="flex flex-row gap-9 ">
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
                    </ul> */}

                    <div className=" sticky z-10 w-full border left-0">
                        <div className="flex flex-row justify-between items-center px-2 w-full">
                            <IconamoonMenuBurgerHorizontalDuotone className="w-7" />
                            <Link href="/news/cybernews"><RiSearchLine className="w-6 h-auto" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}