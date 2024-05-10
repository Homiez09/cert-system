import { RecommendCyberNews } from "@/components/new/ShowNews";
import ImageCarousel from "@/components/ImageCarousel";
import BannerCarouselProps from "@/interfaces/BannerCarouselProps";
import Link from "next/link";

export default async function Home() {
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

  return (
    <>
      <ImageCarousel banners={banners} autoplay />
      <div className="container">
        <div className="flex max-md:flex-col flex-row md:justify-between items-center md:container lg:px-10 md:pt-10 pt-3 lmd:items-end">
          <span className="lg:text-3xl text-2xl">ความเคลื่อนไหวภัยคุกคามทางไซเบอร์</span>
          <Link href="/news/cybernews" className="text-lg hover:bg-[#02b371] hover:cursor-pointer p-2 rounded-md">ดูความเคลื่อนไหวทั้งหมด →</Link>
        </div>
        <RecommendCyberNews numItems={5}/>
      </div>
    </>
  );
}
