import BannerCarouselProps from '@/interfaces/BannerCarouselProps';
import { abel } from '@/libs/font';
import { Carousel } from 'antd';
import Image from 'next/image';

export default ({ banners, autoplay = false }: { banners: BannerCarouselProps[], autoplay?: boolean }) => {
    return (
        <>
            <div className="relative w-full md:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                <Carousel
                    autoplay={autoplay}
                    draggable
                    infinite
                    dots={false}
                    className="hover:cursor-grab active:cursor-grabbing"
                >
                    {banners.map((item, index) => {
                        return (
                            <div key={index} className="relative w-full h-[300px]">
                                {item.text ?
                                    <div className="absolute z-10  w-full h-full p-[30px] text-center text-white whitespace-pre-line text-shadow text-shadow-blur-10">
                                        {item.text.split('|').length > 1 ?
                                            <>
                                                <span className={abel.className + ' text-[60px]'}>
                                                    {item.text.split('|')[0]}
                                                </span> <br />
                                                <span className={abel.className + ' text-[100px]'}>
                                                    {item.text.split('|')[1]}
                                                </span>
                                            </> : <>
                                                <span className={abel.className + ' text-[60px]'}>
                                                    {item.text}
                                                </span>
                                            </>
                                        }
                                    </div>
                                    : null
                                }
                                <Image
                                    priority
                                    src={item.src}
                                    alt={item.alt}
                                    fill={true}
                                    className="object-cover shadow-black shadow-2xl w-auto h-auto"
                                />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </>
    )
}