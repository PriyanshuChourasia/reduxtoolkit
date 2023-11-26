import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { incremented, amountAdded, decrement } from './features/counter/counterSlice'


function App() {

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleAdd = ()=>{
    dispatch(amountAdded(3));
  }



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <h1> {count}</h1>
      <div className="card">
        <button onClick={handleAdd} >
          count is Addded by 3
        </button>
        <button  onClick={() => dispatch(incremented())} >
          Increment 
        </button>
        <button onClick={() => dispatch(decrement())} >
          Decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
