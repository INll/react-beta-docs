import { useReducer } from 'react';

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(count, action) {
    switch(action.type) {
      case 'increment': {
        return count + 1;
      }
      default:
        return count
    }
  }

  function changeCount(amount) {
    setCount(prevCount => prevCount + amount);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => resetCount()}>Reset</button>
    </>
  )
}