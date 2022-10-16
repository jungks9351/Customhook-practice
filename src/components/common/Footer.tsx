import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>@Copyright @2022 KimJungJin</p>
      <p>
        Reference{' '}
        <a href='https://usehooks.com' target='_blank' rel='noreferrer'>
          https://usehooks.com
        </a>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 20px 0;

  text-align: center;
`;

export default Footer;
