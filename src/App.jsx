import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Help from "./Pages/Help";
import OrderTracking from "./Pages/OrderTracking.jsx";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/help" exact={true} element={<Help />} />
        <Route path="/order-tracking" exact={true} element={<OrderTracking />} />
      </Routes>
    </>
  );
}

export default App;
