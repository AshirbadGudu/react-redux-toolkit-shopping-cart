import { Button, PageHeader } from "antd";
import { useHistory } from "react-router-dom";
const AppHeader = () => {
  const history = useHistory();
  return (
    <>
      <PageHeader
        avatar={{
          src: "https://avatars.githubusercontent.com/u/49669234?v=4",
        }}
        title="React Redux Toolkit"
        extra={[
          <Button
            onClick={() => {
              history?.push("/Products");
            }}
            key="3"
            type={window.location.pathname === "/Cart" ? "default" : "primary"}
          >
            Products
          </Button>,
          <Button
            onClick={() => {
              history?.push("/Cart");
            }}
            key="2"
            type={window.location.pathname === "/Cart" ? "primary" : "default"}
          >
            Cart
          </Button>,
        ]}
      />
    </>
  );
};

export default AppHeader;
