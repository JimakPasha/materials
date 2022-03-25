import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

export default function ComponentForUseDebounce() {
  const [value, setValue] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  const handleChange = (e) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
