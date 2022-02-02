import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
    });
  };
};
