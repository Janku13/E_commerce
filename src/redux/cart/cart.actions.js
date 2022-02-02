import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
    });
  };
};

export const addItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.ADD_ITEM,
      payload: item,
    });
  };
};

export const removeItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.REMOVE_ITEM,
      payload: item,
    });
  };
};

export const clearItemFromCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: CartActionTypes.CLEAR_ITEM_FROM_CART,
      payload: item,
    });
  };
};
