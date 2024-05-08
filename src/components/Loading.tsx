import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed top-0 left-0 border w-full h-screen z-[999] flex flex-col items-center justify-center bg-white">
            <Image src="/KU-thai-80-borderless.webp" alt="KU80 LOGO" width={70} height={70} className="animate-spinner-ease-spin mb-5" />
            <p className="animate-pulse">Loading . . .</p>
        </div>
    )
}