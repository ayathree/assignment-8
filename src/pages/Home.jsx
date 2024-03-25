import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            

        </div>
    );
};

export default Home;