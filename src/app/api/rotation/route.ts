import { NextResponse } from "next/server";

// const RIOT_API_KEY = process.env.RIOT_API_KEY;

export async function GET() {
  try {
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": "RGAPI-778341e6-c0a3-4350-accc-ee731a2c1244",
        },
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
