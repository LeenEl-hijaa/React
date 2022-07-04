import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import { render } from '@testing-library/react';
import { Component } from 'react';
import ClassCounter from './components/classcounter';
import HookCounter from './components/classcounter';
import HookCounter2 from './components/hookcounter2';


class App extends Component{
  render(){
    return(
      <div>
        {/* <Greet/> */}
        {/* <ClassCounter/> */}
        <HookCounter/>
        <HookCounter2/>

      </div>
    )
  }
}

export default App;
