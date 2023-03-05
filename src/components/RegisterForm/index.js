import React, { useState, useEffect } from 'react';

// TODO: поле email должно соответствовать шаблону почты
// TODO: моментальную механику валидации и показ ошибок в интерфейсе.

const RegisterForm = ({ onRegister }) => {
  useEffect(() => {
    setState({
      name: '',
      email: '',
      password: '',
    })
  }, []);

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChangeUserName = (e) => {
    setState({
      ...state,
      name: e.target.value
    })
  };

  const handleChangeUserEmail = (e) => {
    setState({
      ...state,
      email: e.target.value
    })
  };

  const handleChangeUserPassword = (e) => {
    setState({
      ...state,
      password: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = state;

    // console.log(name, email, password);

    if (!name || !email || !password) return;
    // if (onLogin) onLogin(email, password);
    if (onRegister) onRegister(name, email, password);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form__content form__content_type_register'>

        <label className='form__field'>
          Имя
          <input
            className='form__input'
            name='name'
            type='text'
            value={state.name}
            placeholder='Имя'
            onChange={handleChangeUserName}
            required
          />
          {/* <span className='form__input-error job-input-error'>Что-то пошло не так...</span> */}
        </label>

        <label className='form__field'>
          E-mail
          <input
            className='form__input'
            name='email'
            // type='email'
            type='text'
            value={state.email}
            placeholder='E-mail'
            onChange={handleChangeUserEmail}
            required
          />
          {/* <span className='form__input-error job-input-error'>Что-то пошло не так...</span> */}
        </label>

        <label className='form__field'>
          Пароль
          <input
            className='form__input'
            name='password'
            type='password'
            value={state.password}
            placeholder='Пароль'
            onChange={handleChangeUserPassword}
            required
          />
          <span className='form__input-error job-input-error'>Что-то пошло не так...</span>
        </label>

      </fieldset>
      <button type='submit' className='btn btn_type_auth'>Зарегистрироваться</button>
    </form>
  );
};

export default RegisterForm;
