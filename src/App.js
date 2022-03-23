import "./App.css";

import { Layout, Menu, Row, Col, Image } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
function App() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <Menu className="menu" theme="dark" mode="horizontal">
            <Menu.Item key="mac">mac</Menu.Item>
            <Menu.Item key="ipad">ipad</Menu.Item>
            <Menu.Item key="iphone">iphone</Menu.Item>
            <Menu.Item key="watch">Watch</Menu.Item>
            <Menu.Item key="tv">Tv</Menu.Item>
            <Menu.Item key="music">Music</Menu.Item>
            <Menu.Item key="support">Support</Menu.Item>
          </Menu>
        </Header>

        <Content
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>
            Shop online and get Specialized help, free no-contact delivery, and
            more
          </h4>
        </Content>
        <div className="site-layout-content">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "46px",
              paddingTop: "50px",
              lineHeight: "20px",
            }}
          >
            <b>iPhone 12</b>
          </h1>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "28px",
            }}
          >
            Blast past fast
          </h2>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              color: "gray",
            }}
          >
            From $29.12/mo.for 24 mo. or $699 before trade-in
          </h4>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              color: "gray",
            }}
          >
            Buy directly from Apple with Special carrier offers
          </h4>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Col>
              <a
                href="#learn more"
                style={{ paddingRight: "30px", fontSize: "20px" }}
              >
                <b>
                  Learn more <RightOutlined />
                </b>
              </a>

              <a href="#buy" style={{ fontSize: "20px" }}>
                <b>
                  Buy <RightOutlined />
                </b>
              </a>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "40px",
              paddingRight: "40px",
              overflow: "wrap",
            }}
          >
            <Image
              width={1500}
              src="https://images.unsplash.com/photo-1605250816977-78e7497ebb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              preview={false}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
