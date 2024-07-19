// File: app/api/getExperiences/route.ts

import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "../../../typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export async function GET() {
  try {
    console.log("Fetching experiences from Sanity...");
    const experiences: Experience[] = await sanityClient.fetch(query);
    console.log(`Fetched ${experiences.length} experiences`);

    if (experiences.length === 0) {
      console.warn("No experiences found in Sanity dataset");
    }

    return NextResponse.json({ experiences });
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
