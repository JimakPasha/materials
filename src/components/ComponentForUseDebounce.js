import axios from 'axios';
import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import useRequest from '../hooks/useRequest';

export default function ComponentForUseDebounce() {
  const [value, setValue] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const [todos, loading, error] = useRequest(search2);

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  function search2() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <ul>
        {loading && <div>LOADING...</div>}
        {error && <div>ERROR</div>}
        {todos &&
          todos.map(({ id, title }) => {
            return <li key={id}>{title}</li>;
          })}
      </ul>
    </div>
  );
}
