import { Spin, Divider, Row } from "antd";
import { AppHeader, ProductCard } from "../components";
import { useGetProductsQuery } from "../redux/api";
const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <>
      <AppHeader />
      <Divider orientation="left">Products</Divider>
      <Row align="middle" justify="center">
        {isLoading ? (
          <Spin size="large" />
        ) : (
          data.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </Row>
    </>
  );
};

export default Products;
