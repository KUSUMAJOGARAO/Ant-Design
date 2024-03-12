import React, { useEffect, useState } from 'react';
import { Layout, Menu, Card, Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';

const { Header, Content, Footer } = Layout;

const Table2 = () => {
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    // Sample data for demonstration
    const sampleData = [
      { year: 2023, precipitation: 0.5, airQualityIndex: 60, ozoneLayer: 0.015, co2Level: 415 },
    { year: 2023, precipitation: 0.2, airQualityIndex: 63, ozoneLayer: 0.020, co2Level: 410 },
    { year: 2023, precipitation: 0.6, airQualityIndex: 52, ozoneLayer: 0.017, co2Level: 400 },
    { year: 2023, precipitation: 0.3, airQualityIndex: 58, ozoneLayer: 0.019, co2Level: 410 },
    { year: 2023, precipitation: 0.5, airQualityIndex: 45, ozoneLayer: 0.025, co2Level: 395 },
    { year: 2023, precipitation: 0.3, airQualityIndex: 58, ozoneLayer: 0.019, co2Level: 410 },
    { year: 2023, precipitation: 0.5, airQualityIndex: 45, ozoneLayer: 0.025, co2Level: 395 },
    { year: 2023, precipitation: 0.1, airQualityIndex: 50, ozoneLayer: 0.021, co2Level: 400 },
    { year: 2023, precipitation: 0.2, airQualityIndex: 47, ozoneLayer: 0.018, co2Level: 405 },
    { year: 2024, precipitation: 0.2, airQualityIndex: 53, ozoneLayer: 0.020, co2Level: 410 },
    { year: 2024, precipitation: 0.4, airQualityIndex: 57, ozoneLayer: 0.016, co2Level: 405 },
    { year: 2024, precipitation: 0.3, airQualityIndex: 49, ozoneLayer: 0.023, co2Level: 400 },
    { year: 2024, precipitation: 0.1, airQualityIndex: 55, ozoneLayer: 0.017, co2Level: 415 },
    { year: 2024, precipitation: 0.0, airQualityIndex: 61, ozoneLayer: 0.015, co2Level: 420 },
    { year: 2024, precipitation: 0.5, airQualityIndex: 54, ozoneLayer: 0.019, co2Level: 410 },
    { year: 2024, precipitation: 0.2, airQualityIndex: 48, ozoneLayer: 0.021, co2Level: 400 },
    { year: 2024, precipitation: 0.6, airQualityIndex: 56, ozoneLayer: 0.016, co2Level: 405 },
    { year: 2024, precipitation: 0.3, airQualityIndex: 51, ozoneLayer: 0.022, co2Level: 395 },
    { year: 2024, precipitation: 0.5, airQualityIndex: 59, ozoneLayer: 0.018, co2Level: 410 },
    { year: 2024, precipitation: 0.2, airQualityIndex: 48, ozoneLayer: 0.021, co2Level: 400 },
    { year: 2024, precipitation: 0.6, airQualityIndex: 56, ozoneLayer: 0.016, co2Level: 405 }
    ];

    setData(sampleData);
  }, []);

  const columns = [
    {
      title: 'year',
      dataIndex: 'year',
      width: 150,
    },
    {
      title: 'precipitation',
      dataIndex: 'precipitation',
      width: 150,
    },
    {
      title: 'airQualityIndex',
      dataIndex: 'airQualityIndex',
      width: 150,
    },
    {
      title: 'ozoneLayer',
      dataIndex: 'ozoneLayer',
      width: 150,
    },
    
  ];

  const onSelectChange = (selectedKeys) => {
    setSelectedRowKeys(selectedKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };

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
            <div style={{ marginBottom: 16, overflowX: 'auto' }}>
              <Button type="primary" onClick={() => console.log(selectedRowKeys)}>Print selected rows</Button>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 'max-content' }} />
          </Card>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
};

export default Table2;
