import express from 'express';
import cors from 'cors';
import dayjs from "dayjs";
import helmet from "helmet";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

let users = [
    {
        id:1,
        name: "jinno",
        age:12,
    },
];

const app = express();

//미들웨어
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "700mb"}));

//Get Method
//유저 정보 가져오기
//query or Path
//성공 status : 200
app.get("/users",(req,res)=>{
    res.status(200).json({users});
}); 

//POST Method
//유저 생성
//요청 -> body
//성공 status : 201
app.post("/users",(req,res)=>{
    const{name,age} = req.body;
    users.push({
        id: new Date().getTime(),
        name,
        age,
    });
    res.status(201).json({users});
});

//PATCH Method
// 유저 수정
//성공 status : 204
//req.params.id
app.patch("/users/:id",(req,res)=>{
    const{id} = req.params;
    const{name,age} = req.body;


    console.log("param",req.params);
    const targetUserIdx = users.findIndex((user)=>user.id === Number(id));

    users[targetUserIdx] = {
        id:users(targetUserIdx).id,
        name : name ?? users[targetUserIdx].name,
        age : age ?? users[targetUserIdx].age,
    };

    res.status(204).json({});
});

//DELETE Method
//유저 삭제
//성공 status : 204
app.delete("/users/:id",(req,res)=>{
    const {id} = req.params;

    const deletedUsers = users.filter((user)=>user.id !== Number(id));
    users = deletedUsers;

    res.status(204).json({});
});

//req : 요청 -> Request
//res : 응답 -> Response
app.get("/", (req,res)=>{
    res.send("Node.js 강의 재밌어요!");
});


app.listen(8000,()=>{
    console.log("서버가 시작되었습니다.");
});