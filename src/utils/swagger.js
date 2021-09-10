import swaggerJsDoc from "swagger-jsdoc"

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "User API",
      description: "User API Information",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "John Doe",
      },
      servers: [
        { url: "http://localhost:3001", description: "Development Server" },
      ],
    },
    tags: [
      {
        name: "users",
        description: "Everything about your users",
        externalDocs: {
          description: "Find out more",
          url: "http://swagger.io",
        },
      },
    ],
  },
  apis: ["index.js", "src/utils/docs.js"],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
