import useInput from '../hooks/useInput';

export default function Input() {
  const username = useInput('');
  const password = useInput('');

  return (
    <div className='input-box'>
      <input {...username} />
      <input {...password} />
      <button onClick={() => console.log(username.value, password.value)}>
        Click
      </button>
    </div>
  );
}
