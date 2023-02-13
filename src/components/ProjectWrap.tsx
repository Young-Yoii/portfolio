import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { AiFillGithub } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import Parser from 'html-react-parser';
import { ArrowItem } from './IntroItems';
// import ListButton from './ProjectListBtn';
import ProjectIntro from './ProjectIntro';

const Wrapper = styled.div`
  padding: 6vh 6vw;
  background-color: #000;
  color: #fff;
  @media screen and (max-width: 1024px) {
    padding: 3vh 6vw;
  }
`;
const Title = styled.p`
  font-size: 4rem;
  font-family: 'Montserrat-Black';
  padding-bottom: 7vh;
  @media screen and (max-width: 1024px) {
    font-size: 3.5rem;
    padding-bottom: 5vh;
  }
  @media screen and (max-width: 767px) {
    font-size: 3rem;
    padding-bottom: 3vh;
  }
`;
const WrapperInner = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const ProjectTitle = styled.div`
  width: 50%;
  img {
    width: 100%;
    border: 1px solid #000;
  }
  .item-title {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .item-date {
    font-size: 1.4rem;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    .item-wrap {
      display: flex;
      justify-content: space-between;
      padding: 20px 0px;
    }
  }
`;
const PlayerWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const ProjectDescription = styled.div`
  width: 50%;
  padding-left: 50px;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    padding-left: 0px;
    width: 100%;
  }
`;
const ProjectInfoWrap = styled.div`
  .item-title {
    font-size: 1.6rem;
    font-weight: 600;
    padding-bottom: 2px;
  }
  .item-content {
    font-size: 1.6rem;
    padding-bottom: 10px;
    color: #d4d1d1;
  }
  @media screen and (max-width: 1024px) {
    .item-content {
      padding-bottom: 20px;
    }
  }
`;
const ProjectDescWrap = styled.ul`
  padding: 8px 0px 0px 20px;
  li {
    font-size: 1.6rem;
    color: #d4d1d1;
    list-style: circle;
  }
`;

const ProjectUrl = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Noto Sans KR';
  font-size: 2rem;
  padding-top: 20px;
  width: 20vw;
  a {
    color: #fff;
    padding: 0px 0px 5px 4px;
    margin-left: 40px;
  }
  svg {
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 10px;
    margin-right: 40px;
  }
  @media screen and (max-width: 767px) {
    width: 50vw;
  }
`;

const Arrow = styled(ArrowItem)`
  transform: rotate(270deg);
  height: 50px;
`;

interface Props {
  project: {
    id: number;
    title: string;
    image: string | null;
    video: string | null;
    url: string;
    github: string;
    date: string;
    overview: string;
    members: string;
    role: string | null;
    description: string[];
  };
}

const ProjectWrap = ({ project }: Props) => {
  const [resize, setResize] = useState(0);

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const info = [
    { title: 'Overview', content: `${project.overview}` },
    { title: '제작기간', content: `${project.date}` },
    { title: '인원', content: `${project.members}` },
    { title: '역할', content: `${project.role}` },
  ];
  const url = [
    { title: 'Github', url: `${project.github}`, icon: <AiFillGithub /> },
    { title: 'Link', url: `${project.url}`, icon: <BsLink45Deg /> },
  ];

  return (
    <Wrapper>
      <Title>{project.title}</Title>
      <WrapperInner>
        <ProjectTitle>
          {project.image ? (
            <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
          ) : (
            <PlayerWrap>
              <ReactPlayer className="react-player" url={`${project.video}`} width={'100%'} height={'100%'} playing={false} muted={true} controls={true} light={false} />
            </PlayerWrap>
          )}
        </ProjectTitle>
        <ProjectDescription>
          {info.map((item, index) => (
            <ProjectInfoWrap key={index}>
              {item.content === 'null' ? null : (
                <>
                  <p className="item-title">{item.title}</p>
                  <p className="item-content" style={resize > 767 ? { whiteSpace: 'pre-wrap' } : { whiteSpace: 'normal' }}>
                    {Parser(item.content)}
                  </p>
                </>
              )}
            </ProjectInfoWrap>
          ))}
          <ProjectDescWrap>
            {project.description.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ProjectDescWrap>
          {url.map((item, index) => (
            <>
              {item.url === '' ? null : (
                <ProjectUrl key={index}>
                  {item.icon}
                  <Arrow />
                  <a href={item.url} target="_blank" rel="noreferrer" className="cursor-pointer">
                    {item.title}
                  </a>
                </ProjectUrl>
              )}
            </>
          ))}
        </ProjectDescription>
      </WrapperInner>
    </Wrapper>
  );
};

export default ProjectWrap;
