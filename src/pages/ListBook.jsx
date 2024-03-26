import { useState } from "react";
import { Link, Outlet } from "react-router-dom";



const ListBook = () => {
   
    const [tabs, setTabs]=useState(0);
   

    
    return (
        <div>
           {/* banner */}
           <div className="hero  bg-base-200 mt-10">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-3xl font-bold">Listed Books</h1>
     
    </div>
  </div>
</div>
{/* dropdown */}
<div className="dropdown dropdown-right  mt-6 ">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white ">Sort By</div>
  <ul tabIndex={0} className="dropdown-content  menu p-2 shadow  rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
{/* tab */}
<div className="flex  items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-800 dark:text-gray-100 mt-10">
	<Link 
    to={''}
     onClick={()=>setTabs(0)}  className={`"flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs ===0 ? 'border border-b-0':' border-b'} rounded-t-lg border-gray-400 dark:text-gray-50"`}>
		
		<span>Read Books</span>
	</Link>
	<Link
     to={`wishlist`} 
     onClick={()=>setTabs(1)} className={`"flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs ===1 ? 'border border-b-0':' border-b'} rounded-t-lg border-gray-400 dark:text-gray-50"`}>
		
		<span>Wishlist Books</span>
	</Link>
	
</div>


<Outlet></Outlet>
        </div>
    );
};

export default ListBook;