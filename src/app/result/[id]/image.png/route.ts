import { TOTAL_RESULT_COUNT } from "@/data/results";
import { normalizeResultId } from "@/lib/fortune";
import { createResultOgImage } from "@/lib/result-og-image";

type ResultImageRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return Array.from({ length: TOTAL_RESULT_COUNT }, (_, index) => ({
    id: String(index + 1),
  }));
}

export async function GET(_request: Request, { params }: ResultImageRouteContext) {
  const { id } = await params;
  const resultId = normalizeResultId(id);

  return createResultOgImage(resultId);
}
