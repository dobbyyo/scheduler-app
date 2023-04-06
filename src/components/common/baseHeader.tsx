import React from 'react';
import styled from '@emotion/styled';
import { Layout, Space } from 'antd';

const { Header } = Layout;

const Wrapper = styled(Header)`
  padding: 0;
  background-color: ${(props) => props.theme.mode.background};
  display: flex;
  justify-content: space-around;
`;

const BaseHeader = () => {
  return (
    <Wrapper>
      <div>
        <div>목록</div>
      </div>
      <div>
        <div>너의 선택은??</div>
      </div>
      <div>
        <div>Logo</div>
      </div>
    </Wrapper>
  );
};

export default BaseHeader;
