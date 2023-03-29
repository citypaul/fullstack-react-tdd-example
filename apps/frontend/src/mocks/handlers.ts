import { rest } from "msw";

export const handlers = [
  rest.get("/example-endpoint", (req, res, ctx) => {
    return res(
      ctx.json({
        name: "Jeff",
        age: 25,
        description: "testing out mock service workerxxx!",
      }),
      ctx.status(200)
    );
  }),
];
