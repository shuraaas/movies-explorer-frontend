import React from 'react';
import './index.css';

const Preloader = ({ onClick }) => {
  const handleBtnClick = () => onClick();

  return (
    <>
      <div className='preloader'>
        <button className='btn btn_type_preloader' type='button' onClick={handleBtnClick}>Ещё</button>
        <div className='preloader__spin'>
          <span className='preloader__spin-round'></span>
        </div>
      </div>
    </>
  );
};

export default Preloader;
