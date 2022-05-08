import React from "react";
import ProductItem from "./ProductItem";
// import { product } from "./mock/index"

function ProductList() {
  return (
    <section class="newProducts">
      <h1>News Products</h1>
      <div class="newProducts__container">
        {props.ProductItem.maps((product, index) => (
          <ProductItem key={product.id} productInfo={product} />
        ))};
      </div>
    </section>
  );
}

export default ProductList;