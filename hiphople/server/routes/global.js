import express from "express";

const router=express.Router();

router.get("/", (req, res)=>{
    res.send("국외 게시판");
})

export default router;