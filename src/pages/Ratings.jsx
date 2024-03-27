import { useEffect, useState } from "react";
import RatingsOne from "../components/RatingsOne";
import RatingsTwo from "../components/RatingsTwo";


const Ratings = () => {
    const [rates, setRates] = useState([])
    useEffect(()=>{
      fetch('bookData.json')
      .then(res=>res.json())
      .then(data=>setRates(data))
    },[])
    return (
        <div>
            <h2 className="text-center font-extrabold text-3xl mb-9 mt-9">High Ratings</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-7">
            {
            rates.map(rate =><RatingsOne key={rate.id}
            rate={rate}></RatingsOne>)
           }
        </div>
        <h2 className="text-center font-extrabold text-3xl mb-9 mt-9">Good Ratings</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-7">
            {
                rates.map(rate=><RatingsTwo key={rate.id}
                rate={rate}></RatingsTwo>)
            }
        </div>
       
        </div>
    );
};

export default Ratings;


