import Custom404 from "@/app/not-found";
import Pagination from "@/components/new/Pagination";
import { IData, RequestApiProps } from "@/interfaces/RequestApiProps";
import Card from "@/components/new/Card";
import axios from "axios";
import { Metadata } from "next";

interface Props {
    params: Record<string, string | string[] | undefined>;
    searchParams: Record<string, string | string[] | undefined>;
}

export async function generateMetadata(
    { params, searchParams }: Props,
): Promise<Metadata> {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/newByPage`, { page: searchParams.page || 1 }).then((res) => res.data).catch((err) => err.response.data) as RequestApiProps;

    if (res.data.length <= 0) return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
        title: 'ไม่พบข้อมูล | KU-CERT',
        description: `หน้า ${searchParams.page} : ไม่พบข้อมูล`,
        openGraph: {
            title: 'KU-CERT | ข่าวสารภัยคุกคามทางไซเบอร์',
            description: `หน้า ${searchParams.page} : ไม่พบข้อมูล`,
        }
    };

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
        title: 'ข่าวสารภัยคุกคามทางไซเบอร์' + ' | KU-CERT',
        description: `หน้า ${searchParams.page} : ${res.data.map((i) => i.attributes.title).join(', ')}`,
        openGraph: {
            title: 'ข่าวสารภัยคุกคามทางไซเบอร์' + ' | KU-CERT',
            description: `หน้า ${searchParams.page} : ${res.data.map((i) => i.attributes.title).join(', ')}`,
            images: [
                {
                    url: res.data[0].attributes.thumbnail.data.attributes.url,
                    width: 800,
                    height: 600,
                    alt: res.data[0].attributes.title,
                },
                {
                    url: res.data[0].attributes.thumbnail.data.attributes.url,
                    width: 1800,
                    height: 1600,
                    alt: res.data[0].attributes.title,
                },
            ],
        },
    }
}

export default async function Page({ params, searchParams }: Props) {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/newByPage`, { page: searchParams.page || 1 }).then((res) => res.data).catch((err) => err.response.data) as RequestApiProps;
    
    if (res.data.length <= 0) return (<Custom404 />);
    return (
        <div className="flex flex-col items-center container md:pt-8 gap-5">
            <span className="lg:text-3xl text-2xl text-center">ความเคลื่อนไหวภัยคุกคามทางไซเบอร์</span>
            <div className={`w-full grid lg:grid-cols-3 grid-cols-1 gap-5`}>
                {res.data.map((item: IData, index: number) => {
                    return (
                        <Card key={index} data={item} />
                    );
                })}
            </div>
            {res.status === 200 ? <Pagination pageCount={res.meta.pagination.pageCount} /> : <Pagination pageCount={10} />}
        </div >
    );
}