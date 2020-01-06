import * as Swagger from "swagger-schema-official"

export const string: Swagger.Schema[] = [
  {
    type: "string",
    description: "just type and description"
  },
  {
    type: "string",
    default: "default value",
    description: "type with default value"
  },
  {
    type: "string",
    format: "DateTime",
    description: "type and format"
  },
  {
    type: "string",
    default: "some default value",
    format: "DateTime",
    description: "type, format and default value"
  },
  {
    type: "string",
    enum: [],
    description: "type and defined empty enum"
  },
  {
    type: "string",
    enum: [true, "2", 3],
    description: "type and mixed enum"
  },
  {
    type: "string",
    enum: ["1", "2", "3"],
    description: "type and string enum"
  },
  {
    type: "string",
    format: "DateTime",
    enum: ["1", "2", "3"],
    description: "all fields set"
  },
  {
    type: "string",
    format: "DateTime",
    enum: ["1", "2", "3"],
    description: "additional fields used",
    items: [],
    minimum: 1,
    maximum: 10,
    uniqueItems: true
  }
]