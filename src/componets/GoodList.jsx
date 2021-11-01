import React from 'react';
import GoodsItem from "./GoodsItem";

const GoodList = ({goods} = []) => {
  if(goods.leading) {
    return <h2>Nothing...</h2>
  }
  return (
     <div className='goods'>
       {goods.map(item => (
           <GoodsItem key={item.mainId} {...item}/>
       ))}
     </div>
  );
};

export default GoodList;