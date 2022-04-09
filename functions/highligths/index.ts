import { Handler } from "@netlify/functions";
import {
  getAllHighlights,
  getHighlightById,
  updateHighlight,
} from "./functions";

const handler: Handler = async (event, context) => {
  const { path, httpMethod, body } = event;
  const segments = path.split("/").filter((e) => e);
  console.log("highligth", segments);
  switch (httpMethod) {
    case "GET":
      switch (segments.length) {
        case 2:
          return await getAllHighlights();
        case 3:
          return await getHighlightById(segments[2]);
      }
    case "PUT":
      switch (segments.length) {
        case 3:
          return await updateHighlight(segments[2], body);
      }
  }
  return {
    statusCode: 404,
  };
};

export { handler };
