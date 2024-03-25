import { NavLink } from "react-router-dom";



const Nav = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             <NavLink to={'/'}>Home</NavLink>
             <NavLink to={'/listBooks'}>Listed Books</NavLink>
             <NavLink to={'/pages'}>Pages to Read</NavLink>
             <NavLink to={'/categories'}>Categories</NavLink>
             <NavLink to={'/listCates'}>Listed Categories Book</NavLink>
            </ul>
          </div>
          <a className=" lg:text-2xl font-bold text-xl ">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal gap-5 ">
          <NavLink className={({isActive})=> isActive? 'text-[#23BE0A] btn btn-outline btn-xs ' :'font-bold'}  to={'/'}> <button className=" ">Home</button></NavLink>
             <NavLink className={({isActive})=> isActive? 'text-[#23BE0A] font-bold btn btn-outline btn-xs':'font-bold'} to={'/listBooks'}> <button className=" ">Listed Books</button> </NavLink>
             <NavLink className={({isActive})=> isActive? 'text-[#23BE0A] font-bold btn btn-outline btn-xs':'font-bold'} to={'/pages'}> <button className=" ">Pages to Read</button> </NavLink>
             <NavLink className={({isActive})=> isActive? 'text-[#23BE0A] font-bold btn btn-outline btn-xs':'font-bold'} to={'/categories'}> <button className="">Categories</button> </NavLink>
             <NavLink className={({isActive})=> isActive? 'text-[#23BE0A] font-bold btn btn-outline btn-xs':'font-bold'} to={'/listCates'}> <button className="">Listed Categories Book</button> </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex flex-row gap-2 items-center ">
          <a className="btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    );
};

export default Nav;