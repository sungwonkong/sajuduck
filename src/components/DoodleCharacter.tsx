import type { FortuneResult } from "@/data/results";

type DoodleCharacterProps = {
  mood: FortuneResult["characterMood"];
};

const moodCopy: Record<FortuneResult["characterMood"], string> = {
  "tiny-chaos": "어쩌다 보니 잘됨",
  "coffee-zombie": "카페인 충전중",
  "meeting-nod": "끄덕끄덕 모드",
  "wallet-cry": "통장아 미안해",
};

export function DoodleCharacter({ mood }: DoodleCharacterProps) {
  const isWallet = mood === "wallet-cry";
  const isCoffee = mood === "coffee-zombie";
  const isMeeting = mood === "meeting-nod";

  return (
    <div className="relative mx-auto flex aspect-square w-48 items-center justify-center rounded-full bg-lime-200">
      <div className="absolute left-5 top-7 rotate-[-15deg] rounded-[8px] border-2 border-zinc-950 bg-white px-2 py-1 text-xs font-black">
        {moodCopy[mood]}
      </div>
      <div className="relative h-36 w-28">
        <div className="absolute left-1/2 top-2 h-16 w-16 -translate-x-1/2 rounded-full border-[3px] border-zinc-950 bg-white" />
        <div className="absolute left-[38px] top-8 h-2 w-2 rounded-full bg-zinc-950" />
        <div className="absolute right-[38px] top-8 h-2 w-2 rounded-full bg-zinc-950" />
        <div className={`absolute left-1/2 top-12 h-3 w-8 -translate-x-1/2 border-b-[3px] border-zinc-950 ${isWallet ? "rounded-b-full" : "rounded-t-full"}`} />
        <div className="absolute left-1/2 top-[70px] h-14 w-[3px] -translate-x-1/2 bg-zinc-950" />
        <div className={`absolute left-[18px] top-[82px] h-[3px] w-11 origin-right bg-zinc-950 ${isMeeting ? "rotate-[18deg]" : "rotate-[-28deg]"}`} />
        <div className={`absolute right-[18px] top-[82px] h-[3px] w-11 origin-left bg-zinc-950 ${isCoffee ? "rotate-[-8deg]" : "rotate-[28deg]"}`} />
        <div className="absolute left-[35px] top-[118px] h-[3px] w-10 rotate-[118deg] bg-zinc-950" />
        <div className="absolute right-[35px] top-[118px] h-[3px] w-10 rotate-[62deg] bg-zinc-950" />
        {isCoffee ? (
          <div className="absolute right-0 top-[72px] rounded-[6px] border-2 border-zinc-950 bg-white px-2 py-1 text-xs font-black">
            COFFEE
          </div>
        ) : null}
        {isWallet ? (
          <div className="absolute right-0 top-[70px] rotate-12 rounded-[6px] border-2 border-zinc-950 bg-amber-200 px-2 py-1 text-xs font-black">
            0원
          </div>
        ) : null}
      </div>
      <div className="absolute bottom-6 h-3 w-32 rounded-full bg-zinc-950/15" />
    </div>
  );
}
