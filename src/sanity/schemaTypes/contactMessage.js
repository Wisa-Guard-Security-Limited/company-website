const contactMessageschema = {
  name: "contactMessage",
  title: "Contact Messages",
  type: "document",
  fields: [
    { name: "name", type: "string" },
    { name: "phone", type: "string" },
    { name: "email", type: "string" },
    { name: "service", type: "string" },
    { name: "message", type: "text" },
    { name: "createdAt", type: "datetime" },
  ],
};

export default contactMessageschema