import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
    });
  };
};

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
