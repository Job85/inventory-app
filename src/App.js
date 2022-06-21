import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Items from './pages/Items';
import ItemForm from './pages/ItemForm';
import EditForm from './pages/EditItem';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import './App.css';
import { checkSession } from './services/Auth';

let BASE_URL = process.env.NODE_ENV === 'local' ? 'http://localhost:3001' : `https://server-inventory-app.herokuapp.com/`

function App() {

  let navigate = useNavigate()

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await checkSession();
    setUser(user);
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  // hook to populate new items in ItemForm.jsx
  let [newItem, setNewItem] = useState({
    location: '',
    category: '',
    item_name: '',
    description: '',
    unit_measure: '',
    case_size: '',
    count: '',
    vendor_name: '',
    vendor_code: ''
  })

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  // event handler passed as prop to submit new items in ItemForm.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post(`/api/item/create`, newItem)
    axios.post(`${BASE_URL}api/item/create`, newItem)
      .then(
        () => navigate('/items'))
  }

  const handleUpdate = (id) => {
    // let editItem = axios.get(`/api/item/${id}`)
    let editItem = axios.get(`${BASE_URL}api/item/${id}`)
    return editItem
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login
            setUser={setUser}
            toggleAuthenticated={toggleAuthenticated}
          />} />
          <Route path='/items' element={<Items
            handleUpdate={handleUpdate}
            user={user}
            authenticated={authenticated}
          />} />
          <Route path='/new' element={<ItemForm
            newItem={newItem}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            user={user}
            authenticated={authenticated}
          />} />
          <Route path='/item/:id' element={<EditForm
            user={user}
            authenticated={authenticated}
          />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
