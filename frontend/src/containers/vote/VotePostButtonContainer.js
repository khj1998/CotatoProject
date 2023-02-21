import React, { useEffect } from 'react';
import VotePostButton from "../../Components/common/VotePostButton";
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { votePost } from "../../modules/vote";

const VotePostButtonContainer = ({history}) => {
    const dispatch = useDispatch();

    const { title, content, post, postError } = useSelector(({ vote }) => ({
        title: vote.title,
        content: vote.content,
        post: vote.post,
        postError: vote.postError,
    }));
    //  컴포넌트에서 onClick 이벤트로 호출할 함수
    const onPublish = () => {
        dispatch(
            // 리덕스 스토어 안에 들어있는 값을 사용.
            votePost({
                title,
                content,
            }),
        );
    };

    const onCancel = () =>{
        // history 객체 사용으로 뒤로 가기
        history.goBack()
    };

    useEffect(()=>{
        // post 작성이 성공하면
        if(post){
            const {_id, user } = post;
            // _id, username 값을 참조해서 포스트를 읽을 수 있는 detail 경로를 만듬. 그리고 해당 경로로 이동
            history.push(`/@1/1`);
        }

        if(postError){
            console.log(postError)
        }
    },[history, post, postError]);

    return (
        <VotePostButton onPublish={onPublish} onCancel={onCancel} />

    );
};
// 라우트가 아닌 컴포넌트에서 history 객체를 사용하기 위해서 컴포넌트를 withRouter 로 감싸줌
export default withRouter(VotePostButtonContainer);