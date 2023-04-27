import React, { useContext } from 'react'
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import NavBar from "./components/NavBar";

// Ract router dom
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Login from "./pages/Login";

//Contexts
import { ItemsProvider } from "./contexts/ItemsContext"; 
import { AuthContext } from '../src/contexts/AuthContext';

export const App = () => {
  const {currentUser} = useContext(AuthContext);

  //si mi currentUser esta en FALSE [no login] vuelve al login; escondo mi web
  const RequireAuth = ({children})=>{
      return currentUser ? children : <Navigate to='/login'/>;
  }
  console.log(currentUser)
  return (
      <ItemsProvider>
        <Router>
          <div>
            <NavBar />
          </div>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<RequireAuth><Home/></RequireAuth>}/>

            <Route path="/category/:category" element={<RequireAuth><Categories/></RequireAuth>}/>
            <Route path="/detail/:id" element={<RequireAuth><ItemDetail/></RequireAuth>}/>
            <Route path="/cart" element={<RequireAuth><Cart/></RequireAuth>}/>
            <Route path="*" element={<RequireAuth><ErrorPage/></RequireAuth>}/>
          </Routes>
        </Router>
      </ItemsProvider>
  );
};

export default App;
