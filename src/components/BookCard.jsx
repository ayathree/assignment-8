import { Link } from "react-router-dom";


const BookCard = ({bookCard}) => {

    const {image,tags,bookName,author,category,rating}= bookCard;

    return (
        <Link to={''} className="card  bg-base-100 border-2 p-7">
  <figure><img className="w-[200px] h-[200px]  p-3" src={image} alt='' /></figure>
  <div className="card-body">
    <div className="flex flex-row items-center gap-5">
    <div className="badge bg-[#59C6D2] p-2 text-white font-semibold ">{tags[0]}</div>
    <div className="badge bg-[#59C6D2] p-2 text-white font-semibold">{tags[1]}</div>
    </div>
    <h2 className="card-title font-bold">{bookName}</h2>
    <p className="font-bold text-xs">By: {author}</p>
    
  </div>
</Link>
    );
};

export default BookCard;