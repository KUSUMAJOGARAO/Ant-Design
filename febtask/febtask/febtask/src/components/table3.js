import React, { useState, useEffect } from 'react';
import { Table, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const Table3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sample data for demonstration
    const sampleData = [
      { year: 2023, ozoneLayer: 0.015, waterLevel: 50 },
  { year: 2023, ozoneLayer: 0.020, waterLevel: 55 },
  { year: 2023, ozoneLayer: 0.017, waterLevel: 48 },
  { year: 2023, ozoneLayer: 0.019, waterLevel: 52 },
  { year: 2023, ozoneLayer: 0.025, waterLevel: 60 },
  { year: 2023, ozoneLayer: 0.019, waterLevel: 53 },
  { year: 2023, ozoneLayer: 0.025, waterLevel: 62 },
  { year: 2023, ozoneLayer: 0.021, waterLevel: 45 },
  { year: 2023, ozoneLayer: 0.018, waterLevel: 47 },
  { year: 2024, ozoneLayer: 0.020, waterLevel: 55 },
  { year: 2024, ozoneLayer: 0.016, waterLevel: 43 },
  { year: 2024, ozoneLayer: 0.023, waterLevel: 58 },
  { year: 2024, ozoneLayer: 0.017, waterLevel: 49 },
  { year: 2024, ozoneLayer: 0.015, waterLevel: 40 },
  { year: 2024, ozoneLayer: 0.019, waterLevel: 50 },
  { year: 2024, ozoneLayer: 0.021, waterLevel: 46 },
  { year: 2024, ozoneLayer: 0.016, waterLevel: 42 },
  { year: 2024, ozoneLayer: 0.022, waterLevel: 54 },
  { year: 2024, ozoneLayer: 0.018, waterLevel: 51 },
  { year: 2024, ozoneLayer: 0.021, waterLevel: 57 },
  { year: 2024, ozoneLayer: 0.016, waterLevel: 44 },
  // Add more rows as needed
    ];

    setData(sampleData);
  }, []);

  const columns = [
    {
      title: 'year',
      dataIndex: 'year',
      width: '25%',
    },
    {
      title: 'ozoneLayer',
      dataIndex: 'ozoneLayer',
      sorter: (a, b) => a.number_courses - b.number_courses,
      sortDirections: ['descend', 'ascend'],
      width: '25%',
    },
    {
      title: 'waterLevel',
      dataIndex: 'waterLevel',
      sorter: (a, b) => a.time_study.localeCompare(b.time_study),
      sortDirections: ['descend', 'ascend'],
      width: '25%',
    },
    
  ];

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
          <Table columns={columns} dataSource={data} scroll={{ x: true }} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
};

export default Table3;
