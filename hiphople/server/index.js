import express from "express";
import api from "./routes/api.js";
import path from "path";
import bodyParser from "body-parser";
import mysql from "mysql2/promise";
import session from "express-session";
import connection from "./mysql/mysql_connection.js";
import passport from "passport";
import passportConfig from "./passport/index.js";
import dotenv from "dotenv";
import flash from "connect-flash";
import {
    boardPostInsert,
    boardPostAll,
    boardPostFilteredByAuthor,
    boardCommentFilteredByPost,
    boardCommentInsert,
    boardCommentUpdate,
    userInfoInsert,
    userInfoFilteredByID
} from "./mysql/board_db.js";
import login from "./routes/login.js";
import cors from "cors";

const __dirname = path.resolve();
const PORT = 8000;

const app = express();

app.use(cors());
dotenv.config();

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.SESSION_SECRET
}));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passportConfig(passport);

app.use("/api", api);
//app.use("/login", login);
//app.use("/", express.static(__dirname+"/client/build"));


//postman 으로 쿼리 날리기 시험용 페이지들
app.post("/post-insert", async(req, res)=>{
    const {boardName, type, title, username, content}=req.body;
    try{
        await boardPostInsert(boardName, type, title, username, content);
        res.send("새로운 글 삽입 성공");
    }
    catch (err){
        res.send(err);
    }
});

app.post("/post-all", async (req, res) => {
    const {boardName} = req.body;
    try {
        const result = await boardPostAll(boardName);
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

app.post("/post-search", async (req, res) => {
    const {boardName, author} = req.body;
    try {
        const result = await boardPostFilteredByAuthor(boardName, author);
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

app.post("/comment-search", async (req, res) => {
    const {boardName, postID} = req.body;
    res.send(await boardCommentFilteredByPost(boardName, postID));
});

app.post("/comment-update", async (req, res) => {
    const {boardName, commentID, newContent} = req.body;
    res.send(await boardCommentUpdate(boardName, commentID, newContent));
});

app.post("/comment-insert", async (req, res) => {
    const {boardName, postID, writer, content} = req.body;
    //datetime for mysql
    res.send(await boardCommentInsert(boardName, postID, writer, content));
});

app.post("/user-insert", async (req, res) => {
    const {username, password} = req.body;
    console.log("test");
    console.log(username, password);
    try {
        const result = await userInfoInsert(username, password);
        res.send("유저 정보 삽입 성공");
    } catch (err) {
        res.send(err);
    }
});

app.post("/user-filter", async (req, res) => {
    const {username} = req.body;
    try {
        const result = await userInfoFilteredByID(username);
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

app.get("/", async (req, res) => {
    res.send("시작 페이지");
});

app.listen(PORT, () => {
    console.log("example app running on port", PORT);
    console.log(__dirname);
});