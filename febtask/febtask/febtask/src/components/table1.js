import React, { useEffect, useState } from 'react';
import { Layout, Menu, Card, Table } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const TablePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sample data for demonstration
    const sampleData = [
      { year: 2023, temperatureF: 68, temperatureC: 20, precipitation: 0.2 },
      { year: 2023, temperatureF: 72, temperatureC: 22, precipitation: 0.0 },
      { year: 2023, temperatureF: 65, temperatureC: 18, precipitation: 0.5 },
      // Add more rows as needed
      { year: 2023, temperatureF: 72, temperatureC: 22, precipitation: 0.2 },
    { year: 2023, temperatureF: 64, temperatureC: 18, precipitation: 0.1 },
    { year: 2023, temperatureF: 66, temperatureC: 19, precipitation: 0.5 },
    { year: 2023, temperatureF: 70, temperatureC: 21, precipitation: 0.2 },
    { year: 2023, temperatureF: 63, temperatureC: 17, precipitation: 0.6 },
    { year: 2023, temperatureF: 68, temperatureC: 20, precipitation: 0.3 },
    { year: 2023, temperatureF: 61, temperatureC: 16, precipitation: 0.5 },
    { year: 2023, temperatureF: 67, temperatureC: 19, precipitation: 0.1 },
    { year: 2023, temperatureF: 59, temperatureC: 15, precipitation: 0.2 },
    // Additional rows for the year 2024
    { year: 2024, temperatureF: 64, temperatureC: 18, precipitation: 0.2 },
    { year: 2024, temperatureF: 60, temperatureC: 15, precipitation: 0.4 },
    { year: 2024, temperatureF: 58, temperatureC: 14, precipitation: 0.3 },
    { year: 2024, temperatureF: 63, temperatureC: 17, precipitation: 0.1 },
    { year: 2024, temperatureF: 66, temperatureC: 19, precipitation: 0.0 },
    { year: 2024, temperatureF: 61, temperatureC: 16, precipitation: 0.5 },
    { year: 2024, temperatureF: 59, temperatureC: 15, precipitation: 0.2 },
    { year: 2024, temperatureF: 64, temperatureC: 18, precipitation: 0.6 },
    { year: 2024, temperatureF: 57, temperatureC: 14, precipitation: 0.3 },
    { year: 2024, temperatureF: 61, temperatureC: 16, precipitation: 0.5 },
    // Add more rows as needed
  ];
    setData(sampleData);
  }, []);

  const columns = data.length > 0 ? Object.keys(data[0]).map(key => ({ title: key, dataIndex: key })) : [];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Card title="Table 1" style={{ margin: 20 }}>
            <div style={{ overflowX: 'auto' }}>
              <Table dataSource={data} columns={columns} scroll={{ x: true }} />
            </div>
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
};

export default TablePage;
