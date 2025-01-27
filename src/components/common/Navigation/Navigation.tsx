import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import smileImage from '../../../assets/smile looking right.png';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(36, 36, 36, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

const NavLinks = styled(motion.ul)`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 18, 18, 0.98);
  padding-top: 5rem;
  z-index: 98;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;

const NavItem = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  color: ${props => props.theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const MobileNavItem = styled(NavItem)`
  font-size: 1.8rem;
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  padding: 0.3rem 0;
  width: 100%;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Experience', to: 'experience' },    
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <NavContainer>
      <NavContent>
        <Logo
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
        >
          <LogoImage src={smileImage} alt="Logo" />
        </Logo>
        <NavLinks>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavItem
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-70}
              >
                {item.title}
              </NavItem>
            </li>
          ))}
        </NavLinks>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </MenuButton>
      </NavContent>

      {isOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
        >
          {navItems.map((item) => (
            <MobileNavItem
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              offset={-70}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </MobileNavItem>
          ))}
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navigation; 