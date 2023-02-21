import { experiece } from '../db';
import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.div`
  padding: 3vh 0;
  width: 70%;
  margin: 0 auto;
  font-size: 1.6rem;
  font-family: 'Pretendard-Regular';
  line-height: 2.4rem;
  .title {
    padding: 10px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.18);
    font-size: 2.2rem;
    font-family: 'Montserrat-Black';
  }
  @media screen and (max-width: 767px) {
    width: 85%;
`;
const List = styled.ul`
  margin: 10px 0px;
`;
const ListItem = styled.li`
  padding-top: 20px;
  .item-title {
    font-weight: 600;
  }
  .item-date {
    font-size: 1.4rem;
    color: gray;
  }
  .item-desc {
    color: gray;
  }
`;

const Experience = () => {
  return (
    <Wrapper>
      <p className="title">Experience</p>
      <List>
        {experiece.map((item, index) => (
          <ListItem key={index}>
            <p className="item-title">{item.title}</p>
            <p className="item-date">{item.date}</p>
            <p className="item-desc">{item.description}</p>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Experience;
