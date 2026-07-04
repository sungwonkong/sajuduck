"use client";

import { Copy, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  text: string;
};

export function ShareButtons({ title, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }

    await copy();
  }

  async function copy() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function openKakaoStory() {
    window.open(`https://story.kakao.com/share?url=${encodeURIComponent(window.location.href)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mx-auto grid w-full max-w-[420px] grid-cols-3 gap-2">
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
      <button
        type="button"
        onClick={openKakaoStory}
        className="flex h-12 items-center justify-center gap-1 rounded-[12px] border-2 border-zinc-950 bg-[#fee500] px-3 text-sm font-black text-zinc-950 shadow-[3px_3px_0_#111]"
      >
        <MessageCircle size={17} aria-hidden="true" />
        카톡
      </button>
    </div>
  );
}
