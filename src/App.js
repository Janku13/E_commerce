import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Form from "./pages/form/form.component";
import "./App.css";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [isUser, setIsUser] = useState({
    currentUser: null,
  });

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setIsUser({
        currentUser: user,
      });
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <Header currentUser={isUser.currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
