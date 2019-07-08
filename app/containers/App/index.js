/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';



import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    
        <div>
        <Header />
        <Footer />
        <GlobalStyle />
        </div>
   
  );
}
