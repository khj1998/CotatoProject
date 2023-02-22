import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Responsive from "../Components/common/Responsive";
import styled from "styled-components";
import palette from "../lib/styles/palette";
import ImageUploader from 'react-images-upload'
import Select from 'react-select';
import 'react-google-flight-datepicker/dist/main.css';
import FullButton from "../Components/common/FullButton";
import { changeField,writePost } from '../modules/write';


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

const WriteForm = () => {
    const [error, setError] = useState('');

    const [postData,setPostData] = useState({
        "category" : "",
        "title" : "",
        "content" : ""
    });

    const dispatch = useDispatch();

    const onInputChange = (e) => {
        setPostData({...postData,[e.target.name]:e.target.value});
    }

    const onSelect = (value) => {
        dispatch(changeField({
            key: "category",
            value: value.value
        }))

        setOption(value);
        postData.category = value.value;
    };

    const postSubmit = async () => {
        console.log(postData.title,postData.content,postData.category);
    }

    const [option, setOption] = useState('');
    const options = [
        { value: '공지사항', label: '공지사항' },
        { value: '세미나', label: '세미나' },
        { value: '스터디', label: '스터디' },
        { value: '해커톤', label: '해커톤' },
        { value: '친목', label: '친목' },
        { value: '소개', label: '소개' },
    ];

    const onPublish = async () => {
        if(postData.title == '') {
            setError('제목을 입력해주세요');

            return;
        }

        if(postData.content == '') {
            setError('내용을 적어주세요');

            return;
        }

        if(postData.category === '') {
            setError('카테고리를 지정해주세요');

            return;
        }

        if(error != '') {
            setError('에러 발생!');
            setError('');
            return;
        }

        await postSubmit();
    };

    const onCancel = () => {
        dispatch(initialize());

        history.goBack();
    };

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
                        onChange={(e) => {onInputChange(e)}}
                    />
                    <ContentInput
                        autoComplete="content"
                        name="content"
                        placeholder="게시글 내용을 작성해주세요"
                        onChange={(e) => {onInputChange(e)}}
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