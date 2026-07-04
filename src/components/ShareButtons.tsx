"use client";

import { Copy, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  text: string;
};

declare global {
  interface Window {
    Kakao?: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Share?: {
        sendDefault: (options: {
          objectType: "feed";
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          };
          buttons: {
            title: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          }[];
        }) => void;
      };
    };
  }
}

export function ShareButtons({ title, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState("");

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

  async function shareToKakaoTalk() {
    const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY;
    const url = window.location.href;
    const imageUrl = `${window.location.origin}${window.location.pathname.replace(/\/$/, "")}/opengraph-image`;

    if (kakaoKey && window.Kakao?.Share) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(kakaoKey);
      }

      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title,
          description: text,
          imageUrl,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: "내 사주짤 보기",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
      return;
    }

    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }

    await copy();
    setNotice("카카오톡 직접 공유는 Kakao JavaScript 키 설정 후 활성화됩니다.");
    window.setTimeout(() => setNotice(""), 2500);
  }

  return (
    <div className="mx-auto w-full max-w-[420px]">
      <div className="grid grid-cols-3 gap-2">
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
          onClick={shareToKakaoTalk}
          className="flex h-12 items-center justify-center gap-1 rounded-[12px] border-2 border-zinc-950 bg-[#fee500] px-3 text-sm font-black text-zinc-950 shadow-[3px_3px_0_#111]"
        >
          <MessageCircle size={17} aria-hidden="true" />
          카톡
        </button>
      </div>
      {notice ? <p className="mt-3 text-center text-xs font-bold text-zinc-500">{notice}</p> : null}
    </div>
  );
}
