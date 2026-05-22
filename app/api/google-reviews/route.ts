import { NextResponse } from "next/server";

export async function GET() {

  const API_KEY = process.env.GOOGLE_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  try {

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    const data = await response.json();

    return NextResponse.json(data.result);

  } catch (error) {

    return NextResponse.json(
      {
        error: "Failed to fetch Google reviews",
      },
      {
        status: 500,
      }
    );

  }
}