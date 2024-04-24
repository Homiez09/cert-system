"use static"

import { GetContentById } from "@/components/new/ShowNews";
import { fetchNewsById } from "@/libs/requestAPI";

export default async function Page({ params }: { params: { id: number } }) {
    const getNewById = await fetchNewsById(params.id);
    return (
        <>
            <GetContentById data={getNewById} />
        </>
    );
}