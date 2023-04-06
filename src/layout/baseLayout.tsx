import React, { FC, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import BaseHeader from 'src/components/common/baseHeader';
import BaseFooter from 'src/components/common/baseFooter';
import { Layout } from 'antd';

const { Content } = Layout;

interface ChildrenType {
  children: ReactNode;
}

const BaseLayout: FC<ChildrenType> = ({ children }) => {
  return (
    <Layout className="site-layout">
      <BaseHeader />
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        Content
      </Content>
      <BaseFooter />
    </Layout>
  );
};

export default BaseLayout;
