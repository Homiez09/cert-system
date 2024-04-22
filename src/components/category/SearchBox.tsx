"use client";

import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export const SearchBox = ({ query, category }: { query: string, category: string }) => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setSearchTerm(query);
    }, [query])

    const updateQuery = (e?: ChangeEvent<HTMLInputElement>) => {
        if (e) {
            if (e?.target.value === "") router.push(`/news/${category}`);
            else router.push(`?query=${e!.target.value}`);
            setSearchTerm(e!.target.value);
        } else {
            router.push(`/news/${category}`);
            setSearchTerm("");
        }
    }

    return (
        <div className="flex justify-center w-full px-2">
            <Input
                radius="full"
                className="w-1/2 max-lg:w-full rounded-full border focus-within:shadow-lg"
                onChange={(e) => updateQuery(e)}
                value={searchTerm}
                placeholder="Type to search..."
                onClear={() => updateQuery()}
                startContent={
                    <Icon icon="material-symbols:search" width={20} height={20} className="text-black/50 mb-0.5" />
                }
            />
        </div>
    );
}