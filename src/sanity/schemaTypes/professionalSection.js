const professionalSectionSchema = {
  name: "professionalSection",
  title: "Professional Section",
  type: "object",
  fields: [
    {
      name: "eyebrow",
      title: "Top Label (Small Text)",
      type: "string",
    },
    {
      name: "title",
      title: "Main Title",
      type: "string",
    },
    {
      name: "description1",
      title: "Paragraph 1",
      type: "text",
    },
    {
      name: "description2",
      title: "Paragraph 2",
      type: "text",
    },

    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "highlightCard",
      title: "Overlay Card",
      type: "object",
      fields: [
        {
          name: "icon",
          title: "Icon (FontAwesome class)",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "text",
          title: "Text",
          type: "string",
        },
      ],
    },

    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value (e.g. 100%, 24/7)",
              type: "string",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    },
  ],
};

export default professionalSectionSchema 