import { Row, Col } from "antd";
import { FooterWrapper, Title, Link, SocialIcons, IconWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Row justify="space-between">
        <Col lg={6} md={12} sm={24}>
          <Title>Contact</Title>
          <p>We'd love to hear from you! Feel free to reach out.</p>
          <Link href="mailto:info@punjabsoft.com">info@punjabsoft.com</Link>
        </Col>

        <Col lg={6} md={12} sm={24}>
          <Title>Address</Title>
          <p>PunjabSoft Limited</p>
          <p>Patiala, Punjab</p>
          <p>India</p>
        </Col>

        <Col lg={6} md={12} sm={24}>
          <Title>Quick Links</Title>
          <Link href="/">About Us</Link>
          <Link href="/">Careers</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </Col>

        <Col lg={6} md={12} sm={24}>
          <Title>Follow Us</Title>
          <SocialIcons>
            <IconWrapper href="https://github.com/" target="_blank">
              <img src="../../../img/svg/github.svg" alt="GitHub" />
            </IconWrapper>
            <IconWrapper href="https://twitter.com/" target="_blank">
              <img src="../../../img/svg/twitter.svg" alt="Twitter" />
            </IconWrapper>
            <IconWrapper href="https://linkedin.com/" target="_blank">
              <img src="../../../img/svg/linkedin.svg" alt="LinkedIn" />
            </IconWrapper>
          </SocialIcons>
        </Col>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
