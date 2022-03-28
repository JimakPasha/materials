import { useState } from 'react';

function useInput2(initialValue, required) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  return {
    value,
    error,
    onChange: (e) => setValue(e.target.value),
    onBlur: (e) => {
      if (!e.target.value && required) setError('Required field');
      else setError(null);
    },
  };
}

export default useInput2;
