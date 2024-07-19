import { ComponentType } from "react";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  title: string;
  background: string;
}


export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: "string";
  jobTitle: "string";
  companyImage: Image | any | ComponentType;
  dateStarted: date;
  dateEnded: date;
  points: string[];
  isCurrentlyWorkingHere: boolean;
  technologies: Skill[];
}

export interface Project extends SanityBody {
  _type: "projects";
  title: "string";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}
