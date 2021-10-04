import { GET_PRODUCT } from "./products.types";

const INITIAL_STATE = {
  list: [
    {
      name: "First Product",
      description: "This is a first description",
    },
    {
      name: "Second Product",
      description: "This is a second description",
    },
    {
      name: "Third Product",
      description: "This is a third description",
    },
    {
      name: "Fourth Product",
      description: "This is a fourth description",
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return state.products.find((product) => product.id === action.payload.id);
    default:
      return state;
  }
};

export default reducer;
