const API_URL = 'https://jsonplaceholder.typicode.com';

const userApi = {
  getUserById: (ids: string[]) => {
    const queryArray = ids.map(id => `id=${id}`);
    const query = queryArray.join('&');

    return fetch(`${API_URL}/users?${query}`).then(res => res.json());
  },
  getUserByName: (names: string[]) => {
    const queryArray = names.map(name => `username=${name}`);
    const query = queryArray.join('&');

    return fetch(`${API_URL}/users?${query}`).then(res => res.json());
  },
};

export default userApi;
