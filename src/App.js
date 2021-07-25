import { Button, Card, Col, Divider, PageHeader, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/shop";
import "antd/dist/antd.css";
const App = () => {
  const { cartItems, products } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const isInCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item;
  };
  return (
    <Layout>
      <PageHeader
        avatar={{
          src: "https://avatars.githubusercontent.com/u/49669234?v=4",
        }}
        title="React Redux Toolkit"
      />
      <Content>
        <Divider orientation="left">Products</Divider>
        <Row align="middle" justify="center">
          {products.map((product) => (
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
                <Card.Meta
                  title={product.price}
                  description={product.category}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
      <Divider orientation="left">Cart</Divider>
      <Footer>
        <Row align="middle" justify="center">
          {cartItems.map((product) => (
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
                  <Button
                    danger
                    type="primary"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    Remove From Cart
                  </Button>,
                ]}
              >
                <Card.Meta
                  title={product.price}
                  description={product.category}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Footer>
    </Layout>
  );
};

export default App;
