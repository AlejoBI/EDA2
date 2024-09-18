const GifItem = ({ tittle, url }) => {
  return (
    <div className="card">
      <img src={url} alt={tittle} />
    </div>
  );
};

export default GifItem;
