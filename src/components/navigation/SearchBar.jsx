import React from 'react'

const SearchBar = ({ query,setQuery }) => {
    return (
      <div className='text-left'>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" className="border-2 rounded-lg p-2 border-slate-200 mb-4" data-testid="search-text"/>
      </div>
     );
  };

export default SearchBar
