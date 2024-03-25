import { Link } from 'react-router-dom';
import bannerImg from '../assets/bks.jpg'

const Banner = () => {
    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse px-4">
    <img src={bannerImg} className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold mb-4">Books to freshen up your bookshelf</h1>
      <br />
      
     
      <Link to={'/listBooks'}><button className="btn bg-[#23BE0A] text-white font-semibold">View The
List</button></Link>
    </div>
  </div>
</div>
    );
};

export default Banner;