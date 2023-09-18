import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "./contact/Footer/Footer";

const Home = () => {
    return (
        <div>
           
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;