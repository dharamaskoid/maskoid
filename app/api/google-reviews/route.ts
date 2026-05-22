import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.GOOGLE_API_KEY;
  const PLACE_ID =
    process.env.GOOGLE_PLACE_ID ||
    "ChIJhctcyJDIXzkRuY5oJeQI-Hk";

  if (!API_KEY) {
    return NextResponse.json(
      { error: "Missing GOOGLE_API_KEY" },
      { status: 500 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    const data = await response.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        {
          error: data.error_message || "Google API error",
          status: data.status,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(data.result);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch Google reviews",
      },
      { status: 500 }
    );
  }
}