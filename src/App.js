import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  addCustomerAction,
  removeCustomerAction
} from './store/customerReducer'


function App() {
  const [cashi, setCashi] = useState()
  // console.log('cashi', cashi)

  const dispath = useDispatch()

  const cash = useSelector(state => state.cashReducer.cash)
  const customers = useSelector(state => state.custom.custom)

  const addCach = (cashi = 0) => {
    dispath({ type: 'ADD_CASH', payload: cashi })
  }
  const getCach = (cashi = 0) => {
    dispath({ type: 'GET_CASH', payload: cashi })
  }


  const addCustomer = (name) => {
    dispath(addCustomerAction({ name, id: Date.now() }))
  }
  const removeCustomer = (id) => {
    dispath(removeCustomerAction(id))
  }


  return (
    <div className="App">
      <h1>{cash}</h1>
      <input type='number' value={cashi} onChange={(e) => setCashi(e.target.value)} />
      <button onClick={() => addCach(cashi)}>add</button>
      <button onClick={() => getCach(cashi)}>get</button>
      <button onClick={() => addCustomer(prompt())}>add customer</button>
      {customers.length > 0 ? <div>
        {customers.map(cust => {
          return <div onClick={() => removeCustomer(cust.id)} key={cust.id}>{cust.name}</div>
        })}
      </div> : 'client zero'}
    </div>
  );
}

export default App;
