import { useState } from "react";

const Tour = ({ id, name, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <div className="card">
        <div className="img-ctn">
          <img src={image} alt={name} />
        </div>
        <div className="info-ctn">
          <p className="info-text">
            {readMore ? `${ info }` : `${info.substring(0, 200)}...`}
            <button className='read-more-btn' onClick={()=>setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
            </button>
          </p>

          <span>Price ${price}</span>
          <button className="toggle-btn" onClick={() => removeTour(id)}>
            Not interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
