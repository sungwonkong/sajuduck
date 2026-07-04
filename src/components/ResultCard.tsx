import type { FortuneResult } from "@/data/results";
import { getGapja } from "@/lib/fortune";
import { DoodleCharacter } from "./DoodleCharacter";
import { GradeBadge } from "./GradeBadge";

type ResultCardProps = {
  result: FortuneResult;
  resultId: number;
};

export function ResultCard({ result, resultId }: ResultCardProps) {
  const gapja = getGapja((resultId - 1) % 60);

  return (
    <article className="mx-auto w-full max-w-[420px] rounded-[28px] border-[3px] border-zinc-950 bg-[#fff7d6] p-4 shadow-[8px_8px_0_#111]">
      <div className="rounded-[22px] border-[3px] border-zinc-950 bg-white p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase text-rose-500">SajuZZal #{resultId.toString().padStart(3, "0")}</p>
            <h1 className="mt-1 text-3xl font-black leading-tight text-zinc-950">{result.title}</h1>
          </div>
          <div className="rounded-[8px] border-2 border-zinc-950 bg-sky-200 px-2 py-1 text-sm font-black text-zinc-950">
            {gapja}
          </div>
        </div>

        <div className="my-5">
          <DoodleCharacter mood={result.characterMood} />
        </div>

        <p className="rounded-[16px] border-2 border-zinc-950 bg-rose-100 px-4 py-3 text-center text-xl font-black leading-snug text-zinc-950">
          {result.oneLiner}
        </p>

        <p className="mt-4 text-sm font-bold leading-6 text-zinc-700">{result.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <GradeBadge label="총운" grade={result.total} />
          <GradeBadge label="연애운" grade={result.love} />
          <GradeBadge label="재물운" grade={result.money} />
          <GradeBadge label="직장운" grade={result.work} />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 text-sm font-black">
          <div className="rounded-[12px] border-2 border-zinc-950 bg-lime-100 p-3">
            <p className="text-zinc-500">행운템</p>
            <p className="mt-1 text-zinc-950">{result.luckyItem}</p>
          </div>
          <div className="rounded-[12px] border-2 border-zinc-950 bg-amber-100 p-3">
            <p className="text-zinc-500">행운색</p>
            <p className="mt-1 text-zinc-950">{result.luckyColor}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {result.tags.map((tag) => (
            <span key={tag} className="rounded-full border-2 border-zinc-950 bg-white px-3 py-1 text-xs font-black">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
