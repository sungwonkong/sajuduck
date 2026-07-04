export type FortuneGrade = "S" | "A" | "B" | "C";

export type FortuneResult = {
  id: number;
  title: string;
  animal: string;
  element: string;
  characterMood: "tiny-chaos" | "coffee-zombie" | "meeting-nod" | "wallet-cry";
  oneLiner: string;
  description: string;
  total: FortuneGrade;
  love: FortuneGrade;
  money: FortuneGrade;
  work: FortuneGrade;
  luckyItem: string;
  luckyColor: string;
  tags: string[];
};

export const TOTAL_RESULT_COUNT = 120;

export const results: FortuneResult[] = [
  {
    id: 1,
    title: "퇴근 10분 전 호출형",
    animal: "갑자",
    element: "나무",
    characterMood: "meeting-nod",
    oneLiner: "퇴근 10분 전에 '잠깐만요'를 들을 운명",
    description:
      "오늘의 당신은 대충 끄덕여도 회의가 굴러가는 신기한 버프를 받았습니다. 깊게 말하면 일이 커지니 짧고 맑게 생존하세요.",
    total: "A",
    love: "B",
    money: "B",
    work: "S",
    luckyItem: "반쯤 식은 아메리카노",
    luckyColor: "개나리 노랑",
    tags: ["회의생존", "퇴근기원", "끄덕장인"],
  },
  {
    id: 2,
    title: "커피값 치킨 적립형",
    animal: "을축",
    element: "흙",
    characterMood: "wallet-cry",
    oneLiner: "오늘 커피 안 사면 저녁에 치킨 먹을 수 있음",
    description:
      "소소한 절약이 갑자기 큰 행복으로 변하는 날입니다. 장바구니에 담아둔 물건은 내일의 당신에게 토스하세요.",
    total: "A",
    love: "A",
    money: "S",
    work: "B",
    luckyItem: "쿠폰함",
    luckyColor: "치킨무 하양",
    tags: ["짠테크", "치킨각", "소확행"],
  },
  {
    id: 3,
    title: "읽씹 오해 금지형",
    animal: "병인",
    element: "불",
    characterMood: "tiny-chaos",
    oneLiner: "읽씹은 운명이 아니라 그냥 상대가 누워있는 중",
    description:
      "연락운은 느긋하게 풀립니다. 답장이 늦어도 드라마 12부작까지 상상하지 말고 물 한 잔 마시는 쪽이 이깁니다.",
    total: "B",
    love: "S",
    money: "B",
    work: "A",
    luckyItem: "무음 모드",
    luckyColor: "복숭아 핑크",
    tags: ["연락운", "망상멈춰", "누워있음"],
  },
  {
    id: 4,
    title: "고개 끄덕 프리패스형",
    animal: "정묘",
    element: "불",
    characterMood: "meeting-nod",
    oneLiner: "회의에서는 고개만 끄덕여도 반은 간다",
    description:
      "중요한 순간에 적당히 진지한 얼굴이 빛납니다. 다만 메모하는 척하다가 진짜 할 일이 생길 수 있으니 조심하세요.",
    total: "A",
    love: "B",
    money: "A",
    work: "S",
    luckyItem: "빈 노트",
    luckyColor: "형광펜 초록",
    tags: ["직장운", "표정관리", "반은감"],
  },
  {
    id: 5,
    title: "간식으로 세계평화형",
    animal: "무진",
    element: "흙",
    characterMood: "coffee-zombie",
    oneLiner: "당 떨어지면 인류애도 같이 퇴근함",
    description:
      "기분이 흔들릴 때는 거창한 결심보다 달달한 간식이 빠릅니다. 작은 충전으로 하루의 톤이 다시 살아납니다.",
    total: "B",
    love: "A",
    money: "C",
    work: "B",
    luckyItem: "초코바",
    luckyColor: "딸기우유 분홍",
    tags: ["간식필수", "충전중", "하찮미"],
  },
  {
    id: 6,
    title: "갑자기 정리 천재형",
    animal: "기사",
    element: "흙",
    characterMood: "tiny-chaos",
    oneLiner: "책상은 난리인데 머릿속은 은근 정돈됨",
    description:
      "겉보기엔 대충 굴러가는 듯해도 중요한 순서는 알고 있습니다. 오늘은 미뤄둔 일 하나만 치워도 꽤 멋집니다.",
    total: "A",
    love: "B",
    money: "A",
    work: "A",
    luckyItem: "체크리스트",
    luckyColor: "민트",
    tags: ["정리운", "한개만", "은근천재"],
  },
  {
    id: 7,
    title: "눈치 빠른 척 성공형",
    animal: "경오",
    element: "쇠",
    characterMood: "meeting-nod",
    oneLiner: "모르면 일단 '아 그 흐름이군요'라고 해도 됨",
    description:
      "상황 파악력이 좋아지는 날입니다. 완벽히 알기 전에도 큰 방향을 잡는 감각이 살아 있으니 부담을 덜어도 됩니다.",
    total: "S",
    love: "A",
    money: "B",
    work: "A",
    luckyItem: "검은 볼펜",
    luckyColor: "새벽 파랑",
    tags: ["눈치운", "센스", "흐름파악"],
  },
  {
    id: 8,
    title: "월급 전 존버형",
    animal: "신미",
    element: "쇠",
    characterMood: "wallet-cry",
    oneLiner: "통장은 가볍지만 장바구니는 누구보다 진심",
    description:
      "돈 나갈 구멍이 말이 많습니다. 오늘은 결제 버튼 앞에서 세 번 숨 쉬면 미래의 당신이 박수칩니다.",
    total: "B",
    love: "A",
    money: "C",
    work: "B",
    luckyItem: "위시리스트",
    luckyColor: "영수증 회색",
    tags: ["존버", "장바구니", "월급기다림"],
  },
  {
    id: 9,
    title: "갑분 칭찬 수집형",
    animal: "임신",
    element: "물",
    characterMood: "tiny-chaos",
    oneLiner: "대충 했는데 '오 괜찮은데요?'를 들을 수 있음",
    description:
      "힘을 빼야 오히려 잘 풀리는 날입니다. 너무 각 잡지 말고 자연스럽게 던진 말이 분위기를 살립니다.",
    total: "S",
    love: "A",
    money: "A",
    work: "S",
    luckyItem: "대충 적은 메모",
    luckyColor: "하늘색",
    tags: ["칭찬운", "힘빼기", "오괜찮"],
  },
  {
    id: 10,
    title: "침대 중력 2배형",
    animal: "계유",
    element: "물",
    characterMood: "coffee-zombie",
    oneLiner: "이불 밖은 대체로 업무 요청이 있음",
    description:
      "쉬고 싶은 마음이 강해지는 날입니다. 무리해서 달리기보다 우선순위를 줄이면 오히려 결과가 또렷해집니다.",
    total: "B",
    love: "B",
    money: "A",
    work: "C",
    luckyItem: "알람 3개",
    luckyColor: "이불 베이지",
    tags: ["휴식운", "이불밖", "천천히"],
  },
  {
    id: 11,
    title: "말실수 자동복구형",
    animal: "갑술",
    element: "나무",
    characterMood: "tiny-chaos",
    oneLiner: "아무 말 했는데 분위기가 묘하게 좋아짐",
    description:
      "말의 리듬이 살아납니다. 농담은 짧게, 사과는 빠르게, 칭찬은 크게 하면 인간관계 운이 올라갑니다.",
    total: "A",
    love: "S",
    money: "B",
    work: "A",
    luckyItem: "스티커",
    luckyColor: "귤 주황",
    tags: ["드립운", "자동복구", "분위기"],
  },
  {
    id: 12,
    title: "작심삼일 1일차형",
    animal: "을해",
    element: "나무",
    characterMood: "meeting-nod",
    oneLiner: "오늘 시작하면 적어도 오늘은 성공임",
    description:
      "거창한 루틴보다 작은 시작이 강합니다. 5분만 해도 기록은 남고, 기록은 내일의 핑계를 이깁니다.",
    total: "A",
    love: "B",
    money: "A",
    work: "A",
    luckyItem: "타이머",
    luckyColor: "라임",
    tags: ["시작운", "5분컷", "루틴"],
  },
  // TODO: AdSense 승인 이후 콘텐츠 운영 방향에 맞춰 13~120번 결과를 모두 고유 문구로 확장하세요.
];

export function getResultById(id: number): FortuneResult {
  const normalizedId = ((id - 1) % TOTAL_RESULT_COUNT) + 1;
  const exact = results.find((result) => result.id === normalizedId);

  if (exact) {
    return exact;
  }

  return results[(normalizedId - 1) % results.length];
}
