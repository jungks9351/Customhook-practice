import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>CustomHooks Practice</Title>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  padding: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
`;

export default Header;
