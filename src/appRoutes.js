import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './comps/contact';
import Home from './comps/home';
import Layout from './comps/layout';
import PayPage from './comps/paypal/payPage';


function AppRoutes(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/paypal" element={<PayPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes