import { Layout, Menu, Breadcrumb } from "antd";
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
import { Table } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
  key: React.Key;
  businessName: string;
  ward: string;
  ownerName: string;
  businessPhoneNumber: string;
  ownerPhoneNumber: string;
  businessEmail: string;
  category: string;
  source: string;
  permitted: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Ward",
    width: 100,
    dataIndex: "ward",
    key: "ward",
    fixed: "left",
  },
  {
    title: "Business Name",
    width: 100,
    dataIndex: "businessName",
    key: "businessName",
    fixed: "left",
  },
  {
    title: "Business Phone Number",
    dataIndex: "businessPhoneNumber",
    key: "businessPhoneNumber",
    width: 150,
  },
  {
    title: "Business Email",
    dataIndex: "businessEmail",
    key: "businessEmail",
    width: 150,
  },
  {
    title: "Owner Name",
    dataIndex: "ownerName",
    key: "ownerName",
    width: 150,
  },
  {
    title: "Owner Phone Number",
    dataIndex: "ownerPhoneNumber",
    key: "ownerPhoneNumber",
    width: 150,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    width: 150,
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
    width: 150,
  },
  {
    title: "Permitted",
    dataIndex: "permitted",
    key: "permitted",
    width: 150,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    businessName: `Business-${i}`,
    ward: `Ward-${i}`,
    ownerName: `Owner-${i}`,
    businessPhoneNumber: `254-791-${i}${i}${i}-${i}${i}${i}`,
    ownerPhoneNumber: `254-791-${i}${i}${i}-${i}${i}${i}`,
    businessEmail: `123456789@gmail.com`,
    category: `Category-${i}`,
    source: `Source-${i}`,
    permitted: `Permitted-${i}`,
  });
}

const { Header, Content, Footer, Sider } = Layout;

const Businesses = () => {
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
            <Link to="/logout">Logout</Link>
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
          }}
        >
          <Breadcrumb style={{ margin: "16px 10px", fontWeight: "bold" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Businesses</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 10, background: "#AFD6F0" }}>
            <Table
              columns={columns}
              dataSource={data}
              scroll={{ x: 1500, y: 300 }}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <CopyrightOutlined /> Admin Dashboard Busia County
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Businesses;
