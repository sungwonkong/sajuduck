import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { AdBanner } from "@/components/AdBanner";
import { DoodleCharacter } from "@/components/DoodleCharacter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffbeb]">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 pb-12 pt-8 md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:pt-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-lime-200 px-3 py-1 text-xs font-black text-zinc-950 shadow-[3px_3px_0_#111]">
            <Sparkles size={15} aria-hidden="true" />
            저장 없는 사주 밈 테스트
          </div>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] text-zinc-950 sm:text-6xl">
            사주짤
            <span className="block text-rose-500">SajuZZal</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg font-bold leading-8 text-zinc-700">
            생년월일과 태어난 시간으로 60갑자 기반의 120가지 결과 중 하나를 뽑아주는 가벼운 운세 카드입니다.
            진지한 철학보다 오늘 단톡방에 던지기 좋은 드립을 목표로 합니다.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/fortune"
              className="flex h-14 items-center justify-center gap-2 rounded-[14px] border-2 border-zinc-950 bg-zinc-950 px-6 text-base font-black text-white shadow-[5px_5px_0_#fbbf24] transition hover:-translate-y-0.5"
            >
              내 사주짤 보기
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link
              href="/privacy"
              className="flex h-14 items-center justify-center gap-2 rounded-[14px] border-2 border-zinc-950 bg-white px-6 text-base font-black text-zinc-950 shadow-[5px_5px_0_#111] transition hover:-translate-y-0.5"
            >
              <ShieldCheck size={20} aria-hidden="true" />
              개인정보 안내
            </Link>
          </div>
        </div>

        <div className="rounded-[28px] border-[3px] border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#111]">
          <DoodleCharacter mood="tiny-chaos" />
          <div className="mt-5 rounded-[18px] border-2 border-zinc-950 bg-rose-100 p-4">
            <p className="text-center text-2xl font-black leading-tight text-zinc-950">
              오늘의 운세: 대충 해도 묘하게 됨
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t-[3px] border-zinc-950 px-5 py-10">
        <h2 className="text-2xl font-black text-zinc-950">주의문구</h2>
        <p className="mt-3 text-sm font-bold leading-7 text-zinc-700">
          사주짤은 오락용 콘텐츠입니다. 실제 사주명리 해석, 상담, 의학적·법률적·재정적 조언을 제공하지 않습니다.
          하루를 조금 더 웃기게 시작하기 위한 밈 카드로 즐겨주세요.
        </p>
        <AdBanner slot="1234567890" className="mt-8" />
      </section>
    </main>
  );
}
