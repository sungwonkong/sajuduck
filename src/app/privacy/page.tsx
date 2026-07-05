import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "사주짤은 생년월일, 태어난 시간, 성별 입력값을 서버 DB에 저장하지 않습니다.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fffbeb] px-5 py-8">
      <article className="mx-auto max-w-3xl rounded-[24px] border-[3px] border-zinc-950 bg-white p-6 shadow-[8px_8px_0_#111]">
        <Link href="/" className="text-sm font-black text-rose-500">처음으로</Link>
        <h1 className="mt-4 text-3xl font-black text-zinc-950">개인정보 처리방침</h1>
        <div className="mt-5 space-y-4 text-sm font-bold leading-7 text-zinc-700">
          <p>
            사주짤(SajuZZal)은 오락용 운세 밈 서비스를 제공합니다. 사용자가 입력한 생년월일, 태어난 시간, 성별은 결과 ID를 계산하는 데 사용되며 서버 DB에 저장하지 않습니다.
          </p>
          <p>
            반복 입력을 줄이기 위해 마지막 입력값은 사용자의 브라우저 localStorage에만 저장될 수 있습니다. 이 값은 사이트 데이터 또는 브라우저 데이터를 삭제하면 함께 삭제됩니다.
          </p>
          <p>
            광고가 활성화된 경우 Google AdSense 등 제3자 광고 서비스가 쿠키 또는 유사 기술을 사용할 수 있습니다. 광고 개인화 설정은 Google 광고 설정에서 관리할 수 있습니다.
          </p>
          <p>
            서비스 개선을 위해 배포 플랫폼 또는 분석 도구가 비식별 접속 정보를 처리할 수 있습니다. 민감한 개인정보 입력을 요구하지 않으며, 실제 상담이나 전문 조언을 제공하지 않습니다.
          </p>
        </div>
      </article>
    </main>
  );
}
