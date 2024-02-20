import styled from 'styled-components';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Introduce from '../components/Itroduce';
import Skills from '../components/Skills';
import ProjectIntroForm from '../components/ProjetIntroForm';
import Works from '../components/Works';
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden auto;
  padding: 0 0 70px;
`;

const About = () => {
  return (
    <Wrapper>
      <Introduce />
      <Works />
      <ProjectIntroForm />
      <Skills />
      <Experience />
    </Wrapper>
  );
};

export default About;
