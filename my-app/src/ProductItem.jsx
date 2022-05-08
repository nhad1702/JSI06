import React from "react";

const ProductItem = (props) => {
  console.log(props.productInfo);

  return (
    <div class="newProducts__item">
      <div class="item__image">
        <img src={props.productInfo} alt="p6" />
        <div class="item__image-child">
          <img src="./img/p5.jpg" alt="p5" />
        </div>
      </div>
      <div class="item__content">
        <h3>{props.ProductName}</h3>
        <p>
          <strong>XL/XXL/S</strong>
        </p>
        <div class="item__text">
          <p>
            <del>{props.oldPrice}</del>
          </p>
          <p>
            <strong>{props.newPrice}</strong>
          </p>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;