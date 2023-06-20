import React from "react";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import Lehengas from "../Pages/Lehengas";
import Suits from "../Pages/Suits";

import DescriptionPage from "../components/Description/DescriptionPage";
import Gowns from "../Pages/Gowns";
import Cart from "../Pages/Cart";
import WishList from "../Pages/WishList";
import Login from "../Pages/Login";
import Register from "../Pages/SignUp";
import Checkout from "../Pages/Checkout";
import Authentication from "../PrivateRoute/Authentication";
import MyAccount from "../Pages/MyAccount";
import AdminPage from "../Admin/AdminPage";
import NewHomePage from "../Pages/NewHomePage";
import HomeLook from "../Pages/Home/HomeLook";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLook />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/lehengas" element={<Lehengas />} />
        <Route path="/suits" element={<Suits />} />
        <Route path="/gowns" element={<Gowns />} />
        <Route path="/description/:id" element={<DescriptionPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/wishlist"
          element={
            <Authentication>
              <WishList />
            </Authentication>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<MyAccount />} />

        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout"
          element={
            <Authentication>
              <Checkout />
            </Authentication>
          }
        />
        <Route
          path="/admin"
          element={
            <Authentication>
              <AdminPage />
            </Authentication>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
