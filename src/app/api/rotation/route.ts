import { NextResponse } from "next/server";

// const RIOT_API_KEY = process.env.RIOT_API_KEY;

export async function GET() {
  try {
    const RIOT_API_KEY = process.env.RIOT_API_KEY;
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: { "X-Riot-Token": RIOT_API_KEY! },
      }
    );

    if (!response.ok) {
      throw new Error("Riot API 호출 실패");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Riot API 호출 중 오류:", error);
    return NextResponse.json(
      { error: "데이터를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}
