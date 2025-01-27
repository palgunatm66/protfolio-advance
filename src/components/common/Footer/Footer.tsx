import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 4rem;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  max-width: ${props => props.theme.breakpoints.desktop};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.textLight};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink
            href="https://github.com/palgunatm66"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/palgunatm"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="mailto:palgunatm66@gmail.com"
            whileHover={{ y: -5 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {currentYear} Palguna TM. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 