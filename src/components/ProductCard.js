import { Button, Card, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/shop";

const ProductCard = ({ product }) => {
  const { cartItems } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const isInCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item;
  };

  return (
    <>
      <Col lg={5} md={12} sm={12} key={`${product.id}`}>
        <Card
          title={product.title}
          hoverable
          style={{ width: 240, margin: "1vh 0" }}
          cover={
            <img
              src={product.image}
              alt=""
              style={{
                width: "100%",
                height: 240,
              }}
            />
          }
          actions={[
            isInCart(product.id) ? (
              <Button
                danger
                type="primary"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={() => dispatch(addToCart(product))}
              >
                Add To Cart
              </Button>
            ),
          ]}
        >
          <Card.Meta title={product.price} description={product.category} />
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
