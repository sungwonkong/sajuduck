import { TOTAL_RESULT_COUNT } from "@/data/results";

export type Gender = "female" | "male" | "none";

export type FortuneInput = {
  birthDate: string;
  birthTime: string;
  gender: Gender;
};

const heavenlyStems = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const earthlyBranches = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];

export function getGapja(index: number) {
  return `${heavenlyStems[index % heavenlyStems.length]}${earthlyBranches[index % earthlyBranches.length]}`;
}

export function deterministicHash(value: string) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

export function mapInputToResultId(input: FortuneInput) {
  const seed = `${input.birthDate}|${input.birthTime}|${input.gender}`;
  const hash = deterministicHash(seed);
  const gapjaIndex = hash % 60;
  const polarityIndex = Math.floor(hash / 60) % 2;

  return gapjaIndex * 2 + polarityIndex + 1;
}

export function normalizeResultId(id: string | number) {
  const parsed = Number(id);

  if (!Number.isFinite(parsed)) {
    return 1;
  }

  return Math.min(Math.max(Math.trunc(parsed), 1), TOTAL_RESULT_COUNT);
}
