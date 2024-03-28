import express from "express";
import cors from "cors";

const app = express();
app.use(cors);
app.listen(4000);

app.get("/kanbas/hello", (req, res) => {
  res.send("Hello from Seaqueue");
});
