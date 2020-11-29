import React from 'react'
import './productCard.css'


const ProductCard = ({item}) => {
    return (
    <div className="item-card">
        <img className="item-pict" src={item.pict} alt="Image item"/>
        <div className="item-title">
            {item.title}
        </div>
        <div className="item-prize">
            {item.price}
        </div>
        
        
    </div>
    )
}


export default ProductCard