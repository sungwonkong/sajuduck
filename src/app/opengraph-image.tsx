import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = "사주짤 무료 사주 테스트";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          padding: 48,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "8px solid #18181b",
            borderRadius: 36,
            background: "#ffffff",
            padding: 54,
            gap: 50,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", width: 650 }}>
            <div style={{ color: "#f43f5e", display: "flex", fontSize: 34, fontWeight: 900 }}>
              {siteConfig.alternateName}
            </div>
            <div style={{ marginTop: 18, display: "flex", fontSize: 88, lineHeight: 0.98, fontWeight: 900 }}>
              사주짤
            </div>
            <div style={{ marginTop: 18, display: "flex", fontSize: 42, lineHeight: 1.25, fontWeight: 900 }}>
              무료 사주 테스트와 웃긴 운세 밈 카드
            </div>
            <div
              style={{
                marginTop: 34,
                display: "flex",
                border: "5px solid #18181b",
                borderRadius: 24,
                background: "#ffe4e6",
                padding: "20px 26px",
                fontSize: 32,
                lineHeight: 1.3,
                fontWeight: 900,
              }}
            >
              생년월일과 태어난 시간으로 오늘의 사주짤을 뽑아보세요
            </div>
          </div>
          <div
            style={{
              width: 330,
              height: 330,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              background: "#d9f99d",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 34,
                top: 48,
                border: "4px solid #18181b",
                borderRadius: 12,
                background: "#ffffff",
                padding: "10px 16px",
                fontSize: 26,
                fontWeight: 900,
                transform: "rotate(-15deg)",
              }}
            >
              오늘운
            </div>
            <div style={{ position: "relative", width: 210, height: 250, display: "flex" }}>
              <div style={{ position: "absolute", left: 55, top: 0, width: 100, height: 100, border: "7px solid #18181b", borderRadius: 999, background: "#ffffff" }} />
              <div style={{ position: "absolute", left: 82, top: 42, width: 16, height: 16, borderRadius: 999, background: "#18181b" }} />
              <div style={{ position: "absolute", right: 82, top: 42, width: 16, height: 16, borderRadius: 999, background: "#18181b" }} />
              <div style={{ position: "absolute", left: 76, top: 66, width: 58, height: 22, borderBottom: "7px solid #18181b", borderRadius: "999px 999px 0 0" }} />
              <div style={{ position: "absolute", left: 102, top: 100, width: 7, height: 94, background: "#18181b" }} />
              <div style={{ position: "absolute", left: 20, top: 128, width: 96, height: 7, background: "#18181b", transform: "rotate(-28deg)" }} />
              <div style={{ position: "absolute", right: 20, top: 128, width: 96, height: 7, background: "#18181b", transform: "rotate(28deg)" }} />
              <div style={{ position: "absolute", left: 58, top: 190, width: 92, height: 7, background: "#18181b", transform: "rotate(118deg)" }} />
              <div style={{ position: "absolute", right: 58, top: 190, width: 92, height: 7, background: "#18181b", transform: "rotate(62deg)" }} />
            </div>
            <div style={{ position: "absolute", bottom: 34, width: 220, height: 18, borderRadius: 999, background: "rgba(24,24,27,0.16)" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
