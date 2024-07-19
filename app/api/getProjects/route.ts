// File: app/api/getProjects/route.ts

import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Project } from "../../../typings";

const query = groq`
  *[_type == "projects"] {
    ...,
    technologies[]->
  }
`;

export async function GET() {
  try {
    console.log("Fetching projects from Sanity...");
    const projects: Project[] = await sanityClient.fetch(query);
    console.log(`Fetched ${projects.length} projects`);

    if (projects.length === 0) {
      console.warn("No projects found in Sanity dataset");
    }

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
