import style from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const Layout = () => {
  return (
    <div className={style.BodyLayout}>
      <header><Navbar /></header>
        <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;