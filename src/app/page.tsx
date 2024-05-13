import ImageCarousel from "@/components/ImageCarousel";
import BannerCarouselProps from "@/interfaces/BannerCarouselProps";
import Link from "next/link";
import axios from "axios";
import { RecommendCyberNews } from "@/components/new/RecommendCyberNews";
import { RequestApiProps } from "@/interfaces/RequestApiProps";
import { Metadata } from "next";


const banners: BannerCarouselProps[] = [
  {
    src: "/banner01.webp",
    alt: "banner",
    text: "Welcome to | KU-CERT"
  },
  {
    src: "/banner02.webp",
    alt: "banner",
  },
]

export async function generateMetadata(): Promise<Metadata> {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/newByPage`, { page: 1, pageSize: 5 }).then((res) => res.data) as RequestApiProps;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
    openGraph: {
      title: 'หน้าแรก | KU-CERT',
      description: `แนะนำ : ${res.data.map((i) => i.attributes.title).join(', ')}`,
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

export default async function Home() {
  return (
    <>
      <ImageCarousel banners={banners} autoplay />
      <div className="container">
        <div className="flex max-md:flex-col flex-row md:justify-between items-center md:container lg:px-10 md:pt-10 pt-3 lmd:items-end">
          <span className="lg:text-3xl text-2xl">ความเคลื่อนไหวภัยคุกคามทางไซเบอร์</span>
          <Link href="/news/cybernews" className="text-lg hover:bg-[#02b371] hover:cursor-pointer p-2 rounded-md">ดูความเคลื่อนไหวทั้งหมด →</Link>
        </div>
        <RecommendCyberNews numItems={5} />
      </div>
    </>
  );
}
