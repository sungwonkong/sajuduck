"use client";

import { Copy, Share2 } from "lucide-react";
import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  text: string;
};

export function ShareButtons({ title, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  function getShareUrl() {
    const url = new URL(window.location.href);

    url.search = "";
    url.hash = "";

    return url.toString();
  }

  async function share() {
    const url = getShareUrl();

    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }

    await copy();
  }

  async function copy() {
    await navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="mx-auto w-full max-w-[420px]">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={share}
          className="flex h-12 items-center justify-center gap-1 rounded-[12px] border-2 border-zinc-950 bg-rose-400 px-3 text-sm font-black text-white shadow-[3px_3px_0_#111]"
        >
          <Share2 size={17} aria-hidden="true" />
          공유
        </button>
        <button
          type="button"
          onClick={copy}
          className="flex h-12 items-center justify-center gap-1 rounded-[12px] border-2 border-zinc-950 bg-white px-3 text-sm font-black text-zinc-950 shadow-[3px_3px_0_#111]"
        >
          <Copy size={17} aria-hidden="true" />
          {copied ? "복사됨" : "링크"}
        </button>
      </div>
      <p className="mt-3 text-center text-xs font-bold text-zinc-500">
        친구가 링크를 누르면 첫 화면에서 자기 사주짤을 만들 수 있습니다.
      </p>
    </div>
  );
}
