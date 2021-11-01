import React from 'react';

const GoodsItem = ({mainId, displayName, displayDescription, displayAssets, price}) => {

  console.log(displayAssets[0].full_background)

  return (
      <div className="card">
        <div className="card-image">
          <img src={displayAssets[0].full_background} alt={displayName}/>
        </div>
        <div className="card-content">
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button className="btn" href="#">Buy</button>
          <span>{price.finalPrice}</span>
        </div>
      </div>
  );
};

export default GoodsItem;