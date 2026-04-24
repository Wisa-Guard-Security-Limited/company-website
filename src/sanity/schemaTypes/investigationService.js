export const investigationServiceSchema = {
  name: "investigationSection",
  title: "Investigation Section",
  type: "document",
  fields: [
    {
      name: "eyebrow",
      title: "Small Title (Top Label)",
      type: "string",
    },
    {
      name: "title",
      title: "Main Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "investigationServices",
      title: "Investigation Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "icon",
              title: "FontAwesome Icon",
              type: "string",
            },
            {
              name: "content",
              title: "Content",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};