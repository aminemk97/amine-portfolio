import React from 'react'
import Home1 from "../../../assets/forcelearn/home1.png";
import Home2 from "../../../assets/forcelearn/home2.png";
import Home3 from "../../../assets/forcelearn/home3.png";
import Login from "../../../assets/forcelearn/login.png";
import Register from "../../../assets/forcelearn/register.png";
import Contact from "../../../assets/forcelearn/contact.png";
import Admin1 from "../../../assets/forcelearn/admin1.png";
import Admin2 from "../../../assets/forcelearn/admin2.png";
import Admin3 from "../../../assets/forcelearn/admin3.png";
const Forcelearn = () => {
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
            img: Login,
        },
        {
            id: 5,
            img: Register,
        },
        {
            id: 6,
            img: Contact,
        },
        {
            id: 7,
            img: Admin1,
        },
        {
            id: 8,
            img: Admin2,
        },
        {
            id: 9,
            img: Admin3,
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

export default Forcelearn