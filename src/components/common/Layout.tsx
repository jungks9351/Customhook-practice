import { ReactNode } from 'react';
import styled from 'styled-components';

const Layout = ({ children }: { children: ReactNode }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

const LayoutWrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export default Layout;
