import { GetContentById } from "@/components/News";

export default function Page({ params }: { params: { id: number } }) {
    return (
        <>
            <GetContentById id={Number(params.id)} />
        </>
    );
}