import AuthTemplate from "./auth/AuthTemplate";
import RegisterForm from "../containers/auth/RegisterForm";
const Register = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default Register;