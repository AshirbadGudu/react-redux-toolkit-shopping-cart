import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/shop";

const App = () => {
  const { cartItems, products } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const isInCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item;
  };
  return (
    <main>
      {products.map((product) => (
        <Fragment key={`${product.id}`}>
          <img
            src={product.image}
            alt=""
            style={{
              width: 50,
              height: 50,
            }}
          />
          <h4>{product.title}</h4>
          {isInCart(product.id) ? (
            <button onClick={() => dispatch(removeFromCart(product.id))}>
              removeFromCart
            </button>
          ) : (
            <button onClick={() => dispatch(addToCart(product))}>
              addToCart
            </button>
          )}
        </Fragment>
      ))}
      {cartItems.map((product) => (
        <Fragment key={`${product.id}`}>
          <img
            src={product.image}
            alt=""
            style={{
              width: 50,
              height: 50,
            }}
          />
          <h4>{product.title}</h4>
          <button onClick={() => dispatch(removeFromCart(product.id))}>
            removeFromCart
          </button>
        </Fragment>
      ))}
    </main>
  );
};

export default App;
