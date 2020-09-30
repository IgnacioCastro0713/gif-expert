import React, { useState } from 'react';
import { AddCategory, GifGrid } from "./components";

function GifExpertApp() {
  const [categories, setCategories] = useState(['Rick and Morty']);

  return (
    <>
      <div className="flex justify-center p-16 pt-10">
        <div className="mt-2 w-128">
          <img src={ `${window.location}/app-logo.png` } alt="Gif Expert logo"/>
          <AddCategory updateCategories={ setCategories }/>
        </div>
      </div>
      <div className="main-images mb-8 mx-5">
        <ol>
          {
            categories.map(category => <GifGrid key={category} category={category}/>)
          }
        </ol>
      </div>
    </>
  );
}

export default GifExpertApp;
