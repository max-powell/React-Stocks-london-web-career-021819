import React from 'react';

const SearchBar = ({setSort, setFilter}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <form>
        <input type="radio" value="Alphabetically" name='sort' checked={null} onChange={e=> setSort(e.target.value)}/>
        <label>
          Alphabetically
        </label>
        <input type="radio" value="Price" name='sort' checked={null} onChange={e=> setSort(e.target.value)}/>
        <label>
          Price
        </label>
      </form>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={e => setFilter(e.target.value)}>
          <option value=''>All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
