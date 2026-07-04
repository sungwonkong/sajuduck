import type { FortuneGrade } from "@/data/results";

const gradeStyles: Record<FortuneGrade, string> = {
  S: "bg-rose-500 text-white shadow-[3px_3px_0_#111]",
  A: "bg-amber-300 text-zinc-950 shadow-[3px_3px_0_#111]",
  B: "bg-sky-300 text-zinc-950 shadow-[3px_3px_0_#111]",
  C: "bg-zinc-200 text-zinc-950 shadow-[3px_3px_0_#111]",
};

type GradeBadgeProps = {
  label: string;
  grade: FortuneGrade;
};

export function GradeBadge({ label, grade }: GradeBadgeProps) {
  return (
    <div className="flex items-center justify-between rounded-[8px] border-2 border-zinc-950 bg-white px-3 py-2">
      <span className="text-sm font-black text-zinc-700">{label}</span>
      <span className={`min-w-10 rounded-[8px] border-2 border-zinc-950 px-2 py-1 text-center text-sm font-black ${gradeStyles[grade]}`}>
        {grade}
      </span>
    </div>
  );
}
