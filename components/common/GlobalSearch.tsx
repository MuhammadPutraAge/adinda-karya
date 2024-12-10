"use client";

import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "../ui/command";

export default function GlobalSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex-1 lg:hidden">
      <Command className="rounded-lg border shadow-sm md:min-w-[450px]">
        <CommandInput
          className="text-dark"
          value={searchValue}
          onValueChange={setSearchValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search furnitures here..."
        />
        <CommandList
          className={`${isFocused && searchValue ? "block" : "hidden"} absolute top-full mt-2 w-full rounded-md bg-light shadow-md`}
        >
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </Command>
    </div>
  );
}
