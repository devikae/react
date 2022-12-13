import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "오현철",
        comment: "빨강 빨강"
    },
    {
        name: "조서준",
        comment: "파랑 파랑"
    },
    {
        name: "김지훈",
        comment: "ㄱㅇㅇ"
    },
    {
        name: "전영",
        comment: "씨진싼"
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    )
}

export default CommentList;