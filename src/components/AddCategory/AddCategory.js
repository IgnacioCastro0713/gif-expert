import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ updateCategories }) {

  const [inputValue, setInputValue] = useState("");

  const handleInputValue = e => setInputValue(e.target.value);

  const handleSubmitCategory = e => {
    e.preventDefault();
    updateCategories(preStateCategories => [inputValue, ...preStateCategories]);
    setInputValue("");
  };

  return (
    <form onSubmit={ handleSubmitCategory }>
      <input type="text"
             className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
             placeholder="Search a Gif!"
             value={ inputValue }
             onChange={ handleInputValue }
             required
      />
    </form>
  );
}

AddCategory.propTypes = {
  updateCategories: PropTypes.func.isRequired
};

export default AddCategory;
