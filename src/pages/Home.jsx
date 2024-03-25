import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const Home = () => {
    return (
        <div className="container mx-auto lg:px-16 py-8 px-2 ">
            <Nav></Nav>
            <Outlet></Outlet>
            

        </div>
    );
};

export default Home;