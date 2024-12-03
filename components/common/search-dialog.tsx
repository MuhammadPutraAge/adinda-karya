"use client";

import ROUTES from "@/constants/routes";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CommandDialog, CommandInput, CommandList } from "../ui/command";

export default function SearchDialog() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const queryParam = searchParams.get("q") || "";
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        setIsOpen(false);
        router.push(`${ROUTES.SHOP}?${createQueryString("q", query)}`);
      }
    },
    [createQueryString, query, router]
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
          placeholder="Search furnitures..."
          value={query}
          onValueChange={setQuery}
          onKeyDown={onKeyDown}
        />
        <CommandList className="hidden" />
      </CommandDialog>
    </>
  );
}
