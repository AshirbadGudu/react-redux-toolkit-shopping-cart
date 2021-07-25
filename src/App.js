import "antd/dist/antd.css";
import { Divider, PageHeader, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import { useSelector } from "react-redux";
import { ProductCard } from "./components";
const App = () => {
  const { cartItems, products } = useSelector((state) => state.shop);

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
            <ProductCard product={product} key={product.id} />
          ))}
        </Row>
      </Content>
      <Divider orientation="left">Cart</Divider>
      <Footer>
        <Row align="middle" justify="center">
          {cartItems.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Row>
      </Footer>
    </Layout>
  );
};

export default App;
