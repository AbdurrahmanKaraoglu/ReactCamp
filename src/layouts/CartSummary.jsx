import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Icon,Dropdown,Label } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/actions/cartActions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CartSummary() {
  const dispatch = useDispatch();


  const { cartItems } = useSelector(state => state.cart)

  const handleRemoveToCart = (product) => {
    dispatch(removeFromCart(product));
    toast.error(`${product} sepetten çıkarıldı!`)
  };

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          { // javascript yazacağımız için süslü parantez açıyoruz.
            cartItems.map((cartItem, i) => (
              <Dropdown.Item key={i}>
                {cartItem.product.productName}
                <Label>
                  <Label.Detail>{cartItem.quantity}</Label.Detail>

                </Label>

                <Button
                  size='mini'
                  animated='vertical'
                  onClick={() => handleRemoveToCart(cartItem.product.productName)}
                  color="red"
                >
                  <Button.Content visible >Sepetten Çıkart</Button.Content>
                  <Button.Content hidden>
                  <Icon name='delete' />
                  </Button.Content>
                </Button>


              </Dropdown.Item>
            ))
          }
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}