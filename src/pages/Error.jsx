import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="">

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold mb-4">Not Found</h1>
      
            <Link to={'/'}><button className="btn bg-[#23BE0A] text-white">Go back Home</button></Link>
      
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default Error;