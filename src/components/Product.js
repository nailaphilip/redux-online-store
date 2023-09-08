import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart, removeItemFromCart } from "../features/cartSlice";
import { useLocation } from "react-router-dom";

const Product = (props) => {
  const { image, title, price, rating, description } = props;
  const product = props;
  const cartItems = props.cartItems;
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleAddProduct = () => {
    console.log("Product: ", product);
    dispatch(addToCart(product));
  };

  const handleRemoveProduct = () => {
    console.log("Product: ", product);
    dispatch(removeItemFromCart(product));
  };

  return (
    <section className="Detail">
      <article className="Detail_thumbnail">
        <img src={image} alt={title} />
      </article>

      <article className="Detail_info">
        <div className="Detail_info-header">
          <h2>{title}</h2>
        </div>
        <div classNAme="Detail_info">
          <span className="Detail_info-price">{price}</span>
          <span className="Detail_info-rating">Rating: {rating.rate}</span>
        </div>
        <p className="Detail_info-description">{description}</p>
        <Button variant="primary" onClick={handleAddProduct}>
          Add to Cart
        </Button>
        {location.pathname === "/cart" && (
          <Button variant="danger" onClick={handleRemoveProduct}>
            Remove from Cart
          </Button>
        )}
        {cartItems.length > 0 &&
          cartItems.find((item) => item.id === product.id) && (
            <Button variant="danger" onClick={handleRemoveProduct}>
              Remove from Cart
            </Button>
          )}
      </article>
    </section>
  );
};

export default Product;
