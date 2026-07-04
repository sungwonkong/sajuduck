"use client";

import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Gender, mapInputToResultId } from "@/lib/fortune";

const STORAGE_KEY = "sajuzzal:last-input";

const birthTimes = [
  { value: "unknown", label: "잘 모름" },
  { value: "00-02", label: "00:00 - 02:59" },
  { value: "03-05", label: "03:00 - 05:59" },
  { value: "06-08", label: "06:00 - 08:59" },
  { value: "09-11", label: "09:00 - 11:59" },
  { value: "12-14", label: "12:00 - 14:59" },
  { value: "15-17", label: "15:00 - 17:59" },
  { value: "18-20", label: "18:00 - 20:59" },
  { value: "21-23", label: "21:00 - 23:59" },
];

const genders: { value: Gender; label: string }[] = [
  { value: "none", label: "선택 안 함" },
  { value: "female", label: "여성" },
  { value: "male", label: "남성" },
];

type SavedFortuneInput = {
  birthDate: string;
  birthTime: string;
  gender: Gender;
};

export function FortuneForm() {
  const router = useRouter();
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("unknown");
  const [gender, setGender] = useState<Gender>("none");
  const [isLoaded, setIsLoaded] = useState(false);

  const canSubmit = useMemo(() => birthDate.length > 0, [birthDate]);

  useEffect(() => {
    const loadSavedInput = window.setTimeout(() => {
      try {
        const savedInput = window.localStorage.getItem(STORAGE_KEY);

        if (!savedInput) {
          return;
        }

        const parsedInput = JSON.parse(savedInput) as Partial<SavedFortuneInput>;
        const hasValidBirthTime = birthTimes.some((time) => time.value === parsedInput.birthTime);
        const hasValidGender = genders.some((item) => item.value === parsedInput.gender);

        if (typeof parsedInput.birthDate === "string") {
          setBirthDate(parsedInput.birthDate);
        }

        if (hasValidBirthTime && typeof parsedInput.birthTime === "string") {
          setBirthTime(parsedInput.birthTime);
        }

        if (hasValidGender && parsedInput.gender) {
          setGender(parsedInput.gender);
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      } finally {
        setIsLoaded(true);
      }
    }, 0);

    return () => window.clearTimeout(loadSavedInput);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const inputToSave: SavedFortuneInput = {
      birthDate,
      birthTime,
      gender,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(inputToSave));
  }, [birthDate, birthTime, gender, isLoaded]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    const resultId = mapInputToResultId({ birthDate, birthTime, gender });
    router.push(`/result/${resultId}?view=1`);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-[440px] rounded-[24px] border-[3px] border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#111]">
      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-black text-zinc-800">생년월일</span>
          <input
            required
            type="date"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
            className="mt-2 h-13 w-full rounded-[12px] border-2 border-zinc-950 bg-amber-50 px-4 text-base font-bold text-zinc-950 outline-none focus:bg-white focus:ring-4 focus:ring-lime-200"
          />
        </label>

        <label className="block">
          <span className="text-sm font-black text-zinc-800">태어난 시간</span>
          <select
            value={birthTime}
            onChange={(event) => setBirthTime(event.target.value)}
            className="mt-2 h-13 w-full rounded-[12px] border-2 border-zinc-950 bg-sky-50 px-4 text-base font-bold text-zinc-950 outline-none focus:bg-white focus:ring-4 focus:ring-lime-200"
          >
            {birthTimes.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </label>

        <fieldset>
          <legend className="text-sm font-black text-zinc-800">성별</legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {genders.map((item) => (
              <label
                key={item.value}
                className={`flex h-12 cursor-pointer items-center justify-center rounded-[12px] border-2 border-zinc-950 px-2 text-center text-sm font-black transition ${
                  gender === item.value ? "bg-rose-400 text-white shadow-[3px_3px_0_#111]" : "bg-white text-zinc-950"
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  value={item.value}
                  checked={gender === item.value}
                  onChange={() => setGender(item.value)}
                  className="sr-only"
                />
                {item.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-[14px] border-2 border-zinc-950 bg-zinc-950 px-5 text-base font-black text-white shadow-[5px_5px_0_#fbbf24] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500 disabled:shadow-none"
      >
        <Sparkles size={20} aria-hidden="true" />
        결과 보기
      </button>

      <p className="mt-4 text-center text-xs font-bold leading-5 text-zinc-500">
        입력값은 이 브라우저에만 저장되어 다음 방문 때 자동으로 채워집니다.
      </p>
    </form>
  );
}
