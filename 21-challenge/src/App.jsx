import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage, deleteImage } from "./slices/imageSlice";

function App() {
  const [file, setFile] = useState(null);
  const { images, loading, error } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      dispatch(uploadImage(file));
      setFile(null);
    }
  };

  const handleDelete = (imageName) => {
    dispatch(deleteImage(imageName));
  };

  return (
    <div className="App">
      <h1>Upload and Delete Images</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload Image"}
      </button>
      {error && <p>Error: {error}</p>}

      <h2>Uploaded Images</h2>
      <ul>
        {images.map((image) => (
          <li key={image.name}>
            <img src={image.url} alt={image.name} width="100" />
            <button onClick={() => handleDelete(image.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
