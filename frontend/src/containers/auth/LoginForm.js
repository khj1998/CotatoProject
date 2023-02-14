import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm} from "../../modules/auth";
import AuthForm from "../../Components/auth/AuthForm";
import axios from "axios";

const LoginForm = () => {
    const dispatch = useDispatch();
    let isLoginFailed = false;
    const {form} = useSelector(({auth}) => ({
        form: auth.login
    }));
    //인풋 변경 이벤트 핸들러
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    //폼 등록 이벤트 핸들러
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/users/login`,form,
        {
            withCredentials: true,
            headers : {"Content-Type" : "application/json"}
        }).catch((error) => {
            alert("아이디 혹은 비밀번호를 확인하세요!");
            isLoginFailed = true;
        })
        
        if (!isLoginFailed)
        {
            await axios.post(`http://localhost:8080/login/result`,form,
            {
                withCredentials: true,
                headers : {"Content-Type" : "application/json"}
            }).then((res) => {
                const result = res.data.message;
                if (result == "LOGIN SUCCESS") {
                    alert("로그인에 성공하였습니다! 메인 페이지로 이동합니다.");
                    window.open('http://localhost:3000/cotato','_self');
                }
            });
        }
    }

    //컴포넌트가 처음 렌더링될 떄 form을 초기화함
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <AuthForm
                    type="login"
                    form={form}
                    onChange={onChange}
                    onSubmit={onSubmit}
        />
    );
};

export default LoginForm;