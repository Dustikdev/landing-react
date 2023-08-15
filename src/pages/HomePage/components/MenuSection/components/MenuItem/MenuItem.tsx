import React from 'react';
import './MenuItem.scss';

interface MenuItemProps {
    image: string;
    dishName: string;
    price: string;
    wight: string;
    description: string;
}

export const MenuItem = (props: MenuItemProps) => {
  return (
    <div className="menu-item">
        <img src={props.image} alt="imageItem" />
        <div>
            <div className="item-name-price">
                <span>{props.dishName}</span>
                <div className="price">{props.price}</div>
            </div>
            <div className="item-weight">{props.wight}</div>
            <div className="item-description">{props.description}</div>
        </div>
    </div>
  )
}
