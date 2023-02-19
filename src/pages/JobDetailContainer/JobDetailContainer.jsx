import { ArrowLeftOutlined } from '@ant-design/icons';
import { Card, Col, Divider, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { useParams } from 'react-router';
import './JobDetailContainer.scss';

export const JobDetailContainer = () => {
  const { id } = useParams();
  return (
    <Col span={24} className='job-detail-container'>
      <Row gutter={[24, 24]}>
        <Col span={24} className='navigation-link'>
          <ArrowLeftOutlined />
          <span>Back</span>
        </Col>
        <Col className='job-detail' span={24}>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <span>Full Time / Berlin</span>
              <h1>Data Engineer</h1>
            </Col>
            <Divider />
          </Row>
          <Row gutter={[12, 12]}>
            <Col span={16} xs={24} sm={16} md={16}>
              DETAIL
            </Col>
            <Col span={8} xs={24} sm={8} md={8}>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt='example'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Trade_Republic_logo_2021.svg/1200px-Trade_Republic_logo_2021.svg.png'
                  />
                }
              >
                <Meta
                  title='Europe Street beat'
                  description='www.instagram.com'
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
