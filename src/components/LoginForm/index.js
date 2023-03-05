import React, { useState, useEffect } from 'react';

// TODO: поле email должно соответствовать шаблону почты
// TODO: моментальную механику валидации и показ ошибок в интерфейсе.

const LoginForm = ({ onLogin }) => {

  useEffect(() => {
    setState({
      email: '',
      password: '',
    })
  }, []);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChangeUserEmail = (e) => {
    setState({
      ...state,
      email: e.target.value,
    })
  };

  const handleChangeUserPassword = (e) => {
    setState({
      ...state,
      password: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = state;

    // console.log(email, password);

    if (!email || !password) return;
    if (onLogin) onLogin(email, password);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form__content form__content_type_login'>

        <label className='form__field'>
          E-mail
          <input
            className='form__input'
            name='email'
            type='text'
            value={state.email}
            onChange={handleChangeUserEmail}
            placeholder='E-mail'
            required
          />
        </label>

        <label className='form__field'>
          Пароль
          <input
            className='form__input'
            name='password'
            type='password'
            value={state.password}
            onChange={handleChangeUserPassword}
            placeholder='Пароль'
            required
          />
        </label>

      </fieldset>
      <button type='submit' className='btn btn_type_auth'>Войти</button>
    </form>
  );
};

export default LoginForm;
