import { HandlerResponse } from "@netlify/functions";

export const response = (data: any, res?: HandlerResponse) => {
  return {
    statusCode: 200,
    ...res,
    body: JSON.stringify(data),
  };
};
