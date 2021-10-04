import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default () => {
  const { id } = useParams();
  const foundProduct = useSelector((state) =>
    state.products.list.find((product) => product.id === Number(id))
  );

  return <div>{foundProduct.name}</div>;
};
