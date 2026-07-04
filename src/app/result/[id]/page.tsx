import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { AdBanner } from "@/components/AdBanner";
import { ResultCard } from "@/components/ResultCard";
import { ShareButtons } from "@/components/ShareButtons";
import { getResultById, TOTAL_RESULT_COUNT } from "@/data/results";
import { normalizeResultId } from "@/lib/fortune";

type ResultPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: ResultPageProps): Promise<Metadata> {
  const { id } = await params;
  const resultId = normalizeResultId(id);
  const result = getResultById(resultId);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sajuduck.vercel.app";
  const url = `${siteUrl}/result/${resultId}`;
  const imageUrl = `${url}/image.png`;
  const description = `${result.oneLiner} 사주짤 ${resultId}번 결과를 확인해보세요.`;

  return {
    title: result.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `사주짤 결과: ${result.title}`,
      description,
      url,
      type: "website",
      images: [
        {
          url: imageUrl,
          type: "image/png",
          width: 1200,
          height: 630,
          alt: `${result.title} 결과 카드`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `사주짤 결과: ${result.title}`,
      description,
      images: [imageUrl],
    },
  };
}

export function generateStaticParams() {
  return Array.from({ length: TOTAL_RESULT_COUNT }, (_, index) => ({
    id: String(index + 1),
  }));
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { id } = await params;
  const resultId = normalizeResultId(id);
  const result = getResultById(resultId);

  return (
    <main className="min-h-screen bg-[#fffbeb] px-5 py-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link href="/fortune" className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-white px-3 py-2 text-sm font-black shadow-[3px_3px_0_#111]">
            <ArrowLeft size={16} aria-hidden="true" />
            다시 뽑기
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-lime-200 px-3 py-2 text-sm font-black shadow-[3px_3px_0_#111]">
            <RotateCcw size={16} aria-hidden="true" />
            홈
          </Link>
        </div>

        <ResultCard result={result} resultId={resultId} />

        <div className="mt-6">
          <ShareButtons title={`사주짤 결과: ${result.title}`} text={result.oneLiner} />
        </div>

        <section className="mx-auto mt-8 max-w-[420px] rounded-[20px] border-2 border-zinc-950 bg-white p-4 shadow-[5px_5px_0_#111]">
          <h2 className="text-lg font-black text-zinc-950">결과 안내</h2>
          <p className="mt-2 text-sm font-bold leading-6 text-zinc-700">
            이 카드는 오락용 밈 콘텐츠입니다. 실제 인생 결정은 카드보다 본인의 컨디션, 주변 사람, 그리고 오늘의 점심 메뉴가 더 중요할 수 있습니다.
          </p>
          <AdBanner slot="2345678901" className="mt-4" />
        </section>
      </div>
    </main>
  );
}
