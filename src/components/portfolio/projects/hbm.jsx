import React from 'react'
import Client1 from "../../../assets/Hbm/client1.png";
import Client2 from "../../../assets/Hbm/client2.png";
import Client3 from "../../../assets/Hbm/client3.png";
import Client4 from "../../../assets/Hbm/client4.png";
import Client5 from "../../../assets/Hbm/client5.png";
import Client6 from "../../../assets/Hbm/client6.png";
import Client7 from "../../../assets/Hbm/client7.png";
import Mobile1 from "../../../assets/Hbm/mobile1.png";

import Admin1 from "../../../assets/Hbm/admin1.png";
import Admin2 from "../../../assets/Hbm/admin2.png";
import Admin3 from "../../../assets/Hbm/admin3.png";
import Admin4 from "../../../assets/Hbm/admin4.png";
import Admin4_1 from "../../../assets/Hbm/admin4_1.png";
import Admin5 from "../../../assets/Hbm/admin5.png";
import Admin6 from "../../../assets/Hbm/admin6.png";
import Admin7 from "../../../assets/Hbm/admin7.png";

const Hbm = () => {
    const pictures = [
        {
            id: 1,
            img: Client1,
        },
        {
            id: 2,
            img: Client2,
        },
        {
            id: 3,
            img: Client3,
        },
        {
            id: 4,
            img: Client4,
        },
        {
            id: 5,
            img: Client5,
        },
        {
            id: 6,
            img: Client6,
        },
        {
            id: 7,
            img: Client7,
        },
        {
            id: 8,
            img: Mobile1,
        },
        {
            id: 9,
            img: Admin1,
        },
        {
            id: 10,
            img: Admin2,
        },
        {
            id: 11,
            img: Admin3,
        },
        {
            id: 12,
            img: Admin4,
        },
        {
            id: 13,
            img: Admin4_1
        },
        {
            id: 14,
            img: Admin5,
        },
        {
            id: 15,
            img: Admin6,
        },
        {
            id: 16,
            img: Admin7,
        },
       
    ]
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

export default Hbm