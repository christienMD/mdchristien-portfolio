import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Social } from "../../../typings";

const query = groq`*[_type == "social"]`;

export async function GET() {
  try {
    console.log("Fetching socials from Sanity...");
    const socials: Social[] = await sanityClient.fetch(query);
    console.log(`Fetched ${socials.length} socials`);

    if (socials.length === 0) {
      console.warn("No socials found in Sanity dataset");
    }

    return NextResponse.json({ socials });
  } catch (error) {
    console.error("Error fetching socials:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// import type { NextApiResponse, NextApiRequest } from "next";
// import { groq } from "next-sanity";
// //  import { SanityClient } from "next-sanity";
// import { sanityClient } from "@/sanity";
// import { Social } from "../../../typings";

// const query = groq`
//    *[_type == "social"]
//  `;

// type Data = {
//   socials: Social[];
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const socials: Social[] = await sanityClient.fetch(query);

//   res.status(200).json({ socials });
// }
