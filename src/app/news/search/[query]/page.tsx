import { SearchAllCyberNews } from '@/components/new/ShowNews';

export default async function Page({ params }: { params: { query: string } }) {
    return (
        <>
            <SearchAllCyberNews query={params.query} />
        </>
    )
}