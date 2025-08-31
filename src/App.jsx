import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Help from "./Pages/OtherPage/Help.jsx";
import OrderTracking from "./Pages/OtherPage/OrderTracking.jsx";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing/index.jsx";
import Footer from "./components/Footer/index.jsx";
import ProductDetails from "./Pages/ProductDetails/index.jsx";
import { createContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductZoom from "./components/ProductZoom/index.jsx";
import { IoMdClose } from "react-icons/io";
import ProductDetailsPage from "./components/ProductDetailsPage/index.jsx";
import Login from "./Pages/Login/index.jsx";
import SignUp from "./Pages/SignUp/index.jsx";

const MyContext = createContext();

function App() {
  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const[maxWidth, setMaxWidth] = useState("lg")
  const[fullWidth, setFullWidth] = useState(true)


  const handleCloseProductModel = () => {
    setOpenProductDetailsModel(false);
  };

  const value = {
    setOpenProductDetailsModel
  };
  return (
    <>
      <MyContext.Provider value={value}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/help" exact={true} element={<Help />} />
          <Route
            path="/order-tracking"
            exact={true}
            element={<OrderTracking />}
          />
          <Route
            path="/productlisting"
            exact={true}
            element={<ProductListing />}
          />
          <Route
            path="/product/details/:id"
            exact={true}
            element={<ProductDetails />}
          />
           <Route
            path="/login"
            exact={true}
            element={<Login />}
          />
          <Route
            path="/register"
            exact={true}
            element={<SignUp />}
          />
        </Routes>
        <Footer />
      </MyContext.Provider>
      <Dialog
        open={openProductDetailsModel}
        onClose={handleCloseProductModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModel"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModelContainer relative">
          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black !absolute !top-[15px] right-[15px] !bg-[rgba(0,0,0,0.1)]" onClick={handleCloseProductModel}><IoMdClose className="!font-[800] text-[20px] rounded-full "/></Button>
            <div className="col1 w-[40%] px-3 py-8">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] !py-3 px-8 !pr-10 productContent !mb-18">
              <ProductDetailsPage />
            </div>
          </div>
        </DialogContent>
       
      </Dialog>
    </>
  );
}

export default App;

export {MyContext}
