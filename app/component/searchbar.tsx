'use client'

import { IconButton, Input } from "@mui/joy"
import { useSearchBarStore } from "@/app/store/useSearch"
import { useTranslations } from 'next-intl';
import { ChangeEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MdClose, MdSearch } from "react-icons/md";

export default function SearchBar() {
  const {
    searchContent,
    setSearchContent,
    searchPath,
    setSearchPath,
  } = useSearchBarStore();
  const path = usePathname();
  const t = useTranslations("searchbar");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // FIX: homepage /
    if (!searchPath.startsWith(path) && !path.startsWith(searchPath)) {
      setSearchContent("");
    }
    setSearchPath(path);
  }, [path, searchPath, setSearchContent, setSearchPath])

  const isPageShowSearchBar = () => {
    return path.endsWith("/article") || path.endsWith("/repository");
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  }

  if (!isPageShowSearchBar()) {
    return null;
  }

  if (!mounted) {
    return null;
  }

  return (
    <Input 
      value={mounted ? searchContent : ""}
      onChange={handleSearch}
      size="sm"
      sx={{
        maxWidth: 200,
      }}
      startDecorator={<MdSearch />}
      endDecorator={
        <IconButton
          className={"!rounded-full"}
          disabled={searchContent.length === 0}
          onClick={() => setSearchContent("")}
        >
          <MdClose className="icon" />
        </IconButton>
      }
      placeholder={t("placeholder")}
    />
  )
}