import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';
import ItemForm from './pages/ItemForm';
import EditForm from './pages/EditItem';
import axios from 'axios';
import './App.css';

// let BASE_URL = process.env.NODE_ENV === 'local' ? 'http://localhost:3001' : `https://restaurant-inventory-app.herokuapp.com`
function App() {

  let navigate = useNavigate()

  // hook to populate new items in ItemForm.jsx
  let [newItem, setNewItem] = useState({
    location: '',
    category: '',
    item_name: '',
    description: '',
    unit_measure: '',
    case_size: ''
  })

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  // event handler passed as prop to submit new items in ItemForm.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/item/create`, newItem)
      // axios.post(`${BASE_URL}/api/item/create`, newItem)
      .then(
        () => navigate('/items'))
  }

  const handleUpdate = (id) => {
    let editItem = axios.get(`/api/item/${id}`)
    // let editItem = axios.get(`${BASE_URL}/api/item/${id}`)
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
          <Route path='/item' element={<Items handleUpdate={handleUpdate} />} />
          <Route path='/new' element={<ItemForm newItem={newItem} handleChange={handleChange} handleSubmit={handleSubmit} />} />
          <Route path='/item/:id' element={<EditForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
