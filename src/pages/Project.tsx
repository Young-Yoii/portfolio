import styled from 'styled-components';
import Header from '../components/Header';
import ProjectIntro from '../components/ProjectIntro';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(#dee3eb, #fe6c47);
`;

const Project = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectIntro />
    </Wrapper>
  );
};

export default Project;
