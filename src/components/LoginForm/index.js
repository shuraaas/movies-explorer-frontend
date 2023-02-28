import React from 'react';

const LoginForm = () => {
  return (
    <form className='form'>
      <fieldset className='form__content form__content_type_login'>

        <label className='form__field'>
          E-mail
          <input
            className='form__input'
            name='email'
            type='text'
            value='pochta@yandex.ru'
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
            value=''
            required
          />
        </label>

      </fieldset>
      <button type='submit' className='btn btn_type_auth'>Войти</button>
    </form>
  );
};

export default LoginForm;
