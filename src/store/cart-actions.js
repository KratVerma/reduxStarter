import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export function fetchCartData() {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch(
        "https://reacttest-5a139-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response) {
        throw new Error("Could not fetch data");
      }
      const respData = response.json();
      return respData;
    }

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "error while fetching the data",
        })
      );
    }
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending Cart Data",
      })
    );

    async function sendRequest() {
      const res = await fetch(
        "https://reacttest-5a139-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!res) {
        throw new Error("Sending cart Data failed!");
      }
    }
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sending Cart Data done",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "Sending Cart Data failed",
        })
      );
    }
  };
}
