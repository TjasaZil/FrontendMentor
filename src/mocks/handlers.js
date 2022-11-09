//import { data } from "autoprefixer";
import { rest } from "msw";

let getAdvice = () => {
  rest.get("https://api.adviceslip.com/advice", (req, res, ctx) => {
    return res(
      ctx.status(200),
      // ctx.json({ id: data.slip.id }, { advice: data.slip.advice })
      ctx.json({
        id: 1,
        advice: "advice 1",
      })
    );
  });
};

export const handlers = [getAdvice()];
