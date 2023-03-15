import React from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

class App extends React.Component{
  render(){
    return(
      <div>
          <NavBar />
          <ItemListContainer/>
      </div>
    );
  }
}

export default App;
