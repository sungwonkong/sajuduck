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
                  padding: "8px 14px",
                  border: "4px solid #18181b",
                  borderRadius: 12,
                  background: "#ffffff",
                  fontSize: 24,
                  fontWeight: 900,
                  transform: "rotate(-15deg)",
                }}
              >
                {scene.label}
              </div>
              {scene.isBed ? (
                <div
                  style={{
                    position: "absolute",
                    left: 76,
                    bottom: 94,
                    width: 210,
                    height: 86,
                    border: "4px solid #18181b",
                    borderRadius: 28,
                    background: "#7dd3fc",
                    transform: "rotate(-3deg)",
                  }}
                />
              ) : null}
              {scene.isWeather ? (
                <>
                  <div
                    style={{
                      position: "absolute",
                      right: 62,
                      top: 102,
                      width: 90,
                      height: 54,
                      border: "4px solid #18181b",
                      borderRadius: 999,
                      background: "#e4e4e7",
                    }}
                  />
                  <div style={{ position: "absolute", right: 94, top: 176, width: 5, height: 28, background: "#0284c7", transform: "rotate(12deg)" }} />
                  <div style={{ position: "absolute", right: 132, top: 194, width: 5, height: 28, background: "#0284c7", transform: "rotate(12deg)" }} />
                </>
              ) : null}
              <div style={{ position: "relative", width: 236, height: 304, display: "flex" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 55,
                    top: 0,
                    width: 126,
                    height: 126,
                    border: "7px solid #18181b",
                    borderRadius: 999,
                    background: "#ffffff",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 88,
                    top: 50,
                    width: scene.hasTiredEyes ? 24 : 18,
                    height: 18,
                    borderRadius: scene.hasTiredEyes ? 4 : 999,
                    background: "#18181b",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: 88,
                    top: 50,
                    width: scene.hasTiredEyes ? 24 : 18,
                    height: 18,
                    borderRadius: scene.hasTiredEyes ? 4 : 999,
                    background: "#18181b",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 86,
                    top: 78,
                    width: 64,
                    height: 26,
                    borderBottom: "7px solid #18181b",
                    borderRadius: scene.isSadMouth ? "0 0 999px 999px" : scene.isTiredMouth ? 0 : "999px 999px 0 0",
                  }}
                />
                <div style={{ position: "absolute", left: 114, top: 126, width: 7, height: 112, background: "#18181b" }} />
                <div style={{ position: "absolute", left: 26, top: 162, width: 104, height: 7, background: "#18181b", transform: scene.leftArm }} />
                <div style={{ position: "absolute", right: 26, top: 162, width: 104, height: 7, background: "#18181b", transform: scene.rightArm }} />
                <div style={{ position: "absolute", left: 67, top: 232, width: 104, height: 7, background: "#18181b", transform: scene.isCommute ? "rotate(82deg)" : "rotate(118deg)" }} />
                <div style={{ position: "absolute", right: 67, top: 232, width: 104, height: 7, background: "#18181b", transform: scene.isCommute ? "rotate(98deg)" : "rotate(62deg)" }} />
                {scene.accessory ? (
                  <div
                    style={{
                      position: "absolute",
                      right: -8,
                      top: 148,
                      display: "flex",
                      padding: "10px 16px",
                      border: "4px solid #18181b",
                      borderRadius: 14,
                      background: scene.accessoryBackground,
                      fontSize: 26,
                      fontWeight: 900,
                      transform: scene.accessoryRotation,
                    }}
                  >
                    {scene.accessory}
                  </div>
                ) : null}
              </div>
              <div style={{ position: "absolute", bottom: 46, width: 220, height: 18, borderRadius: 999, background: "rgba(24,24,27,0.16)" }} />
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
                  <div style={{ color: "#f43f5e", display: "flex", fontSize: 28, fontWeight: 900 }}>
                    SajuZZal #{String(resultId).padStart(3, "0")}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      border: "5px solid #18181b",
                      borderRadius: 16,
                      background: "#bae6fd",
                      padding: "10px 18px",
                      fontSize: 32,
                      fontWeight: 900,
                    }}
                  >
                    {gapja}
                  </div>
                </div>
                <div style={{ marginTop: 8, color: "#0f766e", display: "flex", fontSize: 26, fontWeight: 900 }}>
                  {scene.label}
                </div>
                <div style={{ marginTop: 12, fontSize: 58, lineHeight: 1.08, fontWeight: 900 }}>
                  {result.title}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  minHeight: 110,
                  alignItems: "center",
                  border: "5px solid #18181b",
                  borderRadius: 24,
                  background: "#ffe4e6",
                  padding: "16px 24px",
                  fontSize: 32,
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
    accessoryBackground: string;
    accessoryRotation: string;
    background: string;
    leftArm: string;
    rightArm: string;
    hasTiredEyes: boolean;
    isSadMouth: boolean;
    isTiredMouth: boolean;
    isBed: boolean;
    isWeather: boolean;
    isCommute: boolean;
  }> = {
    "tiny-chaos": {
      label: "어쩌다 보니 잘됨",
      accessory: "?!",
      accessoryBackground: "#ffffff",
      accessoryRotation: "rotate(8deg)",
      background: "#d9f99d",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
      hasTiredEyes: false,
      isSadMouth: false,
      isTiredMouth: false,
      isBed: false,
      isWeather: false,
      isCommute: false,
    },
    "coffee-zombie": {
      label: "카페인 충전중",
      accessory: "COFFEE",
      accessoryBackground: "#ffffff",
      accessoryRotation: "rotate(0deg)",
      background: "#fde68a",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(-8deg)",
      hasTiredEyes: true,
      isSadMouth: false,
      isTiredMouth: true,
      isBed: false,
      isWeather: false,
      isCommute: false,
    },
    "meeting-nod": {
      label: "끄덕끄덕 모드",
      accessory: "OK",
      accessoryBackground: "#ffffff",
      accessoryRotation: "rotate(8deg)",
      background: "#bae6fd",
      leftArm: "rotate(18deg)",
      rightArm: "rotate(28deg)",
      hasTiredEyes: false,
      isSadMouth: false,
      isTiredMouth: false,
      isBed: false,
      isWeather: false,
      isCommute: false,
    },
    "wallet-cry": {
      label: "통장아 미안해",
      accessory: "0원",
      accessoryBackground: "#fde68a",
      accessoryRotation: "rotate(12deg)",
      background: "#fed7aa",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
      hasTiredEyes: false,
      isSadMouth: true,
      isTiredMouth: false,
      isBed: false,
      isWeather: false,
      isCommute: false,
    },
    "phone-wait": {
      label: "답장 대기중",
      accessory: "1",
      accessoryBackground: "#e0f2fe",
      accessoryRotation: "rotate(6deg)",
      background: "#bfdbfe",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(-8deg)",
      hasTiredEyes: false,
      isSadMouth: false,
      isTiredMouth: false,
      isBed: false,
      isWeather: false,
      isCommute: false,
    },
    "bed-gravity": {
      label: "이불 중력 2배",
      accessory: "Zzz",
      accessoryBackground: "#ffffff",
      accessoryRotation: "rotate(8deg)",
      background: "#dbeafe",
      leftArm: "rotate(8deg)",
      rightArm: "rotate(28deg)",
      hasTiredEyes: true,
      isSadMouth: false,
      isTiredMouth: true,
      isBed: true,
      isWeather: false,
      isCommute: false,
    },
    "snack-rescue": {
      label: "당 충전 필요",
      accessory: "SNACK",
      accessoryBackground: "#fecdd3",
      accessoryRotation: "rotate(12deg)",
      background: "#fecdd3",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
      hasTiredEyes: false,
      isSadMouth: false,
      isTiredMouth: false,
      isBed: false,
      isWeather: false,
      isCommute: false,
    },
    "weather-chaos": {
      label: "하늘이 예능함",
      accessory: "RAIN",
      accessoryBackground: "#ffffff",
      accessoryRotation: "rotate(8deg)",
      background: "#bae6fd",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
      hasTiredEyes: false,
      isSadMouth: false,
      isTiredMouth: false,
      isBed: false,
      isWeather: true,
      isCommute: false,
    },
    "shopping-urge": {
      label: "장바구니 회의",
      accessory: "CART",
      accessoryBackground: "#ffffff",
      accessoryRotation: "rotate(0deg)",
      background: "#fde68a",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(-24deg)",
      hasTiredEyes: false,
      isSadMouth: false,
      isTiredMouth: false,
      isBed: false,
      isWeather: false,
      isCommute: false,
    },
    "commute-luck": {
      label: "이동운 터짐",
      accessory: "▲",
      accessoryBackground: "#ffffff",
      accessoryRotation: "rotate(8deg)",
      background: "#bbf7d0",
      leftArm: "rotate(18deg)",
      rightArm: "rotate(28deg)",
      hasTiredEyes: false,
      isSadMouth: false,
      isTiredMouth: false,
      isBed: false,
      isWeather: false,
      isCommute: true,
    },
    "battery-low": {
      label: "12퍼 생존",
      accessory: "12%",
      accessoryBackground: "#ecfccb",
      accessoryRotation: "rotate(0deg)",
      background: "#d9f99d",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(28deg)",
      hasTiredEyes: false,
      isSadMouth: true,
      isTiredMouth: false,
      isBed: false,
      isWeather: false,
      isCommute: false,
    },
    "memo-genius": {
      label: "메모장 천재",
      accessory: "memo",
      accessoryBackground: "#ffffff",
      accessoryRotation: "rotate(6deg)",
      background: "#e9d5ff",
      leftArm: "rotate(-28deg)",
      rightArm: "rotate(-8deg)",
      hasTiredEyes: false,
      isSadMouth: false,
      isTiredMouth: false,
      isBed: false,
      isWeather: false,
      isCommute: false,
    },
  };

  return scenes[mood];
}
