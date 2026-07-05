import type { FortuneResult } from "@/data/results";

export const siteConfig = {
  name: "사주짤",
  alternateName: "SajuZZal",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sajuduck.vercel.app",
  description: "생년월일과 태어난 시간으로 웃긴 사주 밈 결과 카드를 만드는 무료 오락용 운세 테스트입니다.",
  keywords: ["사주", "사주 테스트", "무료 운세", "오늘의 운세", "운세 테스트", "사주팔자", "사주짤", "SajuZZal", "밈 테스트"],
};

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    inLanguage: "ko-KR",
    description: siteConfig.description,
  };
}

export function createWebApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${siteConfig.name}(${siteConfig.alternateName})`,
    url: siteConfig.url,
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Web",
    inLanguage: "ko-KR",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
  };
}

export function createResultJsonLd(result: FortuneResult, resultId: number) {
  const url = `${siteConfig.url}/result/${resultId}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${result.title} - 사주짤 ${resultId}번 결과`,
    headline: result.oneLiner,
    description: result.description,
    url,
    image: `${url}/image.png`,
    inLanguage: "ko-KR",
    genre: ["오락용 운세", "사주 테스트", "밈"],
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
