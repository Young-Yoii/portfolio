import styled from 'styled-components';
import Header from '../components/Header';
import ProjectForm from '../components/ProjectForm';
import { project } from '../db';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow-x: hidden;
`;

//memo : team project
export const MergeCake = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectForm project={project[3]} />
    </Wrapper>
  );
};

export const Nadoddam = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectForm project={project[1]} />
    </Wrapper>
  );
};

//memo : personal project
export const Yflix = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectForm project={project[2]} />
    </Wrapper>
  );
};
export const Thumbnail = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectForm project={project[0]} />
    </Wrapper>
  );
};

//memo : publishing
export const Blend = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectForm project={project[4]} />
    </Wrapper>
  );
};
export const Sunset = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectForm project={project[5]} />
    </Wrapper>
  );
};
