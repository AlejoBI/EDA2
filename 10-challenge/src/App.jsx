import "./App.css";
import { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function App() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GiftExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category, index) => {
        return <GifGrid category={category} key={index} />;
      })}
    </>
  );
}

export default App;
