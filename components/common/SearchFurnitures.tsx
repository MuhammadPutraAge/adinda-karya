"use client";

import ROUTES from "@/constants/routes";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback, useEffect, useState } from "react";
import { CommandDialog, CommandInput, CommandList } from "../ui/command";

export default function SearchFurnitures() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = searchParams.get("query") || "";
    if (query) {
      setSearchQuery(query);
    }

    return () => setSearchQuery("");
  }, [searchParams]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        setIsOpen(false);

        const currentParams = qs.parse(searchParams.toString());

        const url = qs.stringifyUrl(
          {
            url: ROUTES.SHOP,
            query: {
              ...currentParams,
              query: searchQuery,
            },
          },
          { skipEmptyString: true }
        );

        router.push(url);
      }
    },
    [router, searchParams, searchQuery]
  );

  return (
    <>
      <Image
        className="cursor-pointer"
        src="/icons/search.svg"
        alt="search"
        width={24}
        height={24}
        onClick={() => setIsOpen(!isOpen)}
      />

      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          className="flex-1"
          placeholder="Search furnitures..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          onKeyDown={onKeyDown}
        />
        <CommandList className="hidden" />
      </CommandDialog>
    </>
  );
}
