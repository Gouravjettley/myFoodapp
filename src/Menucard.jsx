import React from 'react';
import API from './Api/Bestseller';
import {Button} from "@nextui-org/react";

const Menucard = () => {
  return (
    <div className='menuapi'>{
      API.map((data) => (
        <div className='menu-card'>
          <img src={data.img} alt="img" />
          <h4 style={{ margin: '7px' }}>{data.title}</h4>
          <p style={{ fontSize: '12px', color: '#56560', margin: '7px' }}>{data.description}</p>
          <div className='menucard-button'>
          <button >
          Add to cart ₹{data.price}</button>
          </div>
          </div>
      ))}
    </div>
  )
}


export default Menucard