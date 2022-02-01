import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Form from "./pages/form/form.component";
import "./App.css";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [isUser, setIsUser] = useState({
    currentUser: null,
  });

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setIsUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setIsUser({ currentUser: userAuth });
      }
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
