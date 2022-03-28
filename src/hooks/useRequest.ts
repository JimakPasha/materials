import { useState, useEffect } from 'react';
import { Itodo } from '../interfaces/Itodo';

function useRequest(request: any) {
  const [data, setData] = useState<null | Itodo>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      request()
        .then((response: any) => setData(response.data))
        .catch((error: string) => setError(error))
        .finally(() => setLoading(false));
    }, 3000)
  }, []);

  return [data, loading, error];
}

export default useRequest;
