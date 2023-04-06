import React from 'react';
import styled from '@emotion/styled';
import { Layout, Space } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Wrapper = styled(Footer)`
  padding: 0;
  background-color: ${(props) => props.theme.mode.background};
`;
const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const BaseFooter = () => {
  return (
    <Wrapper>
      <div>만든이 Dobby</div>
    </Wrapper>
  );
};

export default BaseFooter;
