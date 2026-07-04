import { ImageResponse } from "next/og";
import { getResultById } from "@/data/results";
import { getGapja } from "@/lib/fortune";

export const resultOgImageSize = {
  width: 1200,
  height: 630,
};

export function createResultOgImage(resultId: number) {
  const result = getResultById(resultId);
  const gapja = getGapja((resultId - 1) % 60);
  const scene = getOgScene(result.characterMood);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fffbeb",
          color: "#18181b",
          fontFamily: "sans-serif",
          padding: 44,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            border: "8px solid #18181b",
            borderRadius: 36,
            background: "#fff7d6",
            padding: 28,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              border: "6px solid #18181b",
              borderRadius: 28,
              background: "#ffffff",
              padding: 34,
              gap: 36,
            }}
          >
            <div
              style={{
                width: 360,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: scene.background,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 46,
                  left: 34,
                  padding: "10px 18px",
                  border: "4px solid #18181b",
                  borderRadius: 12,
                  background: "#ffffff",
                  fontSize: 28,
                  fontWeight: 900,
                  transform: "rotate(-10deg)",
                }}
              >
                {gapja}
              </div>
              <div
                style={{
                  position: "absolute",
                  right: 30,
                  bottom: 44,
                  display: "flex",
                  padding: "10px 16px",
                  border: "4px solid #18181b",
                  borderRadius: 14,
                  background: "#ffffff",
                  fontSize: 26,
                  fontWeight: 900,
                  transform: "rotate(8deg)",
                }}
              >
                {scene.accessory}
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: 126,
                    height: 126,
                    border: "7px solid #18181b",
                    borderRadius: 999,
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 54,
                    fontWeight: 900,
                  }}
                >
                  {scene.face}
                </div>
                <div style={{ width: 8, height: 110, background: "#18181b" }} />
                <div style={{ display: "flex", gap: 24, marginTop: -82 }}>
                  <div style={{ width: 104, height: 8, background: "#18181b", transform: scene.leftArm }} />
                  <div style={{ width: 104, height: 8, background: "#18181b", transform: scene.rightArm }} />
                </div>
                <div style={{ display: "flex", gap: 50, marginTop: 56 }}>
                  <div style={{ width: 104, height: 8, background: "#18181b", transform: "rotate(118deg)" }} />
                  <div style={{ width: 104, height: 8, background: "#18181b", transform: "rotate(62deg)" }} />
                </div>
              </div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#f43f5e", display: "flex", fontSize: 28, fontWeight: 900 }}>
                  SajuZZal #{String(resultId).padStart(3, "0")}
                </div>
                <div style={{ marginTop: 8, color: "#0f766e", display: "flex", fontSize: 26, fontWeight: 900 }}>
                  {scene.label}
                </div>
                <div style={{ marginTop: 12, fontSize: 66, lineHeight: 1.05, fontWeight: 900 }}>
                  {result.title}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  border: "5px solid #18181b",
                  borderRadius: 24,
                  background: "#ffe4e6",
                  padding: "22px 28px",
                  fontSize: 38,
                  lineHeight: 1.25,
                  fontWeight: 900,
                }}
              >
                {result.oneLiner}
              </div>

              <div style={{ display: "flex", gap: 14, fontSize: 24, fontWeight: 900 }}>
                {result.tags.map((tag) => (
                  <div
                    key={tag}
                    style={{
                      display: "flex",
                      border: "4px solid #18181b",
                      borderRadius: 999,
                      background: "#ffffff",
                      padding: "10px 18px",
                    }}
                  >
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    resultOgImageSize,
  );
}

function getOgScene(mood: ReturnType<typeof getResultById>["characterMood"]) {
  const scenes: Record<ReturnType<typeof getResultById>["characterMood"], {
    label: string;
    accessory: string;
    background: string;
    face: string;
    leftArm: string;
    rightArm: string;
  }> = {
    "tiny-chaos": {
      label: "어쩌다 보니 잘됨",
      accessory: "?!",
      background: "#d9f99d",
      face: "ㅇㅅㅇ",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
    },
    "coffee-zombie": {
      label: "카페인 충전중",
      accessory: "COFFEE",
      background: "#fde68a",
      face: "-ㅅ-",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(-8deg)",
    },
    "meeting-nod": {
      label: "회의 생존 자세",
      accessory: "OK",
      background: "#bae6fd",
      face: "ㅇ_ㅇ",
      leftArm: "rotate(18deg)",
      rightArm: "rotate(28deg)",
    },
    "wallet-cry": {
      label: "통장 방어전",
      accessory: "0원",
      background: "#fed7aa",
      face: "ㅠㅅㅠ",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
    },
    "phone-wait": {
      label: "답장 대기중",
      accessory: "1",
      background: "#bfdbfe",
      face: "ㅇㅁㅇ",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(-8deg)",
    },
    "bed-gravity": {
      label: "이불 중력 2배",
      accessory: "Zzz",
      background: "#dbeafe",
      face: "-ㅅ-",
      leftArm: "rotate(8deg)",
      rightArm: "rotate(8deg)",
    },
    "snack-rescue": {
      label: "당 충전 필요",
      accessory: "SNACK",
      background: "#fecdd3",
      face: "ㅇㅂㅇ",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
    },
    "weather-chaos": {
      label: "하늘이 예능함",
      accessory: "RAIN",
      background: "#bae6fd",
      face: "ㅇㅁㅇ",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
    },
    "shopping-urge": {
      label: "장바구니 회의",
      accessory: "CART",
      background: "#fde68a",
      face: "ㅇㅅㅇ",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(-24deg)",
    },
    "commute-luck": {
      label: "이동운 터짐",
      accessory: "▲",
      background: "#bbf7d0",
      face: "ㅇ▽ㅇ",
      leftArm: "rotate(18deg)",
      rightArm: "rotate(28deg)",
    },
    "battery-low": {
      label: "12퍼 생존",
      accessory: "12%",
      background: "#d9f99d",
      face: "ㅠㅅㅠ",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
    },
    "memo-genius": {
      label: "메모장 천재",
      accessory: "memo",
      background: "#e9d5ff",
      face: "ㅇㅅㅇ",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(-8deg)",
    },
  };

  return scenes[mood];
}
