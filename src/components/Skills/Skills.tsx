import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { FaNode, FaReact, FaDocker, FaAws, FaGit, FaJenkins, FaServer, FaCode, FaChartLine, FaCogs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiSpring, SiGo,  SiGrafana, SiPrometheus } from 'react-icons/si';

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start;
  padding-bottom: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.25rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.primary};
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 5px;
  font-size: 0.85rem;
`;

const SkillIcon = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
`;

const SkillName = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.colors.textLight};
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        {name: "Go", icon: <SiGo/>},
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <FaNode /> },
        { name: 'Java', icon: <SiSpring /> },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Node.js', icon: <FaNode /> },
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Spring Boot', icon: <SiSpring /> },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Jenkins', icon: <FaJenkins /> },
        { name: 'Kafka', icon: <SiPrometheus /> },
        { name: 'Grafana', icon: <SiGrafana /> },
        { name: 'Prometheus', icon: <SiPrometheus /> },
        { name: 'Loki', icon: <SiPrometheus /> },
        { name: 'Git', icon: <FaGit /> },
        {name: 'Aws', icon: <FaAws/>}
      ],
    },
    {
      title: 'Practices',
      skills: [
        { name: 'CI/CD', icon: <FaCogs /> },
        { name: 'Microservices', icon: <FaServer /> },
        { name: 'RESTful APIs', icon: <FaCode /> },
        { name: 'System Monitoring', icon: <FaChartLine /> },
      ],
    },
  ];

  return (
    <Section id="skills">
      <SkillsContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </Title>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContent>
    </Section>
  );
};

export default Skills; 