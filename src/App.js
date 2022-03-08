import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const [cashi, setCashi] = useState()
  // console.log('cashi', cashi)

  const dispath = useDispatch()

  const cash = useSelector(state => state.cashReducer.cash)

  const addCach = (cashi) => {
    dispath({ type: 'ADD_CASH', payload: cashi })
  }
  const getCach = (cashi) => {
    dispath({ type: 'GET_CASH', payload: cashi })
  }


  return (
    <div className="App">
      <h1>{cash}</h1>
      <input type='number' value={cashi} onChange={(e) => setCashi(e.target.value)} />
      <button onClick={() => addCach(cashi)}>add</button>
      <button onClick={() => getCach(cashi)}>get</button>
    </div>
  );
}

export default App;
