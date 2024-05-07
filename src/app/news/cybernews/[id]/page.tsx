import { GetContentById } from "@/components/new/ShowNews";

export default function Page({ params }: { params: { id: number } }) {
    return (
        <GetContentById id={params.id} />
    )
}