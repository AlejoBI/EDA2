import { useEffect, useState } from "react";

import GifItem from "./GifItem";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  const [gifsList, setGifsList] = useState([]);

  const getImages = async () => {
    const gifsList = await getGifs(category);
    setGifsList(gifsList);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {gifsList.map((gif, key) => {
        return <GifItem key={key} {...gif} />;
      })}
    </>
  );
};

export default GifGrid;
