import { FC, Dispatch, SetStateAction } from 'react';

import './EmployeesCards.scss';
import { EmployeesCard } from '..';
import { UserType } from '../../types/user.type';

type EmployeesCardsProps = {
  users: UserType[];
  resultText: string;
  selectedUser: UserType | null;
  setSelectedUser: Dispatch<SetStateAction<UserType | null>>;
};

const EmployeesCards: FC<EmployeesCardsProps> = ({
  users,
  resultText,
  selectedUser,
  setSelectedUser,
}) => {
  return (
    <div className='employees-cards'>
      <p className='employees-cards__title'>Результат</p>
      <ul className='employees-cards__cards'>
        {users.length
          ? users.map(user => (
              <EmployeesCard
                key={user.id}
                user={user}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            ))
          : resultText}
      </ul>
    </div>
  );
};

export default EmployeesCards;
