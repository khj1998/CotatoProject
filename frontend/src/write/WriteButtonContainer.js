import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { initialize, writePost } from '../modules/write';
import WriteButton from './WriteButton';

const WriteButtonContainer = ({ history, error, setError }) => {
    const dispatch = useDispatch();
    const {
        category,
        title,
        content,
        images,
        post,
        postError,
    } = useSelector(({ write }) => ({
        category: write.category,
        title: write.title,
        content: write.content,
        images: write.images,
        post: write.post,
        postError: write.postError,
    }));

    const onPublish = () => {
        if(title === '') {
            setError('제목을 입력해주세요');

            return;
        }
        if(content === '') {
            setError('내용을 적어주세요');

            return;
        }
        if(category === '' ) {
            setError('카테고리를 지정해주세요');

            return;
        }
        if(images === null) {
            setError('이미지를 넣어주세요');

            return;
        }
        if(postError) {
            setError('에러 발생!');
        console.log(postError);
            return;
        }
        dispatch(
        writePost({
            category,
            title,
            content,
            images,
        }),
        );
    };
    const onCancel = () => {
        dispatch(initialize());

        history.goBack();
    };

    useEffect(() => {
        if(post) {
            const {username} = post;
            history.push(`/posts`);
        }
    if(postError) { 
        console.log(postError);
    }
    }, [history, post, postError]);

    return (
        <WriteButton
            onPublish={ onPublish }
            onCancel={ onCancel }
        />
    );
};

export default withRouter(WriteButtonContainer);