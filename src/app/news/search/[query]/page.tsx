

export default function Page({ params }: { params: { query: string } }) {
    return (
        <>
            {params.query}
        </>
    )
}