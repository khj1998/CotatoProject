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
import axios from 'axios';

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
        await axios.post(`http://localhost:8080/boards/add`,postData,{
            withCredentials : true,
            headers : {"Content-Type" : "application/json"}
        }).then((res) => {
            if (res.data.message == "Board Add Success") {
                alert("글 등록이 완료되었습니다.");
                history.go(-1);
            } else if(res.data.message == "NOT ADMIN") {
                alert("공지사항은 관리자만 등록할 수 있습니다.");                
            } else {
                alert("알 수 없는 오류로 글 등록에 실패하였습니다.");
            }
        })
    }

    const [option, setOption] = useState('');
    const options = [
        { value: '공지사항', label: '공지사항' },
        { value: '프로젝트', label: '프로젝트' },
        { value: '스터디', label: '스터디' },
        { value: '번개', label: '번개' },
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
        history.go(-1);
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