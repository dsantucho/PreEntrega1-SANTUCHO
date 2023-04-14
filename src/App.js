import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import NavBar from "./components/NavBar";
//import ItemListContainer from "./components/ItemListContainer";
//import CardList from "./components/CardList";
//import Spinner from "./components/Spinner";
// Ract router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import ForHer from "./pages/ForHer";
import ForHim from "./pages/ForHim";
import ItemDetail from "./pages/ItemDetail";
import ErrorPage from "./pages/ErrorPage";
import Others from "./pages/Others";
import Cart from "./pages/Cart";

//Contexts
import { ItemsProvider } from "./contexts/ItemsContext"; 

export const App = () => {
  return (
    <ItemsProvider>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/forHer" element={<ForHer/>}/>
          <Route path="/category/forHim" element={<ForHim/>}/>
          <Route path="/category/others" element={<Others/>}/>
          <Route path="/detail/:id" element={<ItemDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </ItemsProvider>
  );
};

export default App;
