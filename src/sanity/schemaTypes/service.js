const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "icon",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default service;
