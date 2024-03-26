
import { useEffect, useState } from "react";

import Books from "./Books";


const BookCard = () => {
  const [cards, setCards] = useState([])
  useEffect(()=>{
    fetch('/bookData.json')
    .then(res=>res.json())
    .then(data=>setCards(data))
  },[])

 

    

    return (
      <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-7">
           {
            cards.map(card =><Books key={card.id}
            card={card}></Books>)
           }
           </div>
        
    );
};

export default BookCard;