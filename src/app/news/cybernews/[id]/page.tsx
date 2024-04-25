import { GetContentById } from "@/components/new/ShowNews";
import { CarbonUserAvatarFilled } from "@/icons/Avatar";
import { RiTimeLine } from "@/icons/Clock";
import { MaterialSymbolsFolderOutline } from "@/icons/Folder";
import { IData } from "@/interfaces/RequestApiProps";
import { kanit } from "@/libs/font";
import { fetchNewsById } from "@/libs/requestAPI";

export default async function Page({ params }: { params: { id: number } }) {
    const getNewById = await fetchNewsById(params.id);
    return (
        <>
            <GetContentById data={getNewById} />
        </>
    );
}