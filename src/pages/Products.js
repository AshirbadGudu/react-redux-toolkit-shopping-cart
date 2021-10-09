import { Divider, Row, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { AppHeader, ProductCard } from "../components";
import { useGetProductsQuery } from "../redux/api";
const Products = () => {
  const { products } = useSelector((state) => state.shop);
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <>
      <AppHeader />
      <Divider orientation="left">Products</Divider>
      <Row align="middle" justify="center">
        {!isLoading &&
          data.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Row>
    </>
  );
};

export default Products;
