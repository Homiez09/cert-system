import type { Metadata } from "next";

interface Props {
    params?: { id: string }
    searchParams: Record<string, string | string[] | undefined>
}

export async function generateMetadata(
    { params, searchParams }: Props,
): Promise<Metadata> {
    return {
        title: 'ค้นหา | KU-CERT',
        description: 'ค้นหาข่าวสารภัยคุกคามทางไซเบอร์',
        openGraph: {
            title: 'ค้นหา | KU-CERT',
            description: 'ค้นหาข่าวสารภัยคุกคามทางไซเบอร์',
        }
    };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>{children}</>);
}
