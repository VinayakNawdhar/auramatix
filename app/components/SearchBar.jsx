import React from 'react'

const SearchBar = () => {
  return (
    <div className='my-5 py-3 pl-5 rounded-xl bg-white flex mb-8'>
        <input type="text" placeholder='Search' className='w-[90%] focus:none outline-none ' />
        <button><i className="ri-search-line"></i></button>
    </div>
  )
}

export default SearchBar