import React from 'react';

const RegisterForm = () => {
  return (
    <form className='form'>
      <fieldset className='form__content form__content_type_register'>

        <label className='form__field'>
          Имя
          <input
            className='form__input'
            name='name'
            type='text'
            value='Виталий'
            placeholder='Имя'
            required
          />
        </label>

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
            value='qqqqqqqqqq'
            placeholder='Пароль'
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
