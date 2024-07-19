const projects = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      describe: "Title of the project",
      type: "string",
    },
    {
      name: "inmage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    },
    {
      name: "linkToBuild",
      title: "LinktoBuild",
      type: "url",
    },
  ],
};

export default projects;
