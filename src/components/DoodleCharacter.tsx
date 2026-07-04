import type { FortuneResult } from "@/data/results";

type DoodleCharacterProps = {
  mood: FortuneResult["characterMood"];
};

const moodCopy: Record<FortuneResult["characterMood"], string> = {
  "tiny-chaos": "어쩌다 보니 잘됨",
  "coffee-zombie": "카페인 충전중",
  "meeting-nod": "끄덕끄덕 모드",
  "wallet-cry": "통장아 미안해",
  "phone-wait": "답장 대기중",
  "bed-gravity": "이불 중력 2배",
  "snack-rescue": "당 충전 필요",
  "weather-chaos": "하늘이 예능함",
  "shopping-urge": "장바구니 회의",
  "commute-luck": "이동운 터짐",
  "battery-low": "12퍼 생존",
  "memo-genius": "메모장 천재",
};

export function DoodleCharacter({ mood }: DoodleCharacterProps) {
  const isWallet = mood === "wallet-cry";
  const isCoffee = mood === "coffee-zombie";
  const isMeeting = mood === "meeting-nod";
  const isPhone = mood === "phone-wait";
  const isBed = mood === "bed-gravity";
  const isSnack = mood === "snack-rescue";
  const isWeather = mood === "weather-chaos";
  const isShopping = mood === "shopping-urge";
  const isCommute = mood === "commute-luck";
  const isBattery = mood === "battery-low";
  const isMemo = mood === "memo-genius";
  const isSadMouth = isWallet || isBattery;
  const isTiredMouth = isCoffee || isBed;
  const leftArm = isMeeting || isCommute ? "rotate-[18deg]" : isBed ? "rotate-[8deg]" : "rotate-[-28deg]";
  const rightArm = isCoffee || isPhone || isMemo ? "rotate-[-8deg]" : isShopping ? "rotate-[-24deg]" : "rotate-[28deg]";

  return (
    <div className={`relative mx-auto flex aspect-square w-48 items-center justify-center rounded-full ${isBed ? "bg-sky-100" : isWeather ? "bg-sky-200" : isShopping ? "bg-amber-100" : "bg-lime-200"}`}>
      <div className="absolute left-5 top-7 rotate-[-15deg] rounded-[8px] border-2 border-zinc-950 bg-white px-2 py-1 text-xs font-black">
        {moodCopy[mood]}
      </div>
      {isBed ? (
        <div className="absolute bottom-12 left-8 h-14 w-32 rotate-[-3deg] rounded-[16px] border-2 border-zinc-950 bg-sky-300" />
      ) : null}
      {isWeather ? (
        <>
          <div className="absolute right-8 top-12 h-10 w-16 rounded-full border-2 border-zinc-950 bg-zinc-200" />
          <div className="absolute right-12 top-24 h-3 w-[3px] rotate-12 bg-sky-600" />
          <div className="absolute right-20 top-28 h-3 w-[3px] rotate-12 bg-sky-600" />
        </>
      ) : null}
      <div className="relative h-36 w-28">
        <div className="absolute left-1/2 top-2 h-16 w-16 -translate-x-1/2 rounded-full border-[3px] border-zinc-950 bg-white" />
        <div className={`absolute left-[38px] top-8 h-2 bg-zinc-950 ${isCoffee || isBed ? "w-3 rounded-sm" : "w-2 rounded-full"}`} />
        <div className={`absolute right-[38px] top-8 h-2 bg-zinc-950 ${isCoffee || isBed ? "w-3 rounded-sm" : "w-2 rounded-full"}`} />
        <div className={`absolute left-1/2 top-12 h-3 w-8 -translate-x-1/2 border-b-[3px] border-zinc-950 ${isSadMouth ? "rounded-b-full" : isTiredMouth ? "rounded-none" : "rounded-t-full"}`} />
        <div className="absolute left-1/2 top-[70px] h-14 w-[3px] -translate-x-1/2 bg-zinc-950" />
        <div className={`absolute left-[18px] top-[82px] h-[3px] w-11 origin-right bg-zinc-950 ${leftArm}`} />
        <div className={`absolute right-[18px] top-[82px] h-[3px] w-11 origin-left bg-zinc-950 ${rightArm}`} />
        <div className={`absolute left-[35px] top-[118px] h-[3px] w-10 bg-zinc-950 ${isCommute ? "rotate-[82deg]" : "rotate-[118deg]"}`} />
        <div className={`absolute right-[35px] top-[118px] h-[3px] w-10 bg-zinc-950 ${isCommute ? "rotate-[98deg]" : "rotate-[62deg]"}`} />
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
        {isPhone ? (
          <div className="absolute right-0 top-[68px] rotate-6 rounded-[6px] border-2 border-zinc-950 bg-sky-100 px-2 py-1 text-xs font-black">
            1
          </div>
        ) : null}
        {isSnack ? (
          <div className="absolute right-[-6px] top-[72px] rotate-12 rounded-[6px] border-2 border-zinc-950 bg-rose-200 px-2 py-1 text-xs font-black">
            SNACK
          </div>
        ) : null}
        {isShopping ? (
          <div className="absolute right-[-10px] top-[78px] rounded-[6px] border-2 border-zinc-950 bg-white px-2 py-1 text-xs font-black">
            CART
          </div>
        ) : null}
        {isCommute ? (
          <div className="absolute right-[-6px] top-[60px] rounded-[6px] border-2 border-zinc-950 bg-white px-2 py-1 text-xs font-black">
            ▲
          </div>
        ) : null}
        {isBattery ? (
          <div className="absolute right-[-4px] top-[70px] rounded-[6px] border-2 border-zinc-950 bg-lime-100 px-2 py-1 text-xs font-black">
            12%
          </div>
        ) : null}
        {isMemo ? (
          <div className="absolute right-[-8px] top-[68px] rotate-6 rounded-[6px] border-2 border-zinc-950 bg-white px-2 py-1 text-xs font-black">
            memo
          </div>
        ) : null}
      </div>
      <div className="absolute bottom-6 h-3 w-32 rounded-full bg-zinc-950/15" />
    </div>
  );
}
