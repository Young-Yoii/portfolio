import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';
import { AiFillGithub } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';

const Wrapper = styled.div`
  width: 70%;
  padding: 6vh 0;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;
const Title = styled.p`
  font-size: 4rem;
  font-family: 'Montserrat-Black', 'Pretendard-Black';
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
const ContentsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const ContentItem = styled.div`
  width: 48%;
  img {
    width: 100%;
    height: 91%;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.18);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    border-radius: 10px;
  }
  p {
    font-size: 1.4rem;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;
const PlayerWrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 10px;
  overflow: hidden;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const DescriptionWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-family: 'Pretendard-Regular';
  font-size: 1.6rem;
  line-height: 2.3rem;
  .item-title {
    font-size: 1.8rem;
    font-weight: 600;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.18);
  }
  @media screen and (max-width: 1024px) {
    padding-left: 0px;
    width: 100%;
  }
`;
const Info = styled.div`
  padding: 10px 0px;
  .item-content {
    padding: 10px 0px;
  }
`;
const Part = styled.div`
  padding: 10px 0px;
  ul {
    padding: 10px 20px;
  }
  li {
    font-size: 1.6rem;
    list-style: circle;
  }
`;
const Stack = styled.div`
  padding: 10px 0px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0px;
  }
  li {
    margin: 5px 20px 0px 0px;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.18);
    border-radius: 10px;
  }
`;
const UrlWrap = styled.div`
  padding-bottom: 20px;
`;
const ProjectUrl = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  font-size: 1.8rem;
  font-weight: bold;
  svg {
    border: 1px solid #fff;
    border-radius: 50%;
    padding-right: 5px;
  }
`;

interface Props {
  project: {
    id: number;
    title: string;
    link: string;
    image: string;
    video: string | null;
    github: string;
    url: string | null;
    date: string;
    members: string;
    overview: string;
    role: string | null;
    stack: string[];
    category: string;
    description: string[];
    review: string[];
  };
}

const ProjectWrap = ({ project }: Props) => {
  const info = [
    { title: 'Overview', content: `${project.overview}` },
    { title: '제작기간', content: `${project.date}` },
    { title: '인원', content: `${project.members}` },
    { title: '역할', content: `${project.role}` },
  ];
  const url = [
    { title: '깃허브 링크', url: `${project.github}`, icon: <AiFillGithub /> },
    { title: '서비스 링크', url: `${project.url}`, icon: <BsLink45Deg /> },
  ];

  return (
    <Wrapper>
      <Title>{project.title}</Title>
      <ContentsWrap>
        <ContentItem>
          <p>메인화면</p>
          {project.image && <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />}
        </ContentItem>
        <ContentItem>
          <p>시연영상</p>
          <PlayerWrap>
            <ReactPlayer className="react-player" url={`${project.video}`} width={'100%'} height={'100%'} playing={false} muted={true} controls={true} light={false} />
          </PlayerWrap>
        </ContentItem>
      </ContentsWrap>
      <DescriptionWrap>
        <UrlWrap>
          {url.map((item, index) => (
            <>
              {item.url === '' ? null : (
                <ProjectUrl key={index}>
                  {item.icon}
                  <a href={item.url} target="_blank" rel="noreferrer" className="cursor-pointer">
                    {item.title}
                  </a>
                </ProjectUrl>
              )}
            </>
          ))}
        </UrlWrap>
        {info.map((item, index) => (
          <>
            {item.content === 'null' ? null : (
              <Info key={index}>
                <p className="item-title">{item.title}</p>
                <p className="item-content">{item.content}</p>
              </Info>
            )}
          </>
        ))}
        <Stack>
          <p className="item-title">사용한 기술 스택</p>
          <ul>
            {project.stack.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </Stack>
        <Part>
          <p className="item-title">담당한 파트</p>
          <ul>
            {project.description.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </Part>
        <Part>
          <p className="item-title">느낀 점</p>
          <ul>
            {project.review.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </Part>
      </DescriptionWrap>
    </Wrapper>
  );
};

export default ProjectWrap;
