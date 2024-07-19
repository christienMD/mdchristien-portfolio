import { type SchemaTypeDefinition } from "sanity";
import pageInfo from "./schemas/pageInfo";
import skills from "./schemas/skills";
import socials from "./schemas/socials";
import projects from "./schemas/projects";
import experience from "./schemas/experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, socials, projects, experience, skills],
};
