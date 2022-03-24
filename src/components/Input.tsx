import useInput from '../hooks/useInput';

export default function Input() {
  const username = useInput('');
  const password = useInput('');

  return (
    <div className='input-box'>
      <input {...username} type="text" placeholder="Username" />
      <input {...password} type="text" placeholder="Password" />
      <button onClick={() => console.log(username.value, password.value)}>
        Click
      </button>
    </div>
  );
}
