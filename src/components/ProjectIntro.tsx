import styled from 'styled-components';

import NavButton from './NavButton';
import ListButton from './ProjectListBtn';
import { Nadoddam, MergeCake } from '../pages/Projects';

const Wrapper = styled.div`
  padding: 6vh 6vw;
  color: #000;
  justify-content: space-between;
  font-size: 1.6rem;
  font-family: 'Pretendard-Regular';
`;
const Title = styled.div`
  font-size: 5rem;
  font-family: 'Montserrat-Black', 'Pretendard-Black';
  padding-bottom: 4vh;
  @media screen and (max-width: 767px) {
    font-size: 4rem;
  }
`;
const ListWrap = styled.ul`
  border-bottom: 1px solid #000;
  padding: 30px 0px;
  p {
    font-size: 3rem;
    font-family: 'Montserrat-Black';
    padding-bottom: 20px;
  }
`;

export const nav = [
  {
    title: '01 Team Project',
    list: [
      { id: 1, title: <NavButton link="/project/nadoddam" title="나도땀" />, content: <Nadoddam /> },
      { id: 2, title: <NavButton link="/project/mergecake" title="$merge cake" />, content: <MergeCake /> },
    ],
  },
  {
    title: '02 Personal Project',
    list: [
      { id: 3, title: <NavButton link="/project/thumbnail" title="썸네일 메이커" />, content: <Nadoddam /> },
      { id: 4, title: <NavButton link="/project/yflix" title="YFLIX" />, content: <Nadoddam /> },
      { id: 5, title: <NavButton link="/project/pfver1" title="Portfolio ver.1" />, content: <Nadoddam /> },
    ],
  },
  {
    title: '03 Publishing',
    list: [
      { id: 7, title: <NavButton link="/project/blend" title="BLEND" />, content: <Nadoddam /> },
      { id: 8, title: <NavButton link="/project/sunsetbeer" title="선셋맥주" />, content: <Nadoddam /> },
    ],
  },
];
const ProjectIntro = () => {
  return (
    <Wrapper>
      <Title>Project List</Title>
      {nav.map((item, index) => {
        return (
          <ListWrap key={`item-${index}`}>
            <p>{item.title}</p>
            <ListButton key={index} list={item.list} />
          </ListWrap>
        );
      })}
    </Wrapper>
  );
};

export default ProjectIntro;
