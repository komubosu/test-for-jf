import { FC } from 'react';

import { UserType } from '../../types/user.type';

import './EmployeeProfile.scss';

const EmployeeProfile: FC<{
  selectedUser: UserType | null;
}> = ({ selectedUser }) => {
  return (
    <div className='employee-profile'>
      {selectedUser ? (
        <div className='employee-profile__wrapper'>
          <div className='employee-profile__img' />
          <p className='employee-profile__name'>{selectedUser.username}</p>
          <p className='employee-profile__email'>
            email:<span>{selectedUser.email}</span>
          </p>
          <p className='employee-profile__phone'>
            phone:<span>{selectedUser.phone}</span>
          </p>
          <p className='employee-profile__about'>
            О себе:
            <br />
            <br />
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              id architecto repellendus deleniti animi eaque numquam officiis
              labore aperiam, dolorum velit consequatur vitae illo nulla iure
              fugiat sit temporibus! Officiis!
            </span>
          </p>
        </div>
      ) : (
        <p className='employee-profile__text'>
          Выберите сотрудника, чтобы посмотреть его профиль
        </p>
      )}
    </div>
  );
};

export default EmployeeProfile;
