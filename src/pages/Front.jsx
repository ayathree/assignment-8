
import Banner from "../components/Banner";
import BookCard from "../components/BookCard";


const Front = () => {
    
    return (
        <div className="mt-7">
           <Banner></Banner>
           <h1 className="text-center font-extrabold text-3xl mb-9">Books</h1>
           <p className="text-center  text-2xl mb-9">Choose Your Books By Clicking The Cards.</p>
           <div className="mt-7">
           <BookCard></BookCard>
           </div>
        </div>
    );
};

export default Front;