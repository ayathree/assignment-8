import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Cates = ({cate}) => {
    const{image,bookName,author,category,id}= cate

    
    if (category=='Fiction') {
        return (
        
                
            <div className="card  bg-base-100 border-2 p-7">
  <figure><img className="w-[200px] h-[200px]  p-3" src={image} alt='' /></figure>
  <div className="card-body">
    
    <h2 className="card-title font-bold">{bookName}</h2>
    <p className="font-bold text-xs mb-10">By: {author}</p>
    
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

Cates.propTypes ={
  cate:PropTypes.object
  
}

export default Cates;