import Input from './components/Input';
import Hover from './components/Hover';
import List from './components/List';
import './App.css';
import ComponentForUseDebounce from './components/ComponentForUseDebounce';
import useTheme from './hooks/useTheme';
import BigBox from './components/BigBox';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Change theme on {theme === 'light' ? 'dark' : 'light'}</button>
      <Input />
      <div className='box'>
        {new Array(182).fill(0).map(() => <Hover />)}
      </div>
      <List/>
      <ComponentForUseDebounce />
      <BigBox />
    </div>
  );
}
