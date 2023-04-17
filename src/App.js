import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import NavBar from "./components/NavBar";

// Ract router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";

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
          <Route path="/category/:category" element={<Categories/>}/>
          <Route path="/detail/:id" element={<ItemDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </ItemsProvider>
  );
};

export default App;
