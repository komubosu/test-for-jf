import { Dispatch, FC, SetStateAction } from 'react';

import { UserType } from '../../types/user.type';

import './EmployeesCard.scss';

type EmployeesCardProps = {
  user: UserType;
  selectedUser: UserType | null;
  setSelectedUser: Dispatch<SetStateAction<UserType | null>>;
};

const EmployeesCard: FC<EmployeesCardProps> = ({
  user,
  selectedUser,
  setSelectedUser,
}) => {
  const selectUser = () => {
    setSelectedUser(user);
  };

  return (
    <li
      className={`employees-card ${
        user.id === selectedUser?.id ? 'employees-card_type_selected' : ''
      }`}
      onClick={selectUser}
    >
      <div className='employees-card__img'></div>
      <p className='employees-card__name'>{user.username}</p>
      <p className='employees-card__email'>{user.email}</p>
    </li>
  );
};

export default EmployeesCard;
