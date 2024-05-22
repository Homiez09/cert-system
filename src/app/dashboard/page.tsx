import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'แดชบอร์ด | KU-CERT',
    openGraph: {
        title: 'แดชบอร์ด | KU-CERT',
    },
};

export default function Page() {
    return (
        <div className="container max-w-5xl md:p-8 gap-5 w-full">
            <p className="text-2xl font-bold px-3 md:px-0">EDUCERT แจ้งเหตุภัยคุกคาม</p>
            
        </div >
    )
}