import React, { useEffect } from 'react';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () =>  {
  const {todos, error, loading, page, limit} = useTypedSelector(state => state.todo);
  const {fetchTodos, setTodoPage} = useAction();
  const pages = [1, 2, 3, 4, 5]; 

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo => {
        return (
          <div key={todo.id}>{todo.id} - {todo.title}</div>
        )
      })}
      {pages.map((p, index) => {
        return (
          <span key={index} style={{border: '1px solid #000', padding: '5px', background: p === page ? 'red' : 'grey', cursor: 'pointer'}} onClick={() => setTodoPage(p)}>{p}</span>
        )
      })}
    </div>
  );
}

export default TodoList;