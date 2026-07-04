import { ImageResponse } from "next/og";
import { getResultById, TOTAL_RESULT_COUNT } from "@/data/results";
import { getGapja, normalizeResultId } from "@/lib/fortune";

export const alt = "사주짤 결과 카드";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type OpenGraphImageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return Array.from({ length: TOTAL_RESULT_COUNT }, (_, index) => ({
    id: String(index + 1),
  }));
}

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { id } = await params;
  const resultId = normalizeResultId(id);
  const result = getResultById(resultId);
  const gapja = getGapja((resultId - 1) % 60);

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
                background: "#d9f99d",
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
                  ㅇㅅㅇ
                </div>
                <div style={{ width: 8, height: 110, background: "#18181b" }} />
                <div style={{ display: "flex", gap: 24, marginTop: -82 }}>
                  <div style={{ width: 104, height: 8, background: "#18181b", transform: "rotate(-28deg)" }} />
                  <div style={{ width: 104, height: 8, background: "#18181b", transform: "rotate(28deg)" }} />
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
    size,
  );
}
