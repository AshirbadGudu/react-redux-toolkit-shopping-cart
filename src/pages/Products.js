import { Divider, Row } from "antd";
import { useSelector } from "react-redux";
import { AppHeader, ProductCard } from "../components";

const Products = () => {
  const { products } = useSelector((state) => state.shop);
  return (
    <>
      <AppHeader />
      <Divider orientation="left">Products</Divider>
      <Row align="middle" justify="center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Row>
    </>
  );
};

export default Products;
