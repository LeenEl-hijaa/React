import React from 'react';
import One from './components/One';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import ThemeContext from './components/ThemeContext';

class App extends React.Component {

  state = {
    theme: 'dark'
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark'
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={{
        'theme': this.state.theme,
        'toggleTheme': this.toggleTheme
      }}>
        <div style={{background: this.state.theme === 'dark' ? 'blue' : 'white'}}>
          <h1>Hi from App</h1>

          <One />
          
        </div>
      </ThemeContext.Provider>
    );  
  }
  
}

export default App;

