import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm} from "../../modules/auth";
import AuthForm from "../../Components/auth/AuthForm";
import axios from "axios";

const LoginForm = () => {
    const dispatch = useDispatch();
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
        }).then((res) => {
            const result = res.data.message;
            if (result == "LOGIN SUCCESS") {
                alert("로그인에 성공하였습니다! 로그인 창으로 이동합니다.");
                window.open('http://localhost:3000/cotato','_self');
            } else if (result == "NOT VALID") {
                alert("비밀번호를 확인해주세요!");
            } else if (result == "USER NOT FOUND") {
                alert("가입되지 않은 아이디입니다!");
            }
        })
    };

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