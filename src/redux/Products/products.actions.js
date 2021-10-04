import { GET_PRODUCT } from "./products.types";

export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id,
});
