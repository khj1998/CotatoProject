import React from 'react';
import AuthTemplate from "./auth/AuthTemplate";
import LoginForm from "../containers/auth/LoginForm";
const Login = () => {
   return (
      <AuthTemplate>
          <LoginForm />
      </AuthTemplate>
   );
};

export default Login;