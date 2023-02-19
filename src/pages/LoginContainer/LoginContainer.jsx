import { Button, Card, Col, Input, Row } from 'antd';
import React, { useState } from 'react';
import { useAuth } from '../../features/auth/hook/auth.hook';
import './LoginContainer.scss';

export const LoginContainer = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const auth = useAuth();

  const handleLogin = () => {
    auth.login({ username: state?.username, password: state?.password });
  };

  return (
    <Col className='login-container' span={24}>
      <Row gutter={[24, 24]} className='login-container--wrapper'>
        <Col className='login-container--wrapper-card' span={12}>
          <Card title='LOGIN' bordered={false}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Input
                  placeholder='Input username'
                  onChange={(e) =>
                    setState({ ...state, username: e.target.value })
                  }
                  value={state?.username}
                />
              </Col>
              <Col span={24}>
                <Input.Password
                  placeholder='Input password'
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                  value={state?.password}
                />
              </Col>
              <Col span={24}>
                <Button type='primary' onClick={handleLogin}>
                  Login
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
