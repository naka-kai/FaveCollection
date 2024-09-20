import { useEffect } from "react";
import "./App.css";
import RouteComponent from "./routes/Route";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://localhost:3003")
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <>
      <RouteComponent />
    </>
  );
}

export default App;
