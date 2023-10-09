import express,{Router} from 'express';
import cors from 'cors';
import dayjs from "dayjs";
import helmet from "helmet";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import UserController from "./users";

const app = express();

//미들웨어
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "700mb"}));

app.use("/users",UserController.router);


//req : 요청 -> Request
//res : 응답 -> Response
app.get("/", (req,res)=>{
    res.send("Node.js 강의 재밌어요!");
});


app.listen(8000,()=>{
    console.log("서버가 시작되었습니다.");
});