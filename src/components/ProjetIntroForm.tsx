import styled from 'styled-components';
import { project } from '../db';
import { Link } from 'react-router-dom';

/* Component Style */
const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 6vh 0;
  @media screen and (max-width: 1240px) {
    width: 85%;
  }
`;
const WrapperInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: 'Pretendard-Regular';
  @media screen and (max-width: 940px) {
    justify-content: center;
  }
`;
const Title = styled.div`
  font-size: 5rem;
  font-family: 'Montserrat-Black';
  padding-bottom: 6vh;
  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }
`;
const ItemWrapper = styled(Link)`
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  transition: all 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.18);
  }

  .item-title {
    font-size: 1.6rem;
    padding-bottom: 5px;
  }
  .item-date {
    font-size: 1.4rem;
    color: gray;
    padding-bottom: 5px;
  }
  .item-member {
    font-size: 1.4rem;
    padding: 2px;
    border-radius: 5px;
    background-color: #fe6c473d;

    &.team {
      background-color: #5bff6b66;
    }
  }
`;
const ImageWrapper = styled.div`
  width: 400px;
  height: 250px;
  overflow: hidden;
  border-bottom: 1px solid gray;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  @media screen and (max-width: 767px) {
    width: auto;
  }
`;
const ContetnsWrapper = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;
const LinkWrap = styled.a`
  display: block;
  color: gray;
  text-decoration: underline;
  font-size: 1.4rem;
  padding-bottom: 5px;
`;
const StackItem = styled.div`
  padding-top: 10px;
  font-size: 1.4rem;
`;
interface StackProps {
  stack: any[];
}
const ProjectIntroForm = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <WrapperInner>
        {project.map((item, index) => (
          <ItemWrapper to={`/project/${item.link}`} key={index}>
            <ImageWrapper>
              <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
            </ImageWrapper>
            <ContetnsWrapper>
              <p className="item-title">{item.title}</p>
              <p className="item-date">{item.date}</p>
              <LinkWrap href={`${item.github}`} target="_blank" rel="noreferrer">
                github.com
              </LinkWrap>
              {item.url && (
                <LinkWrap href={item.url} rel="noreferrer">
                  {item.url}
                </LinkWrap>
              )}
              <span className={'item-member' + (item.category === '팀 프로젝트' ? ' team' : '')}>{item.category}</span>
              <Stack stack={item.stack} />
            </ContetnsWrapper>
          </ItemWrapper>
        ))}
      </WrapperInner>
    </Wrapper>
  );
};

const Stack = ({ stack }: StackProps) => {
  return (
    <StackItem>
      {stack.map((item, index) => (
        <span key={index}>{item}, </span>
      ))}
    </StackItem>
  );
};
export default ProjectIntroForm;
