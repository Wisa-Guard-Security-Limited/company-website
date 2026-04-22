const servicesSectionSchema = {
  name: "servicesSection",
  title: "Services Section",
  type: "object",
  fields: [
    { name: "tagline", type: "string" },
    { name: "title", type: "string" },
    { name: "subtitle", type: "string" },

    { name: "buttonText", type: "string" },
    { name: "buttonLink", type: "string" },

    // ✅ REFERENCES
    {
      name: "services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    },

    {
      name: "featuredService",
      type: "reference",
      to: [{ type: "service" }],
    },
  ],
};

export default servicesSectionSchema;
