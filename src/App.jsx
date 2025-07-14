import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Help from "./Pages/Help";
import OrderTracking from "./Pages/OrderTracking.jsx";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/help" exact={true} element={<Help />} />
        <Route path="/order-tracking" exact={true} element={<OrderTracking />} />
        <Route path="/productlisting" exact={true} element={<ProductListing />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
