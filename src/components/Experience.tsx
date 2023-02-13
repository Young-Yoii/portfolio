import { experiece } from '../db';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #fff;
  padding: 6vh 6vw;
  font-size: 1.6rem;
  font-family: 'Pretendard-Regular';
  line-height: 2.4rem;
  .title {
    font-size: 3rem;
    font-family: 'Montserrat-Black';
    font-weight: bold;
    @media screen and (max-width: 767px) {
      font-size: 2rem;
    }
  }
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
    color: #d7d4d4;
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
