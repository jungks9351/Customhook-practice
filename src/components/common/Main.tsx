import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Main = ({ children }: { children: ReactNode }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default Main;
