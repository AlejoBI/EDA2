import "./App.css";
import { useState } from "react";

import { useFetch } from "./hooks/useFetch";

function App() {
  const [url, setUrl] = useState("");
  const [urlValue, setUrlValue] = useState("");

  const { data, loading, hasError } = useFetch(urlValue);

  const values = () => {
    setUrl("");
    setUrlValue(url);
    if (urlValue) {
      if (loading) return <p>Loading...</p>; 
      if (hasError) return <p>Error: {hasError.message}</p>;
    }
  };

  return (
    <>
      <h1>Enter a URL</h1>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={() => values()}>Fetch</button>
      <h4>URL: {urlValue ? urlValue : "Ninguna"}</h4>
      <p>
        {urlValue
          ? typeof data === "object"
            ? JSON.stringify(data, null, 2)
            : data
          : "No hay informacion para mostrar."}
      </p>
    </>
  );
}

export default App;
