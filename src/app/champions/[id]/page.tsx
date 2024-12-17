import { fetchChampionDetail } from "@/utils/serverApi";
import ChampionDetailComponent from "@/components/ChampionDetailClient";

type Props = {
  params: {
    id: string;
  };
};

export default async function ChampionPage({ params }: Props) {
  console.log("API call time:", new Date().toISOString());

  const data = await fetchChampionDetail(params.id);

  return <ChampionDetailComponent data={data} />;
}
