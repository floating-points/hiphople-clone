import express from "express";

const router=express.Router();

router.get("/", (req, res)=>{
    res.send("믹스타입 게시판");
});

export default router;