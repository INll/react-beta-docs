import { useMemo, useRef, useState } from 'react';

function App() {
  const [ list, setList ] = useState([]);
  const [ query, setQuery ] = useState('');
  const addNewItem = useRef(null);

  const filteredList = useMemo(() => {
    return list.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })}, [list, query]
  )
  
  function onSubmit(e) {
    e.preventDefault();
    const newItem = addNewItem.current.value;
    setList(prev => {
      return [...prev, newItem]
    });
    addNewItem.current.value = '';
    console.log(list);
    console.log(filteredList);
  }

  return (
    <>
    Search:
    <input
      onChange={(e) => setQuery(e.target.value)}
    />
    <br />
    <br />
    <form
      onSubmit={onSubmit}
    >
      New Item: 
      <input 
        type="text" 
        ref={addNewItem}
      />
      <button type="submit">Add</button>
    </form>

    <h3>Items:</h3>
    {
      filteredList.map(item => (
        <div>
          {item}
        </div>
      ))
    }
    </>
  );
}

export default App;