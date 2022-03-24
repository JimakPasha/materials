import { useRef, useState } from 'react';
import useScroll from '../hooks/useScroll';
import { Itodo } from '../interfaces/Itodo';

export default function List() {
  const [todos, setTodos] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const limit = 10;
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const intersected = useScroll(parentRef, childRef, () =>
    fetchTodos(page, limit)
  );

  function fetchTodos(page: number, limit: number) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        setTodos((prev: any) => [...prev, ...json]);
        setPage((prev) => prev + 1);
      });
  }

  return (
    <div className="todo" ref={parentRef}>
      {todos.map(({ id, title, completed }: Itodo) => (
        <div className="todo__item" key={id}>
          <h3>
            {id}. {title}
          </h3>
          <span>{completed ? 'ok' : 'todo'}</span>
        </div>
      ))}
      <div className="todo__scroll" ref={childRef} />
    </div>
  );
}
