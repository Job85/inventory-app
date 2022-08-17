import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
// import Profile from './pages/Profile';
import Items from './pages/Items';
import ItemForm from './pages/ItemForm';
import EditForm from './pages/EditItem';
import VendorForm from './pages/CreateVendor';
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
  console.log(process.env.NODE_ENV, 'Node Environment')
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

  // hook to populate new vendor in VendorForm.jsx
  let [newVendor, setNewVendor] = useState({
    vendor_name: '',
    vendor_phone: '',
    vendor_address:
    {
      street: '',
      street2: '',
      city: '',
      state: '',
      zip_code: ''
    }
  })

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  const handleVenChange = (e) => {
    setNewVendor({ ...newVendor, [e.target.name]: e.target.value })
  }
  // event handler passed as prop to submit new items in ItemForm.jsx
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post(`/api/item/create`, newItem)
    axios.post(`${BASE_URL}api/item/create`, newItem)
      .then(
        () => navigate('/items'))
  }

  const handleSubmitVen = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}api/vendor/create`, newVendor)
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
          {/* <Route
            path='/home/:user_id'
            element={<Profile user={user} authenticated={authenticated} />} /> */}
          <Route path='/items/' element={<Items
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
          <Route path='/vendor/new' element={<VendorForm
            newVendor={newVendor}
            handleChange={handleVenChange}
            handleSubmit={handleSubmitVen}
            user={user}
            authenticated={authenticated}
          />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
