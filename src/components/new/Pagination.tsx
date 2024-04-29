import { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";

export default ({ pageCount }: { pageCount: number }) => {
  const [page, setPage] = useState(Number(useSearchParams().get("page")) || 1);
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setPage(page);
  }

  useEffect(() => {
    router.push(`?page=${page}`);
  }, [page])
  return (
    <>
      <Pagination showControls onChange={handlePageChange} total={pageCount} initialPage={page} />
    </>
  );
}
