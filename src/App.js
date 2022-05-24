import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';
import ItemForm from './pages/ItemForm';
import ItemDetails from './pages/ItemDetails';
import axios from 'axios';
import './App.css';

let BASE_URL = 'http://localhost:3001'
function App() {

  // hook to populate new items in ItemForm.jsx
  let [newItem, setNewItem] = useState({
    location: '',
    category: '',
    item: '',
    size: '',
    count: ''
  })

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  // event handler passed as prop to submit new items in ItemForm.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    let postItem = axios.post(`${BASE_URL}/items`, newItem)
    return postItem
  }

  const handleUpdate = (id) => {
    let editItem = axios.get(`${BASE_URL}/items/${id}`)
    return editItem
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Items handleUpdate={handleUpdate} />} /><Route path='/new' element={<ItemForm newItem={newItem} handleChange={handleChange} handleSubmit={handleSubmit} />} />
          <Route path='/new' element={<ItemForm newItem={newItem} handleChange={handleChange} handleSubmit={handleSubmit} />} />
          <Route path='/items/:id' element={<ItemDetails setNewItem={setNewItem} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
