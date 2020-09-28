export const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=SoMXF2RPOmSnZhju04jYCMiM12k08RTb`;
  const res = await fetch(url);
  const { data } = await res.json();
  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }));
};