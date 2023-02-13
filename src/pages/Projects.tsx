import styled from 'styled-components';
import Header from '../components/Header';
import ProjectWrap from '../components/ProjectWrap';
import { teamProjectList, personalProjectList, publishingProjectList } from '../db';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: #000;
`;

//memo : team project
export const MergeCake = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectWrap project={teamProjectList[0]} />
    </Wrapper>
  );
};

export const Nadoddam = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectWrap project={teamProjectList[1]} />
    </Wrapper>
  );
};

//memo : personal project
export const Yflix = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectWrap project={personalProjectList[0]} />
    </Wrapper>
  );
};
export const Thumbnail = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectWrap project={personalProjectList[1]} />
    </Wrapper>
  );
};
export const Portfolio = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectWrap project={personalProjectList[2]} />
    </Wrapper>
  );
};

//memo : publishing
export const Blend = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectWrap project={publishingProjectList[0]} />
    </Wrapper>
  );
};
export const Sunset = () => {
  return (
    <Wrapper>
      <Header project={true} />
      <ProjectWrap project={publishingProjectList[1]} />
    </Wrapper>
  );
};
