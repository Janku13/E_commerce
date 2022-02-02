import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Form from "./pages/form/form.component";
import { setCurrentUser } from "./redux/user/user.action";
import CheckoutPage from "./pages/checkout/checkout.component";
import "./App.css";

import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          return dispatch(setCurrentUser(snapshot));
        });
      } else {
        return dispatch(setCurrentUser(userAuth));
      }
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      {console.log("1", currentUser)}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/form" element={currentUser ? <HomePage /> : <Form />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      {console.log("2", currentUser)}
    </div>
  );
}

export default App;
