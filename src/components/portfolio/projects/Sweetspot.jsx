import React from 'react'
import Home1 from '../../../assets/sweetspot/home1.png'
import Home2 from '../../../assets/sweetspot/home2.png'
import Home3 from '../../../assets/sweetspot/home3.png'
import Home4 from '../../../assets/sweetspot/home4.png'
import Category from '../../../assets/sweetspot/category.png'
import Product from '../../../assets/sweetspot/produits.png'
import Details from '../../../assets/sweetspot/details.png'
import Mobile1 from '../../../assets/sweetspot/mobile1.png'
import Mobile2 from '../../../assets/sweetspot/mobile2.png'

const Sweetspot = () => {
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
            img: Category,
        },
        {
            id: 6,
            img: Product,
        },
        {
            id: 7,
            img: Details,
        },
        {
            id: 8,
            img: Mobile1,
        },
        {
            id: 9,
            img: Mobile2,
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

export default Sweetspot