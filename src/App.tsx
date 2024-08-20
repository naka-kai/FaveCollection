import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import Dashboard from "./pages/Dashboard";
import WishList from "./pages/WishList";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
