import React, { useState, useEffect } from 'react';
import { Table, Layout, Menu } from 'antd';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const Table5 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sample data for demonstration
    const sampleData = [
      { airPollution: 'High', waterPollution: 'Moderate', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'Yes' },
  { airPollution: 'Moderate', waterPollution: 'Low', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'No' },
  { airPollution: 'Low', waterPollution: 'High', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'Yes' },
  { airPollution: 'High', waterPollution: 'High', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'Yes' },
  { airPollution: 'Moderate', waterPollution: 'Moderate', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'No' },
  { airPollution: 'Low', waterPollution: 'Low', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'Yes' },
  { airPollution: 'Moderate', waterPollution: 'High', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'Yes' },
  { airPollution: 'High', waterPollution: 'Moderate', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'No' },
  { airPollution: 'Low', waterPollution: 'Low', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'Yes' },
  { airPollution: 'Moderate', waterPollution: 'High', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'Yes' },
  { airPollution: 'High', waterPollution: 'Moderate', globalWarming: 'Yes', iceMelting: 'Yes', animalsAffected: 'No' },
  // Add more rows as needed
    ];

    setData(sampleData);
  }, []);

  const columns = [
    {
      title: 'airPollution',
      dataIndex: 'airPollution',
      width: 150,
    },
    {
      title: 'waterPollution',
      dataIndex: 'waterPollution',
      width: 150,
    },
    {
      title: 'globalWarming',
      dataIndex: 'globalWarming',
    },
    {
      title: 'iceMelting',
      dataIndex: 'iceMelting',
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
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 50,
            }}
            scroll={{
              y: 360,
            }}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
};

export default Table5;
