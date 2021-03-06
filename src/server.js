import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");  // default: cwd() + /views
app.use(logger);
app.use(express.urlencoded({ extended: true }));  // express app이 form의 value를 이해할 수 있게 하고, JS object로 변형시켜 준다.

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);


const handleListening = () => console.log(`http://localhost:${PORT}`);

app.listen(PORT, handleListening);  // port num, listening 성공 시 실행할 callback function