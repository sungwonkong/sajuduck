"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function ResultViewGate() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("view") === "1") {
      return;
    }

    router.replace("/");
  }, [router, searchParams]);

  return null;
}
