import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useAction } from '../hooks/useAction';

const UserList: React.FC = () =>  {
  const {users, error, loading} = useTypedSelector(state => state.user);
  const {fetchUsers} = useAction();

  useEffect(() => {
    fetchUsers();
  }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id}>{user.name}</div>
        )
      })}
    </div>
  );
}

export default UserList;