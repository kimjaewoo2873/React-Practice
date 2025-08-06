import React from "react";
import Comment from "./Comment";
function CommentList(props) {
    return (
        <div>
            <Comment name={"김재우"} comment={
                "반가워요, 김재우입니다!:)"} />
            <Comment name={"쿄주로"} comment={
                "안녕하세요, 렌코쿠 쿄주로입니다?!!@@@@"} />
            <Comment name={"나루토"} comment={
                "안녕, 나루토야!!!"} />
        </div>
    );
}

export default CommentList;
