import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Vans from "./components/Vans"
import VanDetail from "./components/VanDetail"
import Login from "./components/Login"
import Dashboard from "./components/hosts/Dashboard"
import Income from "./components/hosts/Income"
import Reviews from "./components/hosts/Reviews"
import HostVans from "./components/hosts/HostVans"
import HostVanDetail from "./components/hosts/HostVanDetail"
import HostVanInfo from "./components/hosts/HostVanInfo"
import HostVanPricing from "./components/hosts/HostVanPricing"
import HostVanPhotos from "./components/hosts/HostVanPhotos"
import NotFound from "./components/NotFound"
import Layout from "./components/layouts/Layout"
import HostLayout from "./components/layouts/HostLayout"
import AuthRequired from "./components/layouts/AuthRequired"

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
