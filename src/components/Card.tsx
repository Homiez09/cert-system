import { CardDataProps } from "@/interfaces/CardDataProps";
import Link from "next/link";

export default ({ data }: { data: CardDataProps }) => {
    return (
        <div className="flex flex-col mx-5 gap-3 border h-[325px]">
            <img src={data.thumbnail} alt="thumbnail" className="w-full h-52 object-cover" />
            <div className="p-2">
                <Link href={`/news/${data.category}/${data.id}`} className="text-lg font-bold hover:text-[#02b371] text-ellipsis">{data.title}</Link>
                <div className="flex flex-row justify-between items-end">
                    <Link href={`/news/${data.category}`} className="text-sm text-white border rounded-full px-1 bg-[#02b371] bg-opacity-70">{data.category}</Link>
                    <span className="text-sm text-gray-500 pt-2">{data.date.getFullYear() + "-" + data.date.getMonth() + "-" + data.date.getDate()}</span>
                </div>
            </div>
        </div>
    );
}