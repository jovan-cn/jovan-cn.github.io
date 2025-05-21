"use client";

import { useColorScheme } from "@mui/joy/styles";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { LocalStorageKey } from "@/app/lib";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/joy";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const key = LocalStorageKey("mode");
    const savedMode = localStorage.getItem(key) ||
                     (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setMode(savedMode as any);
    document.documentElement.classList.toggle("dark", savedMode === "dark");
    console.log("swith to " + savedMode + " mode");
  }, [setMode]);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    const key = LocalStorageKey("mode");
    localStorage.setItem(key, newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
    console.log("swith to " + newMode + " mode");
  };

  if (!mounted) {
    // SSR 
    return (
      <IconButton variant="plain" disabled>
        <MdLightMode />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={toggleMode} variant="plain">
      { mode === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </IconButton>
  );
}