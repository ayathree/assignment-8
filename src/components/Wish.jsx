import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Wish = () => {
   
    const [wishs, setWishs]= useState([]);  

    console.log(wishs)

    useEffect(()=>{
        const getDefaultWish = JSON.parse(localStorage.getItem('wishs')) || [];
        setWishs(getDefaultWish);

    },[])


    return (
       <div>
        {
            wishs.map(wish=> <div key={wish.id}
            className="card lg:card-side bg-base-100 shadow-xl mt-7">
            <figure><img src={wish.image} alt="Movie"/></figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <Link to={`/card/${wish.id}`}> <button>Show</button> </Link>
              </div>
            </div>
          </div>)
        }
       </div>
    );
};

export default Wish;