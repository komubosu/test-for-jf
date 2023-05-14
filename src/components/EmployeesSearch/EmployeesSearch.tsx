import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import userApi from '../../api/usersApi';
import useDebounce from '../../hooks/useDebounce';
import { UserType } from '../../types/user.type';

import './EmployeesSearch.scss';

type EmployeesSearchProps = {
  setUsers: Dispatch<SetStateAction<UserType[]>>;
  setResultText: Dispatch<SetStateAction<string>>;
};

const EmployeesSearch: FC<EmployeesSearchProps> = ({
  setUsers,
  setResultText,
}) => {
  const [search, setSearch] = useState<string>('');

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    getUsersBySearch(debouncedSearch);
  }, [debouncedSearch]);

  async function getUsersBySearch(search: string) {
    setResultText('Поиск...');
    setUsers([]);

    if (!search.trim()) {
      setUsers([]);
      setResultText('начните поиск');
      return;
    }

    const searchArray = search
      .trim()
      .split(',')
      .map(s => s.trim());
    const ids = searchArray.filter(s => /\d/.test(s));
    const names = searchArray.filter(s => !/\d/.test(s));

    await userApi[ids.length ? 'getUserById' : 'getUserByName'](
      ids.length ? ids : names
    )
      .then(data =>
        data.length ? setUsers(data) : setResultText('ничего не найдено')
      )
      .catch(() => setResultText('произошла ошибка'));
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className='employees-search'>
      <label className='employees-search__label'>
        Поиск сотрудников
        <input
          className='employees-search__input'
          placeholder='Введите Id или имя'
          value={search}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default EmployeesSearch;
