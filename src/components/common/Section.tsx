import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`;

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  
  &.about {
    background: linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
  }
  
  &.experience {
    background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
  }
  
  &.skills {
    background: linear-gradient(225deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2));
  }
  
  &.projects {
    background: linear-gradient(315deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
  }
`;

const ParticlesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <BackgroundWrapper className={id}>
      <ParticlesBackground>
        {/* Add unique particle configurations for each section */}
      </ParticlesBackground>
      <StyledSection
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </StyledSection>
    </BackgroundWrapper>
  );
};

export default Section; 