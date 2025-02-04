import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./../components/layout/Layout";
import Home from "./../pages/Home";
import Collection from "./../pages/Collection/Index";
import CShow from "./../pages/Collection/Show";
import Wishlist from "./../pages/Wishlist/Index";

function RouteComponent() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:id" element={<CShow />} />
            <Route path="/collection/create" element={<Collection />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default RouteComponent;
