import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header val={count}/>
    <button onClick={()=>setCount(count+1)}>inc</button>
    <button onClick={()=>setCount(count-1)}>dec</button>
    </>
  );
}

export default App;
