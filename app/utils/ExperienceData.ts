import { Experience } from "@/typings";

async function getExperiences() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,
    { next: { revalidate: 60 } } // Revalidate every 60 seconds
  );

  if (!res.ok) {
    throw new Error('Failed to fetch experiences');
  }

  const data = await res.json();
  return data.experiences as Experience[];
}

export default async function ExperienceData() {
  const experiences = await getExperiences();
  return { experiences };
}