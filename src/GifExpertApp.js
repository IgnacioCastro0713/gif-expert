import React from 'react';
import AddCategory from "./components/AddCategory";

function GifExpertApp() {
  return (
    <div className="flex justify-center p-16 pt-10">
      <div className="mt-2 w-128">
        <img src={ `${ process.env.PUBLIC_URL }/app-logo.png` } alt=""/>
        <AddCategory/>
      </div>
    </div>
  );
}

//SoMXF2RPOmSnZhju04jYCMiM12k08RTb
export default GifExpertApp;
