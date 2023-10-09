import {Router} from "express";

//Router
class UserController{  //status 를 작성하는 부분이다 라고만 생각해둬도 ㄱㅊ
    router;
    users =[
        {
            id: 1,
            name: "jinno",
            age: 20,
        },
    ];
    constructor(){
        this.router = Router();
        this.init();
    }

    init(){
        this.route.get('/',this.getUsers.bind(this));
        this.router.get("/detail/:id", this.getUser.bind(this));
        this.router.post("/",this.createUser.bind(this));
    }

    getUsers(req,res){
        res.status(200).json({ users: this.users });
    }

    getUser(req,res){
        const {id} = req.params;
        const user = users.find((user) => user.id === Number(id));

        res.status(200).json({user});
    }
    createUser(req,res){
        const {name,age} = req.body;

        this.users.push({
            id: new Date().getTime(),
            name,
            age,
        });

        res.status(201).json({users: this.users});
    }
} 

const userController = new UserController();
export default userController;

