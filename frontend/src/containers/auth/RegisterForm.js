import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm} from "../../modules/auth";
import AuthForm from "../../Components/auth/AuthForm";
import axios from "axios";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.register
    }));
    //인풋 변경 이벤트 핸들러
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    //폼 등록 이벤트 핸들러
    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/users/registration`,form,
        {
            withCredentials: true,
            headers : {"Content-Type" : "application/json"}
        }).then((res) => {
            const result = res.data.message;
            if (result == "REGISTRATION SUCCESS") {
                alert("회원가입에 성공하였습니다! 로그인 창으로 이동합니다.");
                window.open('http://localhost:3000/login','_blank');
            } else if (result == "DUPLICATED") {
                alert("이미 가입되어 있는 아이디입니다!");
            } else if (result == "NOT VALID") {
                alert("아이디/비밀번호를 확인해주세요!");
            }
        });
    };

    //컴포넌트가 처음 렌더링될 떄 form을 초기화함
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default RegisterForm;