import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Responsive from "../Components/common/Responsive";
import styled from "styled-components";
import palette from "../lib/styles/palette";
import ImageUploader from 'react-images-upload'
import Select from 'react-select';
import 'react-google-flight-datepicker/dist/main.css';
import FullButton from "../Components/common/FullButton";


const WriteFormBlock = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const PostTypeArea = styled.div`
    width: 200px;
    margin-top: 20px;
    margin-bottom: 2rem;
`;

const TitleInput = styled.input`
    width: 100%;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${ palette.blue[2] };
    margin-top: 1rem;
    margin-bottom: 2rem;
    outline: none;
`;

const ContentInput = styled.textarea`
    width: 100%;
    height: 400px;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${ palette.blue[2] };
    margin-top: 1rem;
    margin-bottom: 1rem;
    outline: none;
    resize: none;
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: c e n t e r;
    font-size: 14px;
    margin-top: 1rem;
`;

const WriteButtonBlock = styled.div`
    display: flex;
    justify-content: c e n t e r;
    align-items: c e n t e r;
    width: 600px;
    margin-bottom: 100px;
`;

const CustomFullButton = styled(FullButton)`
    margin-right: 25px;
    margin-left: 25px;
    width: 200px;
    &:hover {
        margin-right: 25px;
        margin-left: 25px;
        width: 200px;
        cursor: pointer;
    }
`;

const WriteForm = ({
    onChangeField,
    onSelect,
    options,
    option
}) => {
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const {
        userId,
        postType,
        category,
        rentalPrice,
        title,
        content,
        date,
        writer,
        images,
        post,
        postError,
    } = useSelector(({ write }) => ({
        userId: write.userId,
        postType: write.postType,
        category: write.category,
        rentalPrice: write.rentalPrice,
        title: write.title,
        content: write.content,
        date: write.date,
        writer: write.writer,
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

        if(category === '' && postType === '모집 게시물') {
            setError('카테고리를 지정해주세요');

            return;
        }

        if(rentalPrice === null && postType === '모집 게시물') {
            setError('가격을 입력해주세요');

            return;
        }

        if(category === '' && postType === '모집 게시물') {
            setError('카테고리를 지정해주세요');

            return;
        }

        if(date === null && postType === '모집 게시물') {
            setError('날짜를 정해주세요');

            return;
        }

        if(images === null && postType === '모집 게시물') {
            setError('이미지를 넣어주세요');

            return;
        }

        if(postError) {
            setError('에러 발생!');
            console.log(postError);
            return;
        }

        dispatch(writePost({
            userId,
            postType,
            category,
            rentalPrice,
            title,
            content,
            date,
            writer,
            images,
        }));
    };

    const onCancel = () => {
        dispatch(initialize());

        history.goBack();
    };

    useEffect(() => {
        if(post) {
            history.onPublish("/boards/add");
        }
    }, [history, post]);

    return(
        <>
            <WriteFormBlock>
                    <Select
                        onChange={ onSelect }
                        options={ options }
                        value={ option }
                        placeholder="카테고리를 정해주세요"
                    />
                    <TitleInput
                        autoComplete="title"
                        name="title"
                        placeholder="게시글 제목을 작성해주세요"
                        onChange={ onChangeField }
                    />
                    <ContentInput
                        autoComplete="content"
                        name="content"
                        placeholder="게시글 내용을 작성해주세요"
                        onChange={ onChangeField }
                    />
                    { error && <ErrorMessage>{ error }</ErrorMessage> }
            </WriteFormBlock>
            <WriteButtonBlock>
                <CustomFullButton onClick={ onPublish }>
                    등록하기
                </CustomFullButton>
                <CustomFullButton red onClick={ onCancel }>
                    취소
                </CustomFullButton>
            </WriteButtonBlock>
        </>
    );
};

export default WriteForm;