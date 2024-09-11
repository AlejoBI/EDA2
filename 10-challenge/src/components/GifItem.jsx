const GifItem = ({ gif }) => {
  return (
    <div>
      <img src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
};

export default GifItem;
