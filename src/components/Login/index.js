import React from 'react';
import AuthForm from '../AuthForm';
import LoginForm from '../LoginForm';

const Login = () => {
  return (
    <AuthForm
      description='Рады видеть!'
      login='Ещё не зарегистрированы?'
      link='Регистрация'
      linkPath='/signup'
    >
      <LoginForm />
    </AuthForm>
  );
};

export default Login;
