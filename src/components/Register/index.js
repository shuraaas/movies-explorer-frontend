import React from 'react';
import AuthForm from '../AuthForm';
import RegisterForm from '../RegisterForm';

const Register = () => {
  return (
    <AuthForm
      description='Добро пожаловать!'
      login='Уже зарегистрированы?'
      link='Войти'
      linkPath='/signin'
    >
      <RegisterForm />
    </AuthForm>
  );
};

export default Register;
