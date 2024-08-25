import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Collection from "./pages/Collection/Index";
import Home from "./pages/Home";
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
            <Route path="/wishlist" element={<WishList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
