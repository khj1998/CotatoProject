import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../modules/write';
import WriteForm from './WriteForm';

const WriteContainer = () => {
    const dispatch = useDispatch();

    const onChangeField = e => {
        const { value, name } = e.target;

        dispatch(changeField({
            key: name,
            value
        }));
    };

    const onSelect = (value) => {
        dispatch(changeField({
            key: "category",
            value: value.value
        }))

        setOption(value);
    };

    const [option, setOption] = useState('');
    const options = [
        { value: '공지사항', label: '공지사항' },
        { value: '세미나', label: '세미나' },
        { value: '스터디', label: '스터디' },
        { value: '해커톤', label: '해커톤' },
        { value: '친목', label: '친목' },
        { value: '소개', label: '소개' },
    ];

    return (
        <WriteForm
            onChangeField={ onChangeField }
            onSelect={ onSelect }
            options={ options }
            option={ option }
        />
    );
};

export default WriteContainer;