import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ updateCategories }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = e => setInputValue(e.target.value);

  const handleSubmitCategory = e => {
    e.preventDefault();
    updateCategories(prevStateCategories => [inputValue, ...prevStateCategories]);
    setInputValue("");
  };

  return (
    <form onSubmit={ handleSubmitCategory }>
      <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
               viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </button>
      </span>
        <input type="search"
               className="py-2 text-sm text-white bg-gray-300 rounded-md pl-10 pr-2 w-full focus:outline-none focus:bg-white focus:text-gray-900"
               placeholder="Search..."
               value={ inputValue }
               onChange={ handleInputValue }
               required
               autoComplete="off"/>
      </div>
    </form>
  );
}

AddCategory.propTypes = {
  updateCategories: PropTypes.func.isRequired
};

export default AddCategory;
