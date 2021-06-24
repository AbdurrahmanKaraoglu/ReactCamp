import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          // Sepette daha önce bu üründen yoksa
          // cartItems a veri ekleme 
          ...state, // bu yazılmasada olur. 
          cartItems: [...state.cartItems, { quantity: 1, product: payload }]
        };
      }

    case REMOVE_FROM_CART:
      return {
        // ürünü sepetten siler 
        // Ürün adetini azaltma yok burda o yapılacak
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id)
        // silinecek ürün haric diğer ürünleri yeni bir diziye aktarır.
      };
    default:
      return state;
  }
}