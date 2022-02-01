import React, {FC, useState, useEffect} from 'react';
import axios from 'axios';
import { IUser, ITodo } from './types/types';
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import List from './components/List';
import EventsExample from './components/EventsExample';

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  
  useEffect(() => {
    getUsers();
    getTodos();
  }, [])

  const getUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  const getTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20');
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <EventsExample />
      <Card width='200px' height='200px' variant={CardVariant.outline} onClick={(num: number) => alert(`число ${num}`)}>
        <button>кнопка без действий</button>
      </Card>
      <h3>Список юзеров</h3>
      <UserList users={users} />
      <h3>Список юзеров но с помощью универсального компонента</h3>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
      <h3>Список задач</h3>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
    </div>
  );
};

export default App;
