export const getGifs = async (category) => {
  const apikey = "LOU1PtsD5hwcjiHTb67AhBqzoMI6K24N";
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=${limit}`;
  const response = await fetch(url);
  const {data} = await response.json();
  
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }) );

  console.log(gifs);
  
  return gifs;
}