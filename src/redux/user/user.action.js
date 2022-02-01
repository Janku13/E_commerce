export const setCurrentUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: user,
    });
  };
};
