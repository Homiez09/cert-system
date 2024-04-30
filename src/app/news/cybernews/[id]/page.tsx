import { GetContentById } from "@/components/new/ShowNews";
import { RequestApiPropsById } from "@/interfaces/RequestApiProps";
import { fetchNewsById } from "@/libs/requestAPI";

export default async function Page({ params }: { params: { id: number } }) {
    const getNewById = await fetchNewsById(params.id) as RequestApiPropsById;
    return (
        <>
            <GetContentById res={getNewById} />
        </>
    );
}