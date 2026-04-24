 const gallerySectionSchema = {
  name: "gallerySection",
  title: "Gallery Section",
  type: "document",
  fields: [
    {
      name: "eyebrow",
      title: "Small Title",
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
      name: "galleryItems",
      title: "Gallery Items",
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
              name: "category",
              title: "Category",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};

export default gallerySectionSchema