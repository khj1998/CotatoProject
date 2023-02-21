import React, { useCallback, useEffect } from 'react';
import VoteCreateForm from "../../Components/common/VoteCreateForm";
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/vote';

const VoteCreateFormContainer = () => {
    const dispatch = useDispatch();
    const { title, content } = useSelector(({ vote }) => ({
        title: vote.title,
        content: vote.content,
    }));

//   useCallback ?? >> useEffect 에서 나중에 이 함수를 쓸 건데, useCallback 을 써야 에디터에서 사용할 때 컴포넌트가 화면에 나타났을 딱 그시점에 한번만 실행 되기 때문.
    const onChangeField = useCallback(
        (payload) => dispatch(changeField(payload)),
        [dispatch],
    );
//  다른 페이지를 갔다가 다시 이 페이지로 왔을 때는 내용 초기화.
    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);

    return (
        <VoteCreateForm onChangeField={onChangeField} title={title} content={content}/>
    );
};

export default VoteCreateFormContainer;