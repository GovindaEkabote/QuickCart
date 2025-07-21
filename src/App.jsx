import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Help from "./Pages/OtherPage/Help.jsx";
import OrderTracking from "./Pages/OtherPage/OrderTracking.jsx";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing/index.jsx";
import Footer from "./components/Footer/index.jsx";
import ProductDetails from "./components/ProductDetails/index.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/help" exact={true} element={<Help />} />
        <Route path="/order-tracking" exact={true} element={<OrderTracking />} />
        <Route path="/productlisting" exact={true} element={<ProductListing />} />
        <Route path="/product/details/:id" exact={true} element={<ProductDetails />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
