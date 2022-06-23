import logo from './logo.svg';
import './App.css';
import Map from'./components/map';
import Sort from'./components/sort';
import Filter from'./components/filter';


function App() {
  return (
    <div  className="container">
      <Sort/>
      <Map/>
      <Filter/>
    </div>
   
    );
}

export default App;
