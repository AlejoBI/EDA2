import { useState } from "react";

const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const [categoryInUse, setCategoryInUse] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddCategory(inputValue);
    setCategoryInUse(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
      <h2>Category in use: {categoryInUse} </h2>
    </form>
  );
};

export default AddCategory;
