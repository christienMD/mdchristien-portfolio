// File: app/api/getSkills/route.ts

import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Skill } from "../../../typings";

const query = groq`*[_type == "skills"]`;

export async function GET() {
  try {
    console.log("Fetching skills from Sanity...");
    const skills: Skill[] = await sanityClient.fetch(query);
    console.log(`Fetched ${skills.length} skills`);

    if (skills.length === 0) {
      console.warn("No skills found in Sanity dataset");
    }

    return NextResponse.json({ skills });
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
