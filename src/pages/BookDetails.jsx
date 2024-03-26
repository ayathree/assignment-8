import {  useLoaderData, useParams } from "react-router-dom";

import { saveReadDataToLocalStorage, saveWishDataToLocalStorage } from "../utilities/localStorage";





const BookDetails = () => {

    const cards = useLoaderData();
    const{id}= useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt)
    console.log(id, cards)

    const handleRead=()=>{
        saveReadDataToLocalStorage(card)
    }

    const handleWish=()=>{
        saveWishDataToLocalStorage(card)
    }

    

    return (
        <div className="lg:hero min-h-screen mt-10 px-4">
  <div className="lg:hero-content grid-cols-1 lg:grid-cols-2 gap-20 items-center">
   <div>
   <img src={card.image} className="lg:max-w-sm rounded-lg bg-gray-100 " />
   </div>
    <div >
      <h1 className="text-5xl font-bold ">{card.bookName}</h1>
      <br />
      <p>By: {card.author}</p>
      <hr />
      <p className="mt-7">{card.category}</p>
      <hr />
      <p className="py-6"><span className="font-bold text-xl">Review:</span> {card.review}</p>
      <br />
      <div className="flex flex-row items-center gap-5">
        <p className="font-bold text-xl">Tags: </p>
    <div className="badge bg-[#59C6D2] p-2 text-white font-semibold ">#{card.tags[0]}</div>
    <div className="badge bg-[#59C6D2] p-2 text-white font-semibold">#{card.tags[1]}</div>
    </div>
    <br />
    <hr />
    <br />
    <div className="flex flex-row items-center gap-5">
        <div>
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Ratings:</p>
        </div>
        <div>
            <p className="font-bold ">{card.totalPages}</p>
            <p className="font-bold ">{card.publisher}</p>
            <p className="font-bold ">{card.yearOfPublishing}</p>
            <p className="font-bold ">{card.rating}</p>
        </div>
    </div>
    <br />
      <div className="flex flex-row items-center gap-3">
      <button onClick={handleRead} className="btn btn-outline btn-info ">Read</button>
      <button onClick={handleWish} className="btn btn-outline btn-info ">Wishlist</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;