import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Form from './pages/form/form.component';
import { setCurrentUser } from './redux/user/user.action';
import CheckoutPage from './pages/checkout/checkout.component';
import './App.css';

import { auth } from './firebase/firebase.utils';
import {
  createUserProfileDocument,
  addCollectionAndDocument,
} from './firebase/firebase.utils';

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const directoryState = useSelector((state) => state.directory);
  const shopState = useSelector((state) => state.shop.collections);
  console.log('myState: ', shopState);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          return dispatch(setCurrentUser(snapshot));
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
      addCollectionAndDocument(
        'collection',
        shopState.map(({ title, items }) => ({ title, items }))
      );
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
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="/form" element={currentUser ? <HomePage /> : <Form />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
