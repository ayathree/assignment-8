import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";


const Wish = () => {
   
    const [wishs, setWishs]= useState([]);  

    console.log(wishs)

    useEffect(()=>{
        const getDefaultWish = JSON.parse(localStorage.getItem('wishs')) || [];
        setWishs(getDefaultWish);

    },[])

    const handleWish= filter =>{
      if (filter === 'Ratings') {
        const ratingBooks = [...wishs].sort((a, b)=> b.rating - a.rating);
        setWishs(ratingBooks);
        
      }
      else if(filter ==='Publishing Year'){
        const descendingBook = [...wishs].sort((a, b)=> b.yearOfPublishing - a.yearOfPublishing);
        setWishs(descendingBook);
  
      }
  
    }


    return (
      <div>
        <div className=" flex flex-row justify-end mb-6">
          <div className="dropdown dropdown-left  mt-6 ">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white ">Sort By</div>
  <ul tabIndex={0} className="dropdown-content  menu p-2 shadow  rounded-box w-52">
    <li ><button onClick={()=>handleWish('Ratings')}>Ratings</button></li>
    <li  ><button onClick={()=>handleWish('Publishing Year')} >Publishing Year</button></li>
  </ul>
</div>
          </div>
        <div>
      {
          wishs.map(wish=><div key={wish.id} className="card lg:card-side bg-base-100 border-2 mt-7 mb-7">
          <figure><img className="w-[300px] h-[300px] p-5" src={wish.image} alt=''/></figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{wish.bookName}</h2>
            <p className="font-semibold text-lg">By:{wish.author}</p>
            
<div className="flex lg:flex-row flex-col items-center gap-5">
<div><p className="font-semibold text-lg">Tags: </p></div>
<div className="badge bg-[#59C6D2] p-2 text-white font-semibold ">{wish.tags[0]}</div>
<div className="badge bg-[#59C6D2] p-2 text-white font-semibold">{wish.tags[1]}</div>
<CiLocationOn />
<div>Publishing Year: {wish.yearOfPublishing}</div>
</div>
<div className="flex lg:flex-row flex-col items-center gap-5">
<IoPeopleOutline />
<div><p>Publisher: {wish.publisher}</p></div>

<MdOutlineFindInPage />
<p>Page: {wish.totalPages}</p>
</div>
<hr />
<br />
            <div className="card-actions  flex lg:flex-row flex-col item-center gap-6">
              <div><button className="bg-blue-200 text-blue-600 rounded-2xl p-4">Category: {wish.category}</button></div>
             <div> <button className="bg-orange-100 text-orange-500 rounded-2xl p-4">Ratings: {wish.rating}</button></div>
            <div><Link to={`/card/${wish.id}`}><button className="btn bg-[#23BE0A] text-white rounded-2xl p-4">View Details</button></Link></div>
            </div>
          </div>
        </div>)
      }
  </div>
      </div>
    );
};

export default Wish;