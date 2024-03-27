import { Link } from "react-router-dom";

const CatesTwo = ({cate}) => {
    const{image,bookName,author,category,id}= cate

    
    if (category=='Romance') {
        return (
        
                
            <div className="card w-96 bg-base-100 border-2 p-7">
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

export default CatesTwo;