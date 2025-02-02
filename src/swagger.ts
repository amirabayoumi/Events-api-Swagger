import swaggerJsdoc from "swagger-jsdoc";
import { isProduction } from "./helper";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Evenementen API",
            version: "1.0.0",
            description: "API voor Evenementen",
        },
        servers: [
            {
                url: isProduction ? "https://evenementen-api.onrender.com/api/v1" : "http://localhost:3000/api/v1",
            },
        ],
        components: {
            schemas: { // ✅ Fixed key from 'schema' to 'schemas'
                Event: {
                    type: "object",
                    properties: {
                        name: { type: "string" },
                        date: { type: "string", format: "date-time" },
                        location: { type: "string" },
                        description: { type: "string" },
                        isFree: { type: "boolean" },
                    },
                },
                Error: {
                    type: "object",
                    properties: {
                        message: { type: "string" },
                    },
                },
            },
        },
        tags: [
            {
                name: "Events",
                description: "Events API",
            },
        ],
    },
    apis: ["**/*.ts"], // Path to the API routes
};

export const specs = swaggerJsdoc(options);
