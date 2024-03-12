import React from 'react';
import { Layout, Menu } from 'antd';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu style={{ background: '#ffcc00' }} mode="horizontal" defaultSelectedKeys={['1']}>
  <Menu.Item key="1" style={{ fontSize: '20px' }}>Home</Menu.Item>
  <Menu.Item key="2" onClick={() => scrollToElement('tables')} style={{ fontSize: '20px' }}>
    Visualise
  </Menu.Item>
  <Menu.Item key="3" onClick={() => scrollToElement('visualise')} style={{ fontSize: '20px' }}>
    Tables
  </Menu.Item>
</Menu>





      </Header>
      <Content style={{ padding: '0 50px' }}>
        
        <div className="site-layout-content">
          <h1> Welcome to EnviroWeather</h1>
          <p>"EnviroWeather: Your go-to destination for clear and insightful environmental and weather information. <br></br> Here we took a sample dataset to show the table format and the visualisation of different features of the dataset using ant design<br></br>There are 10 cards below which are distributed as 5 of them are the cards which stored the data of the table information and other 5 cards stores the visualisation part of the datset given<br></br>The sample dataset taken here are the weather data with the info of temperatureC,temperatureF,precipitation,humidity.</p>
        </div>
        <div id="visualise">
        <h1>Tabular-Data</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/table1">
          <Card title="Table 1" style={{ width: 300, margin: 20 }}
          cover={<img alt="Table 1" src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png" />}>
          
            {/* Table 1 content */}
          </Card>
        </Link>
        <Link to="/table2">
          <Card title="Table 2" style={{ width: 300, margin: 20 }}
          cover={<img alt="Table 1" src="http://www.ceder-provence.org/wp-content/uploads/2018/10/ozone-33227_960_720.png" />}>
            {/* Table 2 content */}
          </Card>
        </Link>
        <Link to="/table3">
          <Card title="Table 3" style={{ width: 300, margin: 20 }}
          cover={<img alt="Table 1" src="https://cdn-icons-png.flaticon.com/512/2680/2680022.png" />}>
            {/* Table 3 content */}
          </Card>
        </Link>
        <Link to="/table4">
          <Card title="Table 4" style={{ width: 300, margin: 20 }}
          cover={<img alt="Table 1" src="https://tse2.mm.bing.net/th?id=OIP.IkAoD4eJ5bGQQT9NlCBUcgHaHb&pid=Api&P=0&h=180" />}
          >
            {/* Table 4 content */}
          </Card>
        </Link>
        <Link to="/table5">
          <Card title="Table 5" style={{ width: 300, margin: 20 }}
          cover={<img alt="Table 1" src="https://cdn4.iconfinder.com/data/icons/environment-47/64/ICEBERG-glacier-polar-north_pole-melting-1024.png" />}>
            {/* Table 5 content */}
          </Card>
        </Link>
      </div>
        </div>
        <div id="tables">
        <h1>Visualization-Data</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/visualization1">
          <Card title="Visualization 1"
            style={{ width: 300, margin: 20 }}
            cover={<img alt="Visualization 1" src="https://th.bing.com/th/id/OIP.mx5GEzzu12bAg208PbjrAQHaFZ?rs=1&pid=ImgDetMain" />}>
            {/* Visualization 1 content */}
          </Card>
        </Link>
        <Link to="/visualization2">
          <Card title="Visualization 2" style={{ width: 300, margin: 20 }}
           cover={<img alt="Visualization 1" src="https://www.statology.org/wp-content/uploads/2021/07/scatterTwo1.png" />}>
            {/* Visualization 2 content */}
          </Card>
        </Link>
        <Link to="/visualization3">
          <Card title="Visualization 3" style={{ width: 300, margin: 20 }}
           cover={<img alt="Visualization 1" src="https://media.geeksforgeeks.org/wp-content/uploads/20220914112521/PieChart.png" />}>
            {/* Visualization 3 content */}
          </Card>
        </Link>
        <Link to="/visualization4">
          <Card title="Visualization 4" style={{ width: 300, margin: 20 }}
           cover={<img alt="Visualization 1" src="https://th.bing.com/th/id/OIP.pWc4QWrr4PfJVFhzOyb-iAHaHa?rs=1&pid=ImgDetMain" />}>
            {/* Visualization 4 content */}
          </Card>
        </Link>
        <Link to="/visualization5">
          <Card title="Visualization 5" style={{ width: 300, margin: 20 }}
           cover={<img alt="Visualization 1" src="https://statisticsglobe.com/wp-content/uploads/2021/06/figure-2-plot-draw-histogram-with-different-colors-in-r.png" />}>
            {/* Visualization 5 content */}
          </Card>
        </Link>
      </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developed Using Ant Design</Footer>
    </Layout>
  );
}

export default HomePage;
