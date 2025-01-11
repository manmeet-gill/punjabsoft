import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #f8f9fa;
  padding: 40px 20px;
  text-align: left;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #212529;
  margin-bottom: 15px;
`;

export const Link = styled.a`
  display: block;
  color: #007bff;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

export const IconWrapper = styled.a`
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`;
