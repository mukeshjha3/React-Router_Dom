import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {

  return (
    <>
        <Header/>
        <Outlet></Outlet>
        <Footer/>
    </>
  );
}

export default App;
