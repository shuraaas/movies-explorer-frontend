import React from 'react';
import './index.css';

const Profile = () => {
  return (
    <>
      {/* <Header /> */}
      <section className='profile'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='form form_type_edit' name='edit' method='post' action='/'>

          <fieldset className='form__content'>

            <label className='form__field'>
              <p className='form__label'>Имя</p>
              <input
                className='form__input form__input_type_name'
                name='name'
                id='name-input'
                type='text'
                placeholder='Имя'
                minlength='2'
                maxlength='40'
                value='Виталий'
                required
              />
              <span className='form__input-error name-input-error'></span>
            </label>

            <label className='form__field'>
              <p className='form__label'>E-mail</p>
              <input
                className='form__input form__input_type_email'
                name='email'
                id='email-input'
                type='text'
                placeholder='E-mail'
                value='pochta@yandex.ru'
                required
              />
              <span className='form__input-error email-input-error'></span>
            </label>

          </fieldset>

          <button className='btn btn_type_edit' type='submit'>Редактировать</button>
        </form>

        <button className='btn btn_type_logout' type='button'>Выйти из аккаунта</button>
      </section>
    </>
  );
};

export default Profile;
