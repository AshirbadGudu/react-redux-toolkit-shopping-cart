import { Divider, Row } from "antd";
import { useSelector } from "react-redux";
import { AppHeader, ProductCard } from "../components";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.shop);

  return (
    <>
      <AppHeader />
      <Divider orientation="left">Cart</Divider>
      <Row align="middle" justify="center">
        {cartItems.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Row>
    </>
  );
};

export default Cart;
