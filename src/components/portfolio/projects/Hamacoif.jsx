import React from "react";
import Home1 from "../../../assets/hamacoiff/home1.png";
import Home2 from "../../../assets/hamacoiff/home2.png";
import Home3 from "../../../assets/hamacoiff/home3.png";
import Home4 from "../../../assets/hamacoiff/home4.png";
import Home5 from "../../../assets/hamacoiff/home5.png";
import Home6 from "../../../assets/hamacoiff/home6.png";
import Login from "../../../assets/hamacoiff/login.png";
import Register from "../../../assets/hamacoiff/register.png";
import Reservation from "../../../assets/hamacoiff/reservation.png";
import Panier from "../../../assets/hamacoiff/panier.png";
import Mobile1 from "../../../assets/hamacoiff/mobile1.png";
import Mobile2 from "../../../assets/hamacoiff/mobile2.png";
import Mobile3 from "../../../assets/hamacoiff/mobile3.png";

const Hamacoif = () => {
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
      img: Login,
    },
    {
      id: 8,
      img: Register,
    },
    {
      id: 9,
      img: Reservation,
    },
    {
      id: 10,
      img: Panier,
    },
    {
      id: 11,
      img: Mobile1,
    },
    {
      id: 12,
      img: Mobile2,
    },
    {
      id: 13,
      img: Mobile3,
    },
  ];

  return (
    <div>
      <div>
        {pictures.map((picture) => (
          <img src={picture.img} alt="" className="" />
        ))}
      </div>
    </div>
  );
};

export default Hamacoif;
