import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Register = () => {
  return (
    <section className='register'>

      <Link className='register__logo' to='/' />
      <h2 className='register__description'>Добро пожаловать!</h2>

      <form className='form register__form'>

        <fieldset className='form__content form__content_type_register'>

          <label className='form__field'>
            <p className='form__label'>Имя</p>
            <input
              className='form__input'
              name='name'
              type='text'
              value='Виталий'
              // onChange={handleChangeUserEmail}
              placeholder='Имя'
              required
            />
            {/* <span className='form__input-error job-input-error'>Что-то пошло не так...</span> */}
          </label>

          <label className='form__field'>
            <p className='form__label'>E-mail</p>
            <input
              className='form__input'
              name='email'
              type='text'
              value='pochta@yandex.ru'
              // onChange={handleChangeUserEmail}
              placeholder='E-mail'
              required
            />
            {/* <span className='form__input-error job-input-error'>Что-то пошло не так...</span> */}
          </label>

          <label className='form__field'>
            <p className='form__label'>Пароль</p>
            <input
              className='form__input'
              name='password'
              type='password'
              value='qqqqqqqqqq'
              // onChange={handleChangePassword}
              placeholder='Пароль'
              required
            />
            <span className='form__input-error job-input-error'>Что-то пошло не так...</span>
          </label>

        </fieldset>

        <button type='submit' className='btn btn_type_register'>Зарегистрироваться</button>

      </form>

      <div className='register__signin'>
        <p className='register__login'>Уже зарегистрированы?</p>
        <Link className='link register__login-link' to='/signin'>Войти</Link>
      </div>

    </section>
  );
};

export default Register;
