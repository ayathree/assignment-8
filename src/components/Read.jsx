import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";


const Read = () => {

    const [reads, setReads]= useState([]);  

    console.log(reads)

    useEffect(()=>{
        const getDefaultRead = JSON.parse(localStorage.getItem('reads')) || [];
        setReads(getDefaultRead);

    },[])
    return (
        <div>
            {
                reads.map(read=><div key={read.id} className="card lg:card-side bg-base-100 border-2 mt-7 mb-7">
                <figure><img className="w-[300px] h-[300px] p-5" src={read.image} alt=''/></figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-2xl">{read.bookName}</h2>
                  <p className="font-semibold text-lg">By:{read.author}</p>
                  
    <div className="flex lg:flex-row flex-col items-center gap-5">
      <div><p className="font-semibold text-lg">Tags: </p></div>
    <div className="badge bg-[#59C6D2] p-2 text-white font-semibold ">{read.tags[0]}</div>
    <div className="badge bg-[#59C6D2] p-2 text-white font-semibold">{read.tags[1]}</div>
    <CiLocationOn />
    <div>Publishing Year: {read.yearOfPublishing}</div>
    </div>
    <div className="flex lg:flex-row flex-col items-center gap-5">
    <IoPeopleOutline />
    <div><p>Publisher: {read.publisher}</p></div>
    
    <MdOutlineFindInPage />
    <p>Page: {read.totalPages}</p>
    </div>
    <hr />
    <br />
                  <div className="card-actions  flex lg:flex-row flex-col item-center gap-6">
                    <div><button className="bg-blue-200 text-blue-600 rounded-2xl p-4">Category: {read.category}</button></div>
                   <div> <button className="bg-orange-100 text-orange-500 rounded-2xl p-4">Ratings: {read.rating}</button></div>
                  <div><Link to={`/card/${read.id}`}><button className="btn bg-[#23BE0A] text-white rounded-2xl p-4">View Details</button></Link></div>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default Read;