import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkList = () => {
  const navLinks = [{ id: 1, path: '/useLocalStorage', name: 'useLocalStorage' }];

  return (
    <LinkContainer>
      <LinkListWrapper>
        {navLinks.map((link, idx) => (
          <LinkItem key={idx}>
            <StyledLink to={link.path}>{`${link.id}. ${link.name}`}</StyledLink>
          </LinkItem>
        ))}
      </LinkListWrapper>
    </LinkContainer>
  );
};

const LinkContainer = styled.nav`
  padding: 30px;
`;

const LinkListWrapper = styled.ul``;

const LinkItem = styled.li`
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export default LinkList;
