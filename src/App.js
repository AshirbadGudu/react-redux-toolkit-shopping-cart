import "antd/dist/antd.css";
import Layout, { Content } from "antd/lib/layout/layout";
import Router from "./Router";
const App = () => {
  return (
    <Layout>
      <Content
        style={{
          minHeight: "100vh",
        }}
      >
        <Router />
      </Content>
    </Layout>
  );
};

export default App;
