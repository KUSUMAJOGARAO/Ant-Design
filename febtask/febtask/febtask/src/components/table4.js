import React, { useRef, useState, useEffect } from 'react';
import { Table, Layout, Menu, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const Table4 = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    // Sample data for demonstration
    const sampleData = [
      { year: 2010, pHLevel: 7.2, airQualityIndex: 60, waterPollutionIndex: 35 },
  { year: 2010, pHLevel: 7.5, airQualityIndex: 63, waterPollutionIndex: 40 },
  { year: 2010, pHLevel: 6.8, airQualityIndex: 52, waterPollutionIndex: 30 },
  { year: 2010, pHLevel: 7.0, airQualityIndex: 58, waterPollutionIndex: 32 },
  { year: 2010, pHLevel: 7.3, airQualityIndex: 45, waterPollutionIndex: 28 },
  { year: 2010, pHLevel: 6.9, airQualityIndex: 58, waterPollutionIndex: 29 },
  { year: 2010, pHLevel: 7.1, airQualityIndex: 45, waterPollutionIndex: 26 },
  { year: 2010, pHLevel: 7.4, airQualityIndex: 50, waterPollutionIndex: 31 },
  { year: 2010, pHLevel: 6.7, airQualityIndex: 47, waterPollutionIndex: 33 },
  { year: 2011, pHLevel: 7.8, airQualityIndex: 53, waterPollutionIndex: 38 },
  { year: 2011, pHLevel: 7.6, airQualityIndex: 57, waterPollutionIndex: 36 },
  { year: 2011, pHLevel: 7.2, airQualityIndex: 49, waterPollutionIndex: 34 },
  { year: 2011, pHLevel: 7.1, airQualityIndex: 55, waterPollutionIndex: 39 },
  { year: 2011, pHLevel: 7.5, airQualityIndex: 61, waterPollutionIndex: 42 },
  { year: 2011, pHLevel: 7.0, airQualityIndex: 54, waterPollutionIndex: 37 },
  { year: 2011, pHLevel: 7.3, airQualityIndex: 48, waterPollutionIndex: 32 },
  { year: 2011, pHLevel: 7.6, airQualityIndex: 56, waterPollutionIndex: 40 },
  { year: 2011, pHLevel: 7.2, airQualityIndex: 51, waterPollutionIndex: 29 },
  { year: 2012, pHLevel: 7.9, airQualityIndex: 59, waterPollutionIndex: 41 },
  { year: 2012, pHLevel: 7.1, airQualityIndex: 48, waterPollutionIndex: 27 },
  { year: 2012, pHLevel: 7.5, airQualityIndex: 56, waterPollutionIndex: 38 },
  // Add more rows as needed
    ];

    setData(sampleData);
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Search
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'year',
      dataIndex: 'year',
      key: 'year',
      ...getColumnSearchProps('year'),
    },
    {
      title: 'pHLevel',
      dataIndex: 'pHLevel',
      key: 'pHLevel',
      ...getColumnSearchProps('pHLevel'),
    },
    {
      title: 'airQualityIndex',
      dataIndex: 'airQualityIndex',
      key: 'airQualityIndex',
      ...getColumnSearchProps('airQualityIndex'),
    },
    {
      title: 'waterPollutionIndex',
      dataIndex: 'waterPollutionIndex',
      key: 'waterPollutionIndex',
      ...getColumnSearchProps('waterPollutionIndex'),
    },
  ];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
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

export default Table4;
