import React, { useRef } from 'react';
import './index.css';

const Preloader = () => {
  const preloaderSpin = useRef(null);
  const preloaderSpinOpen = false;

  const handleBtnClick = (e) => {
    if (!preloaderSpinOpen) {
      e.target.style.display = 'none';
      preloaderSpin.current.style.display = 'flex';
    }
  };

  return (
    <>
      <div className='preloader'>
        <button className='btn btn_type_preloader' type='button' onClick={handleBtnClick}>Ещё</button>
        <div className='preloader__spin' ref={preloaderSpin}>
          <span className='preloader__spin-round'></span>
        </div>
      </div>
    </>
  );
};

export default Preloader;
