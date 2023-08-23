import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
// //context
// import ProductContextProvider from "./context/ProductContextProvider";
// import CardContextProvider from "./context/CardContextProvider";
//components
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetail";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/Footer";
import ShopCard from "./components/ShopCard";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Store />} />
        <Route path="/card" element={<ShopCard />} />
        <Route path="/about-us" element={<Header />} />
        <Route path="/" element={<Navigate to={"/signUp"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
