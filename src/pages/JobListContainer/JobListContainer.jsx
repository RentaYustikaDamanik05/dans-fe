import { FilterOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Divider, Input, Row } from 'antd';
import _ from 'lodash';
import React, { useState } from 'react';
import { useJob } from '../../features/jobs/hook/job.hook';
import './JobListContainer.scss';

export const JobListContainer = () => {
  const jobs = useJob();
  const [state, setState] = useState({
    description: '',
    location: '',
    full_time: '',
  });

  const handleSearhJobs = () => {
    jobs.getAll(state);
  };

  const handleSearhMoreJobs = () => {
    jobs.getAll(state);
  };

  return (
    <Col className='job-list-container' span={24}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col span={8} sm={24} xs={24}>
              <span>Job Description</span>
              <Input
                placeholder='filter by title, benefits, companies, expertise'
                prefix={<FilterOutlined />}
              />
            </Col>
            <Col span={8} sm={24} xs={24}>
              <span>Location</span>
              <Input
                placeholder='filter by city, state, zip code or country'
                prefix={<FilterOutlined />}
              />
            </Col>
            <Col span={4} className='align-bottom' sm={12} xs={12}>
              <Checkbox
                onChange={(e) =>
                  setState({ ...state, full_time: e.target.checked })
                }
              >
                Checkbox
              </Checkbox>
            </Col>
            <Col span={4} className='align-bottom' sm={12} xs={12}>
              <Button type='primary' onClick={handleSearhJobs}>
                Search
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24} className='job-list-wrapper'>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <h1>JOB LIST</h1>
            </Col>
            <Divider />
            {_.map([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => {
              return (
                <Col span={24}>
                  <Card
                    style={{
                      width: '100%',
                    }}
                  >
                    <h3 className='job-title'>Data Engineer</h3>
                    <span className='job-meta'>Traffic Republic - </span>
                    <strong className='job-status'>Full Time</strong>
                  </Card>
                </Col>
              );
            })}
            <Col span={24}>
              <Button
                type='primary'
                className='width-100'
                onClick={handleSearhMoreJobs}
              >
                More Jobs
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
