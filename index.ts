import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port = 3001;

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (req: Request, res: Response) => {
  console.log("getリクエストを受け付けました");
  return res.status(200).json({ message: "hello aloha" });
});

try {
  app.listen(port, () => console.log(`server running at://localhost:${port}`));
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
