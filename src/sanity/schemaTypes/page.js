const pageSchema = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        { type: "hero" },
        { type: "whyChooseUs" },
        { type: "companyOverviewSection" },
        { type: "missionVisionSection" },
        { type: "servicesSection" },
        { type: "aboutLocationSection" },
        { type: "ctaSection" },
      ],
    },
  ],
};

export default pageSchema;
