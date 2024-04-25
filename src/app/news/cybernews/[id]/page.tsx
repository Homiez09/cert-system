import { GetContentById } from "@/components/new/ShowNews";
import { fetchNewsById } from "@/libs/requestAPI";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: number } }) {
    const getNewById = await fetchNewsById(params.id);
    return (
        <>
            <Suspense fallback={<div>Loading...</div>} >
                <GetContentById data={getNewById} />
            </Suspense >
        </>
    );
}