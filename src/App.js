import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Form from "./pages/form/form.component";
import "./App.css";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

function App() {
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
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
