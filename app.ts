import express,{Request, Response, NextFunction} from "express";
import {config} from "dotenv";
config();
import session from "express-session";
import cros from "cors";
import cookieParser from "cookie-parser";
import router from "./router";

const app = express();
app.use(express.json());
const sessionMid = session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET!,
    cookie:{
        maxAge:1000*60*60*24*7,
        httpOnly:true,
        sameSite:"none",
        secure:true
    }
})
app.use(sessionMid);
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/api",[router])

app.use((req:Request, res:Response, next:NextFunction)=>{
    const error = new Error(`${req.method} ${req.url}는 존재하지 않습니다.`);
    next (error);
})

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.locals.message = err.message;
    res.status(500).send({err: err.message});
})

export = {app, sessionMid};

