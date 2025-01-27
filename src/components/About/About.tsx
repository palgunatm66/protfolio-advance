import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.textLight};
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatItem = styled(motion.div)`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.textLight};
`;

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '30%', label: 'DB Performance Improvement' },
    { number: '25%', label: 'System Performance Boost' },
  ];

  return (
    <Section id="about">
      <AboutContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Backend Developer with over 2+ years of experience in the tech industry, 
          specializing in Node.js, JavaScript (ES6+), and TypeScript. I focus on 
          developing robust backend systems, managing databases, and ensuring 
          scalable and secure application architectures. My passion lies in writing 
          clean, maintainable, and efficient code while adhering to best practices 
          and security standards.
        </Description>

        <Stats>
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </Stats>
      </AboutContent>
    </Section>
  );
};

export default About; 