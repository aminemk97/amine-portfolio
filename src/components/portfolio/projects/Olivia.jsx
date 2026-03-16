import React from 'react'
import Home1 from "../../../assets/olivia/home1.png";
import Home2 from "../../../assets/olivia/home2.png";
import Home3 from "../../../assets/olivia/home3.png";
import Home4 from "../../../assets/olivia/home4.png";
import Home5 from "../../../assets/olivia/home5.png";
import Home6 from "../../../assets/olivia/home6.png";
import Login from "../../../assets/olivia/login.png";
import Home7 from "../../../assets/olivia/home7.png";
import Contact from "../../../assets/olivia/contact.png";
import Admin1 from "../../../assets/olivia/admin1.png";
import Admin2 from "../../../assets/olivia/admin2.png";
import Admin3 from "../../../assets/olivia/admin3.png";
import Admin4 from "../../../assets/olivia/admin4.png";
import Admin5 from "../../../assets/olivia/admin5.png";
import Seller from "../../../assets/olivia/seller.png";

const Olivia = () => {
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
        img: Home7,
        },
        {
        id: 9,
        img: Contact,
        },
        {
        id: 10,
        img: Admin1,
        },
        {
        id: 11,
        img: Admin2,
        },
        {
        id: 12,
        img: Admin3,
        },
        {
        id: 13,
        img: Admin4,
        },
        {
        id: 14,
        img: Admin5,
        },
        {
        id: 15,
        img: Seller,
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
  )
}

export default Olivia