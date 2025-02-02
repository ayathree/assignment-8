import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Books = ({card}) => {
    const{image,tags,bookName,author,category,rating,id}= card
    return (
        <Link to={`/card/${id}`} className="card  bg-base-100 border-2 p-7">
  <figure><img className="w-[200px] h-[200px]  p-3" src={image} alt='' /></figure>
  <div className="card-body">
    <div className="flex flex-row items-center gap-5">
    <div className="badge bg-[#59C6D2]  py-5  text-white lg:font-semibold ">{tags[0]}</div>
    <div className="badge bg-[#59C6D2]  py-5  text-white lg:font-semibold">{tags[1]}</div>
    </div>
    <h2 className="card-title font-bold">{bookName}</h2>
    <p className="font-bold text-xs mb-10">By: {author}</p>
    
    <div className="flex flex-row justify-between items-center">
    <div>
    <p>{category}</p>
    </div>
    <div className="flex flex-row items-center gap-2">
        <p>{rating}</p>
        <CiStar />

    </div>

  </div>
  </div>
  
</Link>
    );


};

Books.propTypes={
  card:PropTypes.object
}

export default Books;