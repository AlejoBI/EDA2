import { useEffect, useState } from "react";

import GifItem from "./GifItem";

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=jQ9NrakJIQLZDAQ1WdZOmvAZzNNKFeA3&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
    };
  });
  return gifs;
};

const GifGrid = ({ category }) => {
  const [gifsList, setGifsList] = useState([]);

  useEffect(() => {
    getGifs(category).then((res) => {
      setGifsList(res);
    });
  }, [category]);

  return (
    <>
      {
        gifsList.map((gif) => {
          return (
            <GifItem gif={gif} key={gif.id} />
          );
        })
      }
    </>
  );
};

export default GifGrid;