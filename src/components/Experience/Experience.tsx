import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';

const ExperienceContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    opacity: 0.3;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    padding-left: 45px;
  }
`;

const TimelineDot = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    left: 20px;
  }
`;

const TimelineContent = styled(motion.div)`
  width: 45%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(10px);

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const CompanyName = styled(motion.h3)`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Role = styled(motion.h4)`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 1rem;
`;

const Duration = styled(motion.p)`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textLight};
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const CategoryTitle = styled(motion.h5)`
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
  margin: 1.5rem 0 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
`;

const Achievement = styled(motion.li)`
  font-size: 0.95rem;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.primary};
  }
`;

const Experience = () => {
  const experiences = [
    {
      company: 'Exozen',
      position: 'Backend Developer',
      period: '2022 - Present',
      categories: {
        'CAFM Systems': [
          'Fire Extinguisher Management System with real-time monitoring and alerts',
          'Visitor Management System with automated check-in/out processes',
          'Asset and Inventory Management System with tracking and reporting'
        ],
        'Infrastructure & DevOps': [
          'Implemented message queuing using Kafka for distributed systems',
          'Set up CI/CD pipelines using Jenkins for automated deployments',
          'Developed microservices using Go and Node.js'
        ],
        'Monitoring & Performance': [
          'Implemented monitoring solutions using Grafana, Prometheus, and Loki',
          'Improved database performance by 30% through optimization',
          'Enhanced system scalability using containerization with Docker'
        ]
      }
    }
  ];

  return (
    <Section id="experience">
      <ExperienceContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </Title>
        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <TimelineDot
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
              <TimelineContent
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <CompanyName
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {exp.company}
                </CompanyName>
                <Role
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  {exp.position}
                </Role>
                <Duration
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {exp.period}
                </Duration>
                {Object.entries(exp.categories).map(([category, achievements], catIndex) => (
                  <div key={category}>
                    <CategoryTitle
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + catIndex * 0.1 }}
                    >
                      {category}
                    </CategoryTitle>
                    <ul>
                      {achievements.map((achievement, achIndex) => (
                        <Achievement
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.8 + catIndex * 0.1 + achIndex * 0.1 }}
                        >
                          {achievement}
                        </Achievement>
                      ))}
                    </ul>
                  </div>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContent>
    </Section>
  );
};

export default Experience; 