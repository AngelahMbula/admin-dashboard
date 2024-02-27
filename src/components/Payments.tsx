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
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    amount: number;
    initiatedOn: string;
    merchantReqId: string;
    phoneNumber: string;
    status: string;
    transactionId: string;
    location: string;
  }

const columns: TableColumnsType<DataType> = [
    {
      title: 'Amount',
      width: 100,
      dataIndex: 'amount',
      key: 'amount',
      fixed: 'left',
    },
    {
      title: 'Initiated On',
      width: 100,
      dataIndex: 'initiatedOn',
      key: 'initiatedOn',
      fixed: 'left',
    },
    {
      title: 'Merchant Req ID',
      dataIndex: 'merchantReqId',
      key: 'merchantReqId',
      width: 150,
    },
    {
      title: 'PhoneNumber',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: 150,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      width: 150,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      width: 150,
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      amount: 100 + i,
      initiatedOn: `2022-01-01`,
      merchantReqId: `REQ-${i}`,
      phoneNumber: `254-791-${i}${i}${i}-${i}${i}${i}`,
      status: `Not Fulfilled`,
      transactionId: `SBR5B1DK2X`,
      location: `Location`,
    });
  }

const { Header, Content, Footer, Sider } = Layout;

const Payments = () => {
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
            <Breadcrumb.Item>Payments</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 10, background: "#AFD6F0"}}>
          <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
        <CopyrightOutlined /> Admin Dashboard Busia County
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Payments;
