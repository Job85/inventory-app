import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';
import './App.css';

function App() {

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
          <Route path='/items' element={<Items handleUpdate={handleUpdate} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
