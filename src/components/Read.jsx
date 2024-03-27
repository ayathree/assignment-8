import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
                reads.map(read=><div key={read.id} className="card lg:card-side bg-base-100 shadow-xl mt-7">
                <figure><img src={read.image} alt="Movie"/></figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className="card-actions justify-end">
                    <Link to={`/card/${read.id}`}><button className="btn btn-primary">Show</button></Link>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default Read;