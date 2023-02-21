import styled from 'styled-components';
import Header from '../components/Header';
import ProjectIntroForm from './../components/ProjetIntroForm';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow-x: hidden;
`;

const ProjectList = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectIntroForm />
    </Wrapper>
  );
};

export default ProjectList;
