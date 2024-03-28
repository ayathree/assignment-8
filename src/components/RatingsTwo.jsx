import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const RatingsTwo = ({rate}) => {
    const{image,bookName,author,rating,id}= rate
    if (parseFloat(rating)< 4.7) {
        return (
        
                
            <div className="card  bg-base-100 border-2 p-7">
  <figure><img className="w-[200px] h-[200px]  p-3" src={image} alt='' /></figure>
  <div className="card-body">
    
    <h2 className="card-title font-bold">{bookName}</h2>
    <p className="font-bold text-xs ">By: {author}</p>
    <h1 className="font-extrabold text-xl badge bg-[#59C6D2] p-4 text-white"> <span className="font-bold text-lg">Ratings:</span> {rating}</h1>
    
    <div className="flex flex-row justify-between items-center">
    <div>
   <Link to={`/card/${id}`}><button className="btn bg-[#23BE0A] text-white">Show Details</button></Link>
    </div>
   

  </div>
  </div>
  
</div>

       
            );

        
    }
};
RatingsTwo.propTypes ={
  rate:PropTypes.object
}

export default RatingsTwo;