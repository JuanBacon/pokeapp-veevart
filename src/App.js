import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'
function App() {
  return (
    <div className='container my-3'>
      <h1>Poke-App: Juan Bustamante</h1>
      <hr></hr>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:pokemon' element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
