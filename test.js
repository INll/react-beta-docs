import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  function handleInput(e){
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar 
        onChange={handleInput}
        value={query}
      />
      <hr />
      <List 
        items={foods} 
        query={query}
      />
    </>
  );
}

function SearchBar({ onChange, value }) {
  return (
    <label>
      Search:{' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items, query }) {
  return (
    <table>
      <tbody>
        {
          filterItems(items, query).map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
