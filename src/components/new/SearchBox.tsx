"use client";

import React, { ChangeEvent, useEffect, useState, Dispatch, SetStateAction } from "react";
import { Input } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useRouter, useSearchParams } from "next/navigation";

interface IProps {
    setResult: Dispatch<SetStateAction<string>>;
}

export const SearchBox = (props: IProps) => {
    const query = useSearchParams().get("query") || "";
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setSearchTerm(query);
        props.setResult(query)
    }, [])

    const updateQuery = (e?: ChangeEvent<HTMLInputElement>) => {
        if (e) {
            if (e?.target.value === "") router.push(`/news/search`);
            else router.push(`?query=${e!.target.value}`);
            props.setResult(e!.target.value);
            setSearchTerm(e!.target.value);
        } else {
            router.push(`/news/search`);
            props.setResult("");
            setSearchTerm("");
        }
    }

    return (
        <div className="flex justify-center w-full h-auto px-2">
            <Input
                autoFocus
                radius="full"
                className="w-1/2 max-lg:w-full rounded-full border focus-within:shadow-lg "
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