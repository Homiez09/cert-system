import Loading from "@/components/Loading";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'ค้นหา | EDUCERT',
    description: 'ค้นหาข่าวสารภัยคุกคามทางไซเบอร์',
    openGraph: {
        title: 'ค้นหา | EDUCERT',
        description: 'ค้นหาข่าวสารภัยคุกคามทางไซเบอร์',
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<Suspense fallback={<Loading />}>{children}</Suspense>);
}
