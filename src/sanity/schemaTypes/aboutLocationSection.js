const aboutLocationSection = {
  name: "aboutLocationSection",
  title: "About + Locations Section",
  type: "object",
  fields: [
    // LEFT SIDE (ABOUT)
    {
      name: "tagline",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },

    // STATS
    {
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string" },
            { name: "label", type: "string" },
          ],
        },
      ],
    },

    // CTA
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "buttonLink",
      type: "string",
    },

    // RIGHT SIDE (LOCATIONS)
    {
      name: "locationsTitle",
      type: "string",
    },

    {
      name: "locations",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            {
              name: "icon",
              type: "string",
              description: "FontAwesome class e.g fa-map-pin",
            },
          ],
        },
      ],
    },
  ],
};

export default aboutLocationSection;
