// app/ga-listener.tsx
"use client";

export {}; // garante que o arquivo é tratado como módulo

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// ✅ Define um tipo específico para evitar "any"
type GtagCommand = "config" | "event" | "js";
type GtagArgs = [command: GtagCommand, ...params: unknown[]];

declare global {
  interface Window {
    gtag: (...args: GtagArgs) => void;
  }
}

export default function GAListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== "function") return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    const params: Record<string, unknown> = {
      page_path: url,
      ...(process.env.NODE_ENV !== "production" ? { debug_mode: true } : {}),
      page_title:
        typeof document !== "undefined" ? document.title : undefined,
    };

    window.gtag("config", GA_ID, params);
  }, [pathname, searchParams]);

  return null;
}
