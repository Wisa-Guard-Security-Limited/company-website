const companyOverviewSection = {
  name: "companyOverviewSection",
  title: "Company Overview Section",
  type: "object",
  fields: [
    // HEADER
    {
      name: "tagline",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },

    // PARAGRAPHS (IMPORTANT: array, not single text)
    {
      name: "paragraphs",
      type: "array",
      of: [{ type: "text" }],
    },

    // HIGHLIGHTS (Certified / Award Winning)
    {
      name: "highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "string" },
            { name: "title", type: "string" },
            { name: "subtitle", type: "string" },
          ],
        },
      ],
    },

    // MAIN IMAGE
    {
      name: "image",
      type: "image",
      options: { hotspot: true },
    },

    // FLOATING BADGE
    {
      name: "badge",
      type: "object",
      fields: [
        { name: "icon", type: "string" },
        { name: "value", type: "string" },
        { name: "label", type: "string" },
      ],
    },
  ],
};

export default companyOverviewSection;
