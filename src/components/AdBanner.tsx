"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdBannerProps = {
  slot: string;
  className?: string;
};

export function AdBanner({ slot, className = "" }: AdBannerProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!client) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ad blockers can prevent AdSense from initializing.
    }
  }, [client, slot]);

  if (!client) {
    return (
      <div className={`flex min-h-24 items-center justify-center rounded-[16px] border-2 border-dashed border-zinc-400 bg-white/70 px-4 text-center text-xs font-bold text-zinc-500 ${className}`}>
        광고 영역: NEXT_PUBLIC_ADSENSE_CLIENT_ID 설정 시 AdSense 배너가 표시됩니다.
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle block min-h-24 ${className}`}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
