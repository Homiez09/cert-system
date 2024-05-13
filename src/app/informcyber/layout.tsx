import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "แจ้งเหตุภัยคุกคาม | KU-CERT",
  description: "แบบฟอร์มแจ้งเหตุภัยคุกคามทางไซเบอร์",
  openGraph: {
    title: "แจ้งเหตุภัยคุกคาม | KU-CERT",
    description: "แบบฟอร์มแจ้งเหตุภัยคุกคามทางไซเบอร์",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>{children}</>);
}
