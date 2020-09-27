import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function GifGrid({ category }) {

  useEffect(() => {
    (async () => {
      const url = "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=SoMXF2RPOmSnZhju04jYCMiM12k08RTb";
      const res = await fetch(url);
      const { data } = await res.json();

      const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }));

    })();

  }, [category]);


  return (
    <>
      <h3>{ category }</h3>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string
};

export default GifGrid;