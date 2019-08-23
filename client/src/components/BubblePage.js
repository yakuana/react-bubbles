import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";



import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property


  const fetchColors = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)

      .then(response => {
        // console.log("fetchColors repsonse data", response.data)

        setColorList(response.data)
      })
      .catch(error => {
        console.log("The api is currently down", error)
      });
  };


  useEffect(() => {
    fetchColors();
  }, []);


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
