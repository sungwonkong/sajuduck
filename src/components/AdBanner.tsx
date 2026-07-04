"use client";

import { useEffect, useRef, useState } from "react";

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
  const adRef = useRef<HTMLModElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

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

  useEffect(() => {
    const adElement = adRef.current;

    if (!adElement) {
      return;
    }

    const collapseIfUnfilled = () => {
      if (adElement.dataset.adStatus === "unfilled") {
        setIsCollapsed(true);
      }
    };
    const observer = new MutationObserver(collapseIfUnfilled);

    observer.observe(adElement, {
      attributes: true,
      attributeFilter: ["data-ad-status"],
    });
    collapseIfUnfilled();

    return () => observer.disconnect();
  }, []);

  if (!client || isCollapsed) {
    return null;
  }

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle block max-h-[90px] min-h-0 overflow-hidden ${className}`}
      style={{ height: 90 }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="horizontal"
      data-full-width-responsive="true"
    />
  );
}
