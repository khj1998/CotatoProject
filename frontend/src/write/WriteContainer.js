import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../modules/write';
import WriteForm from './WriteForm';

const WriteContainer = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(({ user }) => ({
        user: user.user,
    }));
    const { postType } = useSelector(({ write }) => ({
        postType: write.postType,
    }));

    const onDrop = (pictures, urls) => {
        dispatch(changeField({
            key: "images",
            value: pictures
        }));
    };

    const onChangeField = e => {
        const { value, name } = e.target;

        dispatch(changeField({
            key: name,
            value
        }));
    };
/*
    const onUpdate = (startDate, endDate) => {
        var start = splitString(startDate);
        var end = splitString(endDate);

        dispatch(changeField({
            key: "date",
            value: [start, end],
        }));
    };

*/
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

    useEffect(() => {
        if(user) {
            dispatch(changeField({
                key: "writer",
                value: user.nickname,
            }));
        }
    }, [dispatch, user]);

    useEffect(() => {
        if(user) {
            dispatch(changeField({
                key: "userId",
                value: user.userId
            }));
        }
    }, [dispatch, user]);

    function splitString(str) {
        var _arr = `${ str }`.split(' ');

        return _arr[0] + ' ' + _arr[1] + ' ' + _arr[2] + ' ' + _arr[3];
    }

    return (
        <WriteForm
            onChangeField={ onChangeField }
            onDrop={ onDrop }
            //onUpdate={ onUpdate }
            onSelect={ onSelect }
            options={ options }
            option={ option }
            postType={ postType }
        />
    );
};

export default WriteContainer;