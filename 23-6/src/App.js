import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Contact from './components/contact'
import Home from './components/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
