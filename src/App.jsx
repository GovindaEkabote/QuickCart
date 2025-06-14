import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Help from "./Pages/Help";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/help" exact={true} element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
