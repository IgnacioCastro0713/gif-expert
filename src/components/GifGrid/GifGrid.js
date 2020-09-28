import React from 'react';
import PropTypes from 'prop-types';
import GifCard from "../GifCard";
import { useFetchGifs } from "../../hooks/useFetchGifs";

function GifGrid({ category }) {
  const { loading, images } = useFetchGifs(category);

  return (
    <>
      { loading &&
      <div className="flex justify-center">
        <div className="ellipsis"><div/><div/><div/><div/></div>
      </div>
      }
      <div className="images grid grid-cols-1 md:grid-cols-6 gap-8 mb-3">
        {
          images.map(image => <GifCard key={ image.id } image={ image }/>)
        }
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;