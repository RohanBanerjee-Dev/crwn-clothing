import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { CartDropdownContainer, CartItemsContainer, CartDropdownButton, EmptyMessageContainer } from "./cart-dropdown.styles";

const CartDropdown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems)
    
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (
                    cartItems.map(cartItem => 
                        ( <CartItem key={cartItem.id} item={cartItem}/>)
                    ))
                    :
                    (<EmptyMessageContainer >Your cart is empyt</EmptyMessageContainer>)
                } 
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                navigate('/checkout');
                dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
};

export default CartDropdown;