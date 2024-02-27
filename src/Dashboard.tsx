import { Layout, Menu, Breadcrumb, Card, Space } from "antd";
import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  DollarOutlined,
  UserOutlined,
  TeamOutlined,
  BankOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { bar } from "./components/DailyLogins";
import { PieChart } from "./components/LoginsLocation";

const { Header, Content, Footer, Sider } = Layout;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (
    collapsed: boolean | ((prevState: boolean) => boolean)
  ) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{ background: "#DFEFFF" }}
      >
        <div className="logo" />
        <Menu
          style={{ background: "#F1F8FC" }}
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DollarOutlined />}>
            <Link to="/payments">Payments</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BankOutlined />}>
            <Link to="/businesses">Businesses</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DollarOutlined />}>
            <Link to="/payments">Wifi Logins</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>
            <Link to="/userinfo">User Info</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: "0 10px",
            background: "#F1F8FC",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{fontSize: "30px" }}>Admin Dashboard</div>
        <div ><UserOutlined style={{fontSize: "20px" }}/> admin</div>
        </Header>
        <Content
          style={{
            margin: "0 5px",
            background: "#AFD6F0",
            borderRadius: "5px",
            overflow: "auto",
          }}
        >
          <Breadcrumb style={{ margin: "16px 10px", fontWeight: "bold" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Summary</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 19, background: "#AFD6F0", minHeight: 260 }}>
            <Space direction="horizontal" size={16}>
              <Card
                title="Users"
                style={{ width: 300, fontSize: "30px", fontWeight: "bold" }}
              >
                <span>
                  <b style={{ color: "#47B5B2" }}>100+</b> Users
                </span>
              </Card>
              <Card
                title="Payments"
                style={{ width: 300, fontSize: "30px", fontWeight: "bold" }}
              >
                <span>
                  Ksh: <b style={{ color: "#47B5B2" }}>100,000+</b>{" "}
                </span>
              </Card>
              <Card
                title="No of clicks"
                style={{ width: 300, fontSize: "30px", fontWeight: "bold" }}
              >
                <span>
                  <b style={{ color: "#47B5B2" }}>10,000+</b> clicks
                </span>
              </Card>
              <Card
                title="Locations"
                style={{ width: 300, fontSize: "30px", fontWeight: "bold" }}
              >
                <span>
                  <b style={{ color: "#47B5B2" }}>35</b> Wards
                </span>
              </Card>
            </Space>
          </div>
          <div
            className="chart"
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingBottom: 20,
            }}
          >
            <div style={{ flex: "1", height: "50%", width: "50%" }}>
              {PieChart()}
            </div>
            <div
              style={{
                flex: "1",
                height: "60%",
                width: "60%",
              }}
            >
              {bar()}
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <CopyrightOutlined /> Admin Dashboard Busia County
        </Footer>
      </Layout>
    </Layout>
  );
};

export default SideMenu;
