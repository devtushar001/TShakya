import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import SearchDisplay from './Pages/SearchDisplay/SearchDisplay';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [searchQuerry, setSearchQuerry] = useState('What-is-ai')

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`/search?q=${searchQuerry}`} element={<SearchDisplay />} />
      </Routes>
    </>
  )
}

export default App
