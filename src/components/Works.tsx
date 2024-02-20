import styled from 'styled-components';
import { works } from '../db';

/* Component Style */
const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 6vh 0;
  .title {
    padding: 10px 0px;
    font-size: 2.2rem;
    font-family: 'Montserrat-Black';
  }
  @media screen and (max-width: 1240px) {
    width: 85%;
  }
`;

const Item = styled.ul`
  display: flex;
  justify-content: space-between;
  font-family: 'Pretendard-Regular';

  @media screen and (max-width: 1024px) {
    display: block;
  }
`
const ItemWrapper = styled.li`
  width: calc(50% - 20px);
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;

    & + li {margin-top: 20px;}
  }
`;
const ContetnsWrapper = styled.div`
  padding: 20px 40px;
  
  @media screen and (max-width: 640px) {
    padding: 20px;
  }

`;
const List = styled.ul`
font-size: 1.4rem;
margin: 10px 0;
  & li {
    display: flex;
    align-items: center;
    line-height: 1.3;
  } 
  & li::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #191919;
    display: block;
    margin-right: 10px;
  }
`
const Link = styled.a`
  display: inline-block;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 1.4rem;
  margin-top: 10px;
  transition: all .3s;
  font-weight: 500;
  border-radius: 10px;
  box-sizing: border-box;

  & + a {margin-left: 10px;}
  &:hover {
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    & + a {margin-left: 0px;}
  }
`

const Works = () => {
  
  return (
    <Wrapper>
      <p className="title">Works</p>
      <Item>
      {works.map((item, index) => (
        <ItemWrapper key={index}>
        <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
        <ContetnsWrapper>
          <p className='item-title'>{item.title}</p>
          <p className="item-date">{item.date} | {item.role}</p>
          <List>
            {item.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </List>
          <Link href={item.link1} target="_blank" rel="noreferrer noopener">🔗 본청 및 누리집 사이트 →</Link>
          <Link href={item.link2} target="_blank" rel="noreferrer noopener">🔗 주요기능 →</Link>
        </ContetnsWrapper>
        </ItemWrapper>
      ))}
       </Item>
    </Wrapper>
  );
};



export default Works;
