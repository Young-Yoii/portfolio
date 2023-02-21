import styled from 'styled-components';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Introduce from '../components/Itroduce';
import Skills from '../components/Skills';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden auto;
`;

const About = () => {
  return (
    <Wrapper>
      <Header project={false} />
      <Introduce />
      <Skills />
      <Experience />
    </Wrapper>
  );
};

export default About;
