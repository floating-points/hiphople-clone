import express from "express";

const router=express.Router();

router.get("/", (req, res)=>{
    res.send("패션 게시판");
});

export default router;