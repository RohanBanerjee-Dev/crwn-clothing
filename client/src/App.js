import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch])

  return (
    <div>
      <Header /> 
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route  path="/shop/*" element={ <ShopPage /> } />
        <Route exact path="/checkout" element={ <CheckoutPage /> } />
        <Route exact  path="/signin" element={ currentUser ? (<HomePage />) : (<SignInAndSignUpPage />)} />
      </Routes>
    </div>
  );
}

export default App;
 