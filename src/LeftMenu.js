import { Menu, Grid } from "antd";
import { AppleOutlined, SearchOutlined, LockOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;
const LeftMenu = () => {
  const { md } = useBreakpoint();

  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <AppleOutlined style={{ fontSize: "150%", marginTop: 10 }} />
      <Menu.Item key="mac">mac</Menu.Item>
      <Menu.Item key="ipad">ipad</Menu.Item>
      <Menu.Item key="iphone">iphone</Menu.Item>
      <Menu.Item key="watch">Watch</Menu.Item>
      <Menu.Item key="tv">Tv</Menu.Item>
      <Menu.Item key="music">Music</Menu.Item>
      <Menu.Item key="support">Support</Menu.Item>
      <SearchOutlined style={{ fontSize: "150%", marginTop: 10 }} />
      <LockOutlined style={{ fontSize: "150%", marginTop: 10 }} />
    </Menu>
  );
};
export default LeftMenu;
