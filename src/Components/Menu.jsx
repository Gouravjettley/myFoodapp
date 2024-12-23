import React from 'react';
import menu from '../Api/api';
import {Button} from "@nextui-org/react";

const Menu = () => {
  return (
    <>
     <h1  className='MenuH1'>What's in your mind ?</h1>
      <div className='menuapi'>{

        menu.map((data) => (

          <div className='menu-card'>
            <img src={data.img} alt="img" />
            <h4 style={{ margin: '7px' }}>{data.title}</h4>
            <p style={{ fontSize: '12px', color: '#56560', margin: '7px' }}>{data.description}</p>
            <button className='menucard-button'>
         Add to cart ₹{data.price}</button>
        {/* <button className='btn3'></button> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default Menu