import styled from 'styled-components';
import Header from '../components/Header';
import ProjectIntro from '../components/ProjectIntro';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(#dee3eb, #fe6c47);
`;

const ProjectList = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectIntro />
    </Wrapper>
  );
};

export default ProjectList;
