import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import BookCard from "../components/BookCard";


const Front = () => {
    const bookCards = useLoaderData();
    return (
        <div className="mt-7">
           <Banner></Banner>
           <h1 className="text-center font-extrabold text-3xl mb-9">Books</h1>
           <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-7">
           {
            bookCards.map(bookCard=><BookCard key={bookCard.id}
            bookCard={bookCard}></BookCard>)
           }
           </div>
        </div>
    );
};

export default Front;