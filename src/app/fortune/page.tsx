import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FortuneForm } from "@/components/FortuneForm";
import { JsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "무료 사주 테스트 시작",
  description: "생년월일과 태어난 시간으로 내 사주팔자 요소를 반영한 웃긴 사주짤 결과 카드를 무료로 뽑아보세요.",
  alternates: {
    canonical: "/fortune",
  },
  openGraph: {
    title: "무료 사주 테스트 시작 | 사주짤",
    description: "생년월일과 태어난 시간으로 내 사주팔자 요소를 반영한 웃긴 사주짤 결과 카드를 뽑아보세요.",
    url: `${siteConfig.url}/fortune`,
  },
};

export default function FortunePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "무료 사주 테스트 시작",
    url: `${siteConfig.url}/fortune`,
    inLanguage: "ko-KR",
    description: metadata.description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <main className="min-h-screen bg-[#fffbeb] px-5 py-6">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-white px-3 py-2 text-sm font-black shadow-[3px_3px_0_#111]">
          <ArrowLeft size={16} aria-hidden="true" />
          처음으로
        </Link>

        <section className="py-8 text-center">
          <p className="text-sm font-black text-rose-500">SajuZZal Generator</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-zinc-950">내 사주짤 뽑기</h1>
          <p className="mx-auto mt-3 max-w-lg text-sm font-bold leading-6 text-zinc-700">
            같은 입력값은 항상 같은 결과로 연결됩니다. 입력 정보는 서버에 저장하지 않고, 이 브라우저의 자동 입력과 결과 ID 계산에만 사용합니다.
          </p>
        </section>

        <FortuneForm />
      </div>
    </main>
  );
}
