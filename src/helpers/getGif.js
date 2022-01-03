export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=OvqMxZi7o80vs1LWqki1x4Vry357LEsF`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gif = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gif;
};
