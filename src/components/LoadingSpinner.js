import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';



export default () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <Spin indicator={antIcon} />
  );
}