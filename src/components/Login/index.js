import React from 'react';
import AuthForm from '../AuthForm';
import LoginForm from '../LoginForm';

const Login = ({ onLogin }) => {
  return (
    <AuthForm
      description='Рады видеть!'
      login='Ещё не зарегистрированы?'
      link='Регистрация'
      linkPath='/signup'
    >
      <LoginForm onLogin={onLogin} />
    </AuthForm>
  );
};

export default Login;
