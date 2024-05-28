import type { Metadata } from "next";
import { kanit } from "@/libs/font";
import Navbar from "@/components/Navbar";
import AntdStyledComponentsRegistry from "@/components/AntdStyledComponentsRegistry";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "EDUCERT | Education Computer Emergency Response Team",
  description: "Education Computer Emergency Response Team | เตือนภัยคุกคามทางไซเบอร์",
  icons: "/KU-thai-80-borderless.webp"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Toaster />
        <div className="flex flex-col pt-4">
          <div className="flex">
            <Navbar />
          </div>
          <div className="flex flex-col items-center mt-6">
            <AntdStyledComponentsRegistry>
              {children}
            </AntdStyledComponentsRegistry>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}