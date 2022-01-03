import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGif } from "../helpers/getGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   getGif(category).then((imgs) => setImages(imgs));
  // }, [category]);
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && "LOADING"}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
