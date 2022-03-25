import Input from './components/Input';
import Hover from './components/Hover';
import List from './components/List';
import './App.css';
import ComponentForUseDebounce from './components/ComponentForUseDebounce';

export default function App() {
  return (
    <div className='app'>
      <Input />
      <div className='box'>
        {new Array(182).fill(0).map(() => <Hover />)}
      </div>
      <List/>
      <ComponentForUseDebounce />
    </div>
  );
}
