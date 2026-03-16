import React from "react";
import Home1 from "../../../assets/gestion/home1.png";
import Home2 from "../../../assets/gestion/home2.png";
import Home3 from "../../../assets/gestion/home3.png";
import Home4 from "../../../assets/gestion/home4.png";
import Home5 from "../../../assets/gestion/home5.png";
import Home6 from "../../../assets/gestion/home6.png";
import Home7 from "../../../assets/gestion/home7.png";
import Home8 from "../../../assets/gestion/home8.png";
import Home9 from "../../../assets/gestion/home9.png";

const Gestion = () => {
  const pictures = [
    {
      id: 1,
      img: Home1,
    },
    {
      id: 2,
      img: Home2,
    },
    {
      id: 3,
      img: Home3,
    },
    {
      id: 4,
      img: Home4,
    },
    {
      id: 5,
      img: Home5,
    },
    {
      id: 6,
      img: Home6,
    },
    {
      id: 7,
      img: Home7,
    },
    {
      id: 8,
      img: Home8,
    },
    {
      id: 9,
      img: Home9,
    },
  ];
  return (
    <div>
      <div>
        {pictures.map((picture) => (
          <img src={picture.img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Gestion;
