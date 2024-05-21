import { CarbonUserAvatarFilled } from "@/icons/Avatar";
import { RiTimeLine } from "@/icons/Clock";
import { MaterialSymbolsFolderOutline } from "@/icons/Folder";
import { ICategory, RequestApiPropsById } from "@/interfaces/RequestApiProps";
import { Metadata, ResolvingMetadata } from "next";
import axios from "axios";
import Image from "next/image";
import Custom404 from "@/app/not-found";

type Props = {
    params: { id: string }
    searchParams: Record<string, string | string[] | undefined>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/newById`, { id: params.id }).then((res) => res.data).catch((err) => err.response.data) as RequestApiPropsById;

    if (res.status === 400) return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
        description: `ไม่พบข้อมูล`,
        openGraph: {
            title: 'EDUCERT | ข่าวสารภัยคุกคามทางไซเบอร์',
            description: `ไม่พบข้อมูล`,
        }
    }
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
        title: res.data.attributes.title + ' | EDUCERT',
        description: res.data.attributes.content,
        openGraph: {
            title: res.data.attributes.title + ' | EDUCERT',
            description: res.data.attributes.content,
            images: [
                {
                    url: process.env.NEXT_PUBLIC_STRAPI_BASE_URL + res.data.attributes.thumbnail.data.attributes.url,
                    width: 800,
                    height: 600,
                    alt: res.data.attributes.title,
                },
                {
                    url: process.env.NEXT_PUBLIC_STRAPI_BASE_URL + res.data.attributes.thumbnail.data.attributes.url,
                    width: 1800,
                    height: 1600,
                    alt: res.data.attributes.title,
                },
            ],
        },
    }
}

export default async function Page({ params }: { params: { id: number } }) {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/newById`, { id: params.id }).then((res) => res.data).catch((err) => err.response.data) as RequestApiPropsById;
    if (res.status === 400) return (<Custom404 />);
    if (res.data.attributes.publishedAt === null) return (<Custom404 />);
    return (
        <>
            <div className="relative w-full lg:h-[180px] h-[90px] bg-black" >
                <div className="absolute z-10 flex flex-col h-full w-full items-center justify-center text-white">
                    <span className="lg:text-2xl text-xl text-center px-2 text-ellipsis">{res.data.attributes.title}</span>
                </div>
                <Image placeholder="empty" quality={100} src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + res.data.attributes.thumbnail.data.attributes.url} className="object-cover w-auto h-auto select-none blur-xl opacity-50" fill={true} alt={res.data.attributes.title} />
            </div>
            <div className="md:w-[680px] w-full px-1">
                <div className="w-full flex flex-row items-center justify-center p-3 gap-1">
                    <CarbonUserAvatarFilled className="w-4 h-auto" />
                    <span className="text-xs text-gray-500">
                        Admin
                    </span>
                    <RiTimeLine className="w-4 h-auto ml-2" />
                    <span className="text-xs text-gray-500">
                        {res.data.attributes.createdAt.slice(0, 10)}
                    </span>
                    <MaterialSymbolsFolderOutline className="w-4 h-auto ml-2" />
                    <span className="text-xs text-gray-500">
                        {res.data.attributes.categories.data.map((category: ICategory) => category.attributes.name_th).join(", ")}
                    </span>
                </div>
                <div id="content" className={`w-full prose`} dangerouslySetInnerHTML={{ __html: res.data.attributes.content }} />
            </div>
        </>
    )
}
