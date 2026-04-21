const missionVisionSection = {
  name: "missionVisionSection",
  title: "Mission & Vision Section",
  type: "object",
  fields: [
    // MISSION
    {
      name: "mission",
      type: "object",
      fields: [
        {
          name: "icon",
          type: "string",
          description: "FontAwesome class e.g fa-bullseye",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "text",
          type: "text",
        },
      ],
    },

    // VISION
    {
      name: "vision",
      type: "object",
      fields: [
        {
          name: "icon",
          type: "string",
          description: "FontAwesome class e.g fa-eye",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "text",
          type: "text",
        },
      ],
    },
  ],
};

export default missionVisionSection;
