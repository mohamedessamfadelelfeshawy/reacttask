import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';

export default function OneProductCard(props) {
  return (
    <div className='onProductCard'>
      <Link to={"/product-details/" + props.id}>
        <div className='productImage'>
          <img src={props.image} width="90%" />
        </div>
        <div className='productTitle'>
          {props.title}
        </div>
        <div className='productPrice'>
          {props.price} LE
        </div>
      </Link>

    </div>
  )
}
