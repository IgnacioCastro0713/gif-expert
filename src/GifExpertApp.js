import React, { useState } from 'react';
import {AddCategory, GifGrid} from "./components/";

function GifExpertApp() {

  const [categories, setCategories] = useState([]);

  return (
    <>
      <div className="flex justify-center p-16 pt-10">
        <div className="mt-2 w-128">
          <img src={ `${ process.env.PUBLIC_URL }/app-logo.png` } alt="Gif Expert logo"/>
          <AddCategory updateCategories={ setCategories }/>
        </div>
      </div>
      <div className="flex w-full mx-10">
        <ol>
          {
            categories.map(category => <GifGrid key={category} category={category}/>)
          }
        </ol>
      </div>
    </>
  );
}

//SoMXF2RPOmSnZhju04jYCMiM12k08RTb
export default GifExpertApp;
