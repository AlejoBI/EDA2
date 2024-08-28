import './App.css'
import { useState } from 'react'

function App() {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')

  const addCategory = () => {
    setCategories([...categories, category])
    setCategory('')
  }

  const setCategoryValue = (e) => {
    setCategory(e.target.value)
  }

  return (
    <>
      <h1>
        Add Categories
      </h1>
      <input type="text" value={category} onChange={
        (e) => setCategoryValue(e)
      }/>
      <button onClick={
        () => addCategory()
      }>
        addCategorys
      </button>
      <ul>
        {
          categories.map((category, index) => {
            return <li key={index}>{category}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
