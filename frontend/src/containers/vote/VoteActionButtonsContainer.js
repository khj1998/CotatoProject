import React, { useEffect } from 'react';
import VotePostButton from "../../Components/common/VotePostButton";
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { votePost } from '../../modules/vote';

const VoteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, place } = useSelector(({ vote }) => ({
        title: vote.title,
        place: vote.place
    }));

    // 포스트 등록
    const onPublish = () => {
        dispatch(
            votePost({
                title,
                place,
            }),
        );
    };

    const onCancel = () => {
        history.goBack();
    };
    return <VotePostButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(VoteActionButtonsContainer);
