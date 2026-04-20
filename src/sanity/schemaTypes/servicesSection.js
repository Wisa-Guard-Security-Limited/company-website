const servicesSectionSchema = {
  name: "servicesSection",
  title: "Services Section",
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
    {
      name: "subtitle",
      type: "string",
    },

    // BUTTON
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "buttonLink",
      type: "string",
    },

    // SERVICES GRID
    {
      name: "services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "icon", type: "string" }, // fontawesome class
            { name: "link", type: "string" },
          ],
        },
      ],
    },

    // FEATURED SERVICE (BOTTOM BIG CARD)
    {
      name: "featuredService",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "description", type: "text" },
        { name: "buttonText", type: "string" },
        { name: "buttonLink", type: "string" },
        {
          name: "image",
          type: "image",
          options: { hotspot: true },
        },
        { name: "icon", type: "string" },
      ],
    },
  ],
};

export default servicesSectionSchema;
