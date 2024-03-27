import { useEffect, useState } from "react";
import Cates from "../components/Cates";
import CatesTwo from "../components/CatesTwo";
import CatesThree from "../components/CatesThree";


const Categories = () => {

    const [cates, setCates] = useState([])
    useEffect(()=>{
      fetch('bookData.json')
      .then(res=>res.json())
      .then(data=>setCates(data))
    },[])
    return (
        <div>
            <h2 className="text-center font-extrabold text-3xl mb-9 mt-9">Fiction</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-7">
            {
            cates.map(cate =><Cates key={cate.id}
            cate={cate}></Cates>)
           }
        </div>
        <h2 className="text-center font-extrabold text-3xl mb-9 mt-9">Romance</h2>
        <div>
            {
                cates.map(cate=><CatesTwo key={cate.id}
                cate={cate}></CatesTwo>)
            }
        </div>
        <h2 className="text-center font-extrabold text-3xl mb-9 mt-9">Fantasy</h2>
        <div>
            {
                cates.map(cate=><CatesThree key={cate.id}
                cate={cate}></CatesThree>)
            }
        </div>
        </div>
    );
};

export default Categories;