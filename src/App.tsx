import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Collection from "./pages/Collection/Index";
import Show from "./pages/Collection/Show";
import WishList from "./pages/Wishlist/Index";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:id" element={<Show />} />
            <Route path="/wishlist" element={<WishList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
