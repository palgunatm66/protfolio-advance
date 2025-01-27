import { motion } from 'framer-motion';
import styled from 'styled-components';
import homeBackground from '../../assets/home.jpg';  // Import the image

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${homeBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2
    background: linear-gradient(to bottom, rgba(36, 36, 36, 0.8), rgba(36, 36, 36, 0.95));
    z-index: 1;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  position: relative;
  z-index: 2;
`;

const MainTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  padding-bottom:2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

const Letter = styled(motion.span)`
  display: inline-block;
  margin: 0 -0.05em;
`;

const SubTitle = styled(motion.h2)`
  font-size: 2rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-block;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  margin-top: 2rem;
  font-weight: 600;
  transition: transform 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MainTitle>
          {"Palguna".split("").map((char, index) => (
            <Letter
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 10
              }}
            >
              {char}
            </Letter>
          ))}
          {" "}
          {"TM".split("").map((char, index) => (
            <Letter
              key={`tm-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (index + 7) * 0.1, // 7 is the length of "Palguna" + 1 for space
                type: "spring",
                stiffness: 120,
                damping: 10
              }}
            >
              {char}
            </Letter>
          ))}
        </MainTitle>
        <SubTitle
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            Software Engineer
          </motion.span>
          {" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          >
            -
          </motion.span>
          {" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.6 }}
          >
            Back End Developer
          </motion.span>
        </SubTitle>
        <DownloadButton
          href="../../../public/CV.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </DownloadButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 