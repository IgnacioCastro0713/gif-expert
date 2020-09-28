import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = category => {
  const [state, setState] = useState({
    images: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then(images => setTimeout(() => setState({ images, loading: false }), 2000));
  }, [category]);

  return state;
};