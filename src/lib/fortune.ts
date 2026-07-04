import { TOTAL_RESULT_COUNT } from "@/data/results";

export type Gender = "female" | "male" | "none";
export type FiveElement = "wood" | "fire" | "earth" | "metal" | "water";

export type FortuneInput = {
  birthDate: string;
  birthTime: string;
  gender: Gender;
};

const heavenlyStems = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const earthlyBranches = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
const fiveElements: FiveElement[] = ["wood", "fire", "earth", "metal", "water"];
const stemElements: FiveElement[] = ["wood", "wood", "fire", "fire", "earth", "earth", "metal", "metal", "water", "water"];
const branchElements: FiveElement[] = ["water", "earth", "wood", "wood", "earth", "fire", "fire", "earth", "metal", "metal", "earth", "water"];
const genderWeights: Record<Gender, number> = {
  none: 0,
  female: 1,
  male: 2,
};

type ParsedDate = {
  year: number;
  month: number;
  day: number;
};

export type SajuPillar = {
  stem: string;
  branch: string;
  stemIndex: number;
  branchIndex: number;
  index: number;
  label: string;
};

export type ElementProfile = Record<FiveElement, number>;

export type FourPillars = {
  year: SajuPillar;
  month: SajuPillar;
  day: SajuPillar;
  hour: SajuPillar | null;
  elements: ElementProfile;
  dominantElement: FiveElement;
};

export function getGapja(index: number) {
  const normalizedIndex = positiveMod(index, 60);

  return `${heavenlyStems[normalizedIndex % heavenlyStems.length]}${earthlyBranches[normalizedIndex % earthlyBranches.length]}`;
}

export function deterministicHash(value: string) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

export function calculateFourPillars(input: FortuneInput): FourPillars {
  const parsedDate = parseBirthDate(input.birthDate);
  const year = calculateYearPillar(parsedDate);
  const month = calculateMonthPillar(parsedDate, year.stemIndex);
  const day = calculateDayPillar(parsedDate);
  const hour = calculateHourPillar(input.birthTime, day.stemIndex);
  const elements = calculateElementProfile([year, month, day, hour]);
  const dominantElement = findDominantElement(elements);

  return {
    year,
    month,
    day,
    hour,
    elements,
    dominantElement,
  };
}

export function mapInputToResultId(input: FortuneInput) {
  const pillars = calculateFourPillars(input);
  const elementSignature = fiveElements.reduce((total, element, index) => {
    return total + pillars.elements[element] * (index + 1) * 3;
  }, 0);
  const dominantElementIndex = fiveElements.indexOf(pillars.dominantElement);
  const hourIndex = pillars.hour?.index ?? pillars.day.stemIndex * 6 + pillars.month.branchIndex;
  const sajuSeed =
    pillars.day.index * 17 +
    pillars.year.index * 7 +
    pillars.month.index * 5 +
    hourIndex * 3 +
    dominantElementIndex * 19 +
    elementSignature +
    genderWeights[input.gender] * 11;

  return positiveMod(sajuSeed, TOTAL_RESULT_COUNT) + 1;
}

export function normalizeResultId(id: string | number) {
  const parsed = Number(id);

  if (!Number.isFinite(parsed)) {
    return 1;
  }

  return Math.min(Math.max(Math.trunc(parsed), 1), TOTAL_RESULT_COUNT);
}

function calculateYearPillar(date: ParsedDate) {
  const solarYear = isBeforeFixedIpchun(date) ? date.year - 1 : date.year;

  return createPillar(positiveMod(solarYear - 1984, 60));
}

function calculateMonthPillar(date: ParsedDate, yearStemIndex: number) {
  const branchIndex = getApproximateSolarMonthBranch(date);
  const firstMonthStemIndex = getFirstSolarMonthStemIndex(yearStemIndex);
  const monthOffsetFromYin = positiveMod(branchIndex - 2, 12);
  const stemIndex = positiveMod(firstMonthStemIndex + monthOffsetFromYin, heavenlyStems.length);
  const index = getGapjaIndex(stemIndex, branchIndex);

  return createPillar(index);
}

function calculateDayPillar(date: ParsedDate) {
  const julianDayNumber = getGregorianJulianDayNumber(date);

  // Based on the uninterrupted sexagenary day cycle where 2019-01-27
  // at Julian day number 2458511 was 갑자. This app uses calendar dates only.
  return createPillar(positiveMod(julianDayNumber - 11, 60));
}

function calculateHourPillar(birthTime: string, dayStemIndex: number) {
  const branchIndex = getHourBranchIndex(birthTime);

  if (branchIndex === null) {
    return null;
  }

  const ziHourStemIndex = getZiHourStemIndex(dayStemIndex);
  const stemIndex = positiveMod(ziHourStemIndex + branchIndex, heavenlyStems.length);

  return createPillar(getGapjaIndex(stemIndex, branchIndex));
}

function createPillar(index: number): SajuPillar {
  const normalizedIndex = positiveMod(index, 60);
  const stemIndex = normalizedIndex % heavenlyStems.length;
  const branchIndex = normalizedIndex % earthlyBranches.length;

  return {
    stem: heavenlyStems[stemIndex],
    branch: earthlyBranches[branchIndex],
    stemIndex,
    branchIndex,
    index: normalizedIndex,
    label: `${heavenlyStems[stemIndex]}${earthlyBranches[branchIndex]}`,
  };
}

function calculateElementProfile(pillars: Array<SajuPillar | null>) {
  const profile = createEmptyElementProfile();

  for (const pillar of pillars) {
    if (!pillar) {
      continue;
    }

    profile[stemElements[pillar.stemIndex]] += 1;
    profile[branchElements[pillar.branchIndex]] += 1;
  }

  return profile;
}

function findDominantElement(profile: ElementProfile) {
  return fiveElements.reduce((dominant, element) => {
    if (profile[element] > profile[dominant]) {
      return element;
    }

    return dominant;
  }, fiveElements[0]);
}

function createEmptyElementProfile(): ElementProfile {
  return {
    wood: 0,
    fire: 0,
    earth: 0,
    metal: 0,
    water: 0,
  };
}

function parseBirthDate(birthDate: string): ParsedDate {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(birthDate);

  if (!match) {
    throw new Error("Birth date must be formatted as YYYY-MM-DD.");
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    throw new Error("Birth date is not a valid Gregorian date.");
  }

  return { year, month, day };
}

function isBeforeFixedIpchun(date: ParsedDate) {
  return date.month < 2 || (date.month === 2 && date.day < 4);
}

function getApproximateSolarMonthBranch(date: ParsedDate) {
  const monthDay = date.month * 100 + date.day;

  // Entertainment-grade approximation: real saju uses solar-term instants
  // that shift by year/time zone. These fixed month/day boundaries follow
  // the usual Gregorian ranges closely enough for deterministic result mapping.
  if (monthDay >= 1207 || monthDay <= 105) {
    return 0;
  }

  if (monthDay <= 203) {
    return 1;
  }

  if (monthDay <= 305) {
    return 2;
  }

  if (monthDay <= 404) {
    return 3;
  }

  if (monthDay <= 505) {
    return 4;
  }

  if (monthDay <= 605) {
    return 5;
  }

  if (monthDay <= 706) {
    return 6;
  }

  if (monthDay <= 807) {
    return 7;
  }

  if (monthDay <= 907) {
    return 8;
  }

  if (monthDay <= 1007) {
    return 9;
  }

  if (monthDay <= 1106) {
    return 10;
  }

  return 11;
}

function getFirstSolarMonthStemIndex(yearStemIndex: number) {
  if (yearStemIndex === 0 || yearStemIndex === 5) {
    return 2;
  }

  if (yearStemIndex === 1 || yearStemIndex === 6) {
    return 4;
  }

  if (yearStemIndex === 2 || yearStemIndex === 7) {
    return 6;
  }

  if (yearStemIndex === 3 || yearStemIndex === 8) {
    return 8;
  }

  return 0;
}

function getHourBranchIndex(birthTime: string) {
  const hourBranchByValue: Record<string, number> = {
    "23-00": 0,
    "01-02": 1,
    "03-04": 2,
    "05-06": 3,
    "07-08": 4,
    "09-10": 5,
    "11-12": 6,
    "13-14": 7,
    "15-16": 8,
    "17-18": 9,
    "19-20": 10,
    "21-22": 11,
    "00-02": 1,
    "03-05": 2,
    "06-08": 4,
    "09-11": 5,
    "12-14": 7,
    "15-17": 8,
    "18-20": 10,
    "21-23": 11,
  };

  return hourBranchByValue[birthTime] ?? null;
}

function getZiHourStemIndex(dayStemIndex: number) {
  if (dayStemIndex === 0 || dayStemIndex === 5) {
    return 0;
  }

  if (dayStemIndex === 1 || dayStemIndex === 6) {
    return 2;
  }

  if (dayStemIndex === 2 || dayStemIndex === 7) {
    return 4;
  }

  if (dayStemIndex === 3 || dayStemIndex === 8) {
    return 6;
  }

  return 8;
}

function getGapjaIndex(stemIndex: number, branchIndex: number) {
  for (let index = 0; index < 60; index += 1) {
    if (index % heavenlyStems.length === stemIndex && index % earthlyBranches.length === branchIndex) {
      return index;
    }
  }

  throw new Error("Invalid stem and branch combination.");
}

function getGregorianJulianDayNumber(date: ParsedDate) {
  const monthOffset = Math.floor((14 - date.month) / 12);
  const year = date.year + 4800 - monthOffset;
  const month = date.month + 12 * monthOffset - 3;

  return date.day + Math.floor((153 * month + 2) / 5) + 365 * year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) - 32045;
}

function positiveMod(value: number, divisor: number) {
  return ((value % divisor) + divisor) % divisor;
}
