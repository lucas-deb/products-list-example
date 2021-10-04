import { GET_PRODUCT } from "./products.types";

const INITIAL_STATE = {
  list: [
    {
      id: 0,
      name: "First Product",
      description: "This is a first description",
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
