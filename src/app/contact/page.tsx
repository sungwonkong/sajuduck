import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의",
  description: "사주짤 서비스 문의 및 콘텐츠 제안 안내",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fffbeb] px-5 py-8">
      <article className="mx-auto max-w-3xl rounded-[24px] border-[3px] border-zinc-950 bg-white p-6 shadow-[8px_8px_0_#111]">
        <Link href="/" className="text-sm font-black text-rose-500">처음으로</Link>
        <h1 className="mt-4 text-3xl font-black text-zinc-950">문의</h1>
        <p className="mt-5 text-sm font-bold leading-7 text-zinc-700">
          사주짤 결과 문구 제안, 광고 문의, 오류 제보는 운영자 이메일로 보내주세요. 배포 전 실제 연락처로 교체하면 됩니다.
        </p>
        <div className="mt-5 rounded-[16px] border-2 border-zinc-950 bg-amber-100 p-4 text-base font-black text-zinc-950">
          hello@sajuzzal.example
        </div>
      </article>
    </main>
  );
}
