import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Navigation from './components/common/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/common/Footer/Footer';
import GlobalStyle from './styles/GlobalStyle';
import Background from './components/common/Background/Background';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Background />
      <div className="container">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
