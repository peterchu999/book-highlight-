import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  console.log(event, context);
  console.log(event.multiValueHeaders);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: process.env.GREET }),
  };
};

export { handler };
