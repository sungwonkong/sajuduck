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
    const shareData: ShareData = { title, text, url };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    if (openAndroidShareSheet(title, text, url)) {
      return;
    }

    await copy(url);
  }

  async function copy(url = getShareUrl()) {
    await navigator.clipboard.writeText(url);
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
          onClick={() => copy()}
          className="flex h-12 items-center justify-center gap-1 rounded-[12px] border-2 border-zinc-950 bg-white px-3 text-sm font-black text-zinc-950 shadow-[3px_3px_0_#111]"
        >
          <Copy size={17} aria-hidden="true" />
          {copied ? "복사됨" : "링크"}
        </button>
      </div>
      <p className="mt-3 text-center text-xs font-bold text-zinc-500">
        친구가 링크를 누르면 이 결과 카드를 바로 볼 수 있습니다.
      </p>
    </div>
  );
}

function openAndroidShareSheet(title: string, text: string, url: string) {
  if (!/android/i.test(window.navigator.userAgent)) {
    return false;
  }

  const shareText = `${title}\n${text}\n${url}`;
  const intentUrl = `intent:#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.TEXT=${encodeURIComponent(shareText)};S.android.intent.extra.SUBJECT=${encodeURIComponent(title)};end`;

  window.location.href = intentUrl;

  return true;
}
