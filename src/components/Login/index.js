import React from 'react';
import './index.css';

// TODO: Переписать классы иил вообще выделить отдельный общий компонент на регистрацию и логин

const Login = () => {
  return (
    <section className='login'>

      <div className='register__logo'></div>
      <h2 className='register__description'>Рады видеть!</h2>

      <form className='form register__form'>

        <fieldset className='form__content form__content_type_login'>

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
              value=''
              // onChange={handleChangePassword}
              required
            />
            {/* <span className='form__input-error job-input-error'>Что-то пошло не так...</span> */}
          </label>

        </fieldset>

        <button type='submit' className='btn btn_type_register'>Войти</button>

      </form>

      <div className='register__signin'>
        <p className='register__login'>Ещё не зарегистрированы?</p>
        {/* <Link to='/sign-in' className='auth__login-link'>Войти</Link> */}
        <a className='register__login-link' href='#'>Регистрация</a>
      </div>

    </section>
  );
};

export default Login;
