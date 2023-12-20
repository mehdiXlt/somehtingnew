
import { useState } from "react";

import { FaHeart } from "react-icons/fa";

function CardList({data}) {

    const [like , setLike ] = useState(false)
    
  return (
    <>
    <div className="card__container">


    {data.map((item, index) => (        
        <div key={index} className="card">
            <img src={item.Image} alt="" className='card__img' />
            <div className="card__details">
                <span className="card__price">{item.Price}$</span>
                <FaHeart className={`like ${like && "active__heart"}`} onClick={()=>{
                    setLike(true)
                }}/>
            </div>

            <div className="card__buttons">
                <button>Purchase</button>
                <button>Hide</button>
            </div>
        </div>
     ) ) 
     
    }
    </div>
    </>
  );
}

export default CardList;