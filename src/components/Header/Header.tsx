import { FC } from 'react';

import './Header.scss';

const Header: FC = () => {
  return (
    <div className='header'>
      <h1 className='header__title'>Жилфонд</h1>
      <a className='header__personal'>Пользователь</a>
    </div>
  );
};

export default Header;
