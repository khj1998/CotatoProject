import React, { useState } from "react";
import Responsive from "../Components/common/Responsive";
import styled from "styled-components";
import palette from "../lib/styles/palette";
import RadioForm from "./RadioForm";
import RadioItem from "./RadioItem";
import ImageUploader from 'react-images-upload'
import Select from 'react-select';
import Input from "../Components/common/Input";
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';
import WriteButtonContainer from "./WriteButtonContainer";


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

const WriteForm = ({
    onChangeField,
    onDrop,
    onUpdate,
    onSelect,
    options,
    option
}) => {
    const [error, setError] = useState('');
    console.log(error);
    return(
        <>
            <WriteFormBlock>
                        <form>
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
                            <ImageUploader
                                withIcon={ true }
                                buttonText='이미지를 선택해주세요'
                                onChange={ onDrop }
                                name="images"
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={ 5242880 }
                                withPreview={ true }
                            />
                        </form>
                        { error && <ErrorMessage>{ error }</ErrorMessage> }
                    </WriteFormBlock>
                    <WriteButtonContainer
                        error={ error }
                        setError={ setError }
                    />
        </>
    );
};

export default WriteForm;