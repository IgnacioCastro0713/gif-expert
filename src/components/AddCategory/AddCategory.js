import React, { useState } from 'react';

function AddCategory() {

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input type="text"
             className="bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
             placeholder="Search a Gif!"
             value={ inputValue }
             onChange={ e => setInputValue(e.target.value) }/>
    </>
  );
}

export default AddCategory;
