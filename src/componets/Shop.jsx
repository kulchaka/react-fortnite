import React, {useEffect, useState} from 'react';
import {REACT_KEY, REACT_URL} from "../config";
import Preloader from "./Preloader";
import GoodList from "./GoodList";

const Shop = () => {

  const [goods, setGoods] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(function getGoods() {
    fetch(REACT_URL, {
      headers: {
        'Authorization': REACT_KEY
      }
    })
        .then(response => response.json())
        .then(data => {
          data.shop && setGoods(data.shop)
          setLoader(false)
        })
  }, [])

  return (
      <main className="content container">
        {
          loader
              ?
              <Preloader/>
              :
              <GoodList goods={goods}/>
        }
      </main>
  );
};

export default Shop;