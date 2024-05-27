import CardList from "@/components/dashboard/CardList";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'แดชบอร์ด | EDUCERT',
    openGraph: {
        title: 'แดชบอร์ด | EDUCERT',
    },
};

export default function Page() {
    return (
        <div className="container max-w-5xl md:p-8 gap-5 w-full">
            <p className="text-2xl font-bold px-3 md:px-0">EDUCERT แดชบอร์ด</p>
            <CardList />
        </div >
    )
}