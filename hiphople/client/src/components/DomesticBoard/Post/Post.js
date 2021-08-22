import React, { useState } from "react";
import "./post.scss";

const Post = () => {
    const [comment, setComment] = useState("")
    // axios get
    // ...

    // const onCommentChange = (e) => {
    //     setComment(e.target.value)
    // }

    const commentSubmit = (e) => {
        e.preventDefault();
        if (comment === "") {
            alert("내용을 입력해주세요.")
            return;
        }
        // axios post
        setComment("")
    }

    return (
        <div className="post-container">
            <div className="post-category">음악</div>
            <div className="post-title">제목</div>
            <div className="post-element">
                <span>작성자</span>
                <span>시간</span>
                <span>조회수</span>
                <span>추천수</span>
                <span>댓글</span>
            </div>
            <div className="post-feature-container">
                <img src="*" alt="" />
            </div>
            <div className="post-small-container">
                <span>목록</span>
                <span>스크랩</span>
            </div>
            <div className="comments-container">
                <div className="comments-title">댓글 1</div>
                <div className="post-comment-container">
                    <div className="post-comment-small-container">
                        <div lassName="post-comment-user-container">
                            {/* <span className="comment-user-profile">
                                <img src="/" alt="" />
                            </span> */}
                            <span className="comment-user-username">작성자</span>
                            <span className="comment-user-update-time">5분 전</span>
                        </div>
                        <div className="comment-post-box">HI</div>
                        <div className="comment-thumbs-up-container">
                            <span>추천</span>
                            <span>댓글</span>
                        </div>
                    </div>
                </div>
                <div className="post-comments-container">
                    <div className="post-comment">댓글 달기</div>
                    <input
                        className="post-text-container"
                        placeholder="내용을 입력하세요."
                        type="text"
                        onChange={e => setComment(e.target.value)}
                    />
                    <button className="post-comment-button" onClick={e => commentSubmit(e)}>작성</button>
                </div>
            </div>
        </div>
    )
}

export default Post;

// onChange={(e) => setComment(e.target.value)}