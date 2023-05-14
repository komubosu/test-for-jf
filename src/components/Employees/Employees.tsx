import { FC, useEffect, useState } from 'react';

import { UserType } from '../../types/user.type';

import { EmployeeProfile, EmployeesCards, EmployeesSearch } from '..';

import './Employees.scss';

const Employees: FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [resultText, setResultText] = useState<string>('начните поиск');

  useEffect(() => {
    setSelectedUser(null);
  }, [users]);

  return (
    <main className='employees'>
      <EmployeesSearch setUsers={setUsers} setResultText={setResultText} />
      <EmployeesCards
        users={users}
        resultText={resultText}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <EmployeeProfile selectedUser={selectedUser} />
    </main>
  );
};

export default Employees;
