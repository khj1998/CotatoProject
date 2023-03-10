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
                alert("??? ????????? ?????????????????????.");
                history.go(-1);
            } else if(res.data.message == "NOT ADMIN") {
                alert("??????????????? ???????????? ????????? ??? ????????????.");                
            } else {
                alert("??? ??? ?????? ????????? ??? ????????? ?????????????????????.");
            }
        })
    }

    const [option, setOption] = useState('');
    const options = [
        { value: '????????????', label: '????????????' },
        { value: '????????????', label: '????????????' },
        { value: '?????????', label: '?????????' },
        { value: '??????', label: '??????' },
    ];

    const onPublish = async () => {
        if(postData.title == '') {
            setError('????????? ??????????????????');

            return;
        }

        if(postData.content == '') {
            setError('????????? ???????????????');

            return;
        }

        if(postData.category === '') {
            setError('??????????????? ??????????????????');

            return;
        }

        if(error != '') {
            setError('?????? ??????!');
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
                        placeholder="??????????????? ???????????????"
                    />
                    <TitleInput
                        autoComplete="title"
                        name="title"
                        placeholder="????????? ????????? ??????????????????"
                        onChange={(e) => {onInputChange(e)}}
                    />
                    <ContentInput
                        autoComplete="content"
                        name="content"
                        placeholder="????????? ????????? ??????????????????"
                        onChange={(e) => {onInputChange(e)}}
                    />
                    { error && <ErrorMessage>{ error }</ErrorMessage> }
            </WriteFormBlock>
            <WriteButtonBlock>
                <CustomFullButton onClick={ onPublish }>
                    ????????????
                </CustomFullButton>
                <CustomFullButton red onClick={ onCancel }>
                    ??????
                </CustomFullButton>
            </WriteButtonBlock>
        </>
    );
};

export default WriteForm;