import { Outlet } from 'react-router'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <ToastContainer className="px-5 md:px-0" />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App
