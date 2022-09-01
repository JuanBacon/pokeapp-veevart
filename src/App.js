import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'

import pokemons from '../src/source/poke-json.json'
import { useState, useEffect } from 'react'
import Search from './components/Search/Search';

function App() {
  const [pokedata, setPokedata] = useState([])

  useEffect(() => {
    setPokedata(pokemons)
  }, [])

  return (
    <div className='container my-3'>
      <h1>Poke-App</h1>
      <p className="fw-lighter">por Juan Diego Bustamante</p>
      <Link className="btn btn-secondary" to="/">Home</Link>
      <Link className="btn btn-secondary mx-2" to="/search">Buscar</Link>
      <hr></hr>
      <Routes>
        <Route path='/' element={<Home pokelist={pokedata} />} />
        <Route path='/:pokemon' element={<Detail pokelist={pokedata} />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
