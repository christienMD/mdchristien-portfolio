// File: app/api/getPageInfo/route.ts

import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { PageInfo } from "../../../typings";

const query = groq`
    *[_type == "pageInfo"][0]
 `;

export async function GET() {
  try {
    console.log("Fetching page info from Sanity...");
    const pageInfo: PageInfo = await sanityClient.fetch(query);

    if (!pageInfo) {
      console.warn("No page info found in Sanity dataset");
      return NextResponse.json(
        { error: "Page info not found" },
        { status: 404 }
      );
    }

    console.log("Fetched page info successfully");
    return NextResponse.json({ pageInfo });
  } catch (error) {
    console.error("Error fetching page info:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
