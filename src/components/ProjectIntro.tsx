import styled from 'styled-components';

import NavButton from './NavButton';
import ListButton from './ProjectListBtn';
import { Nadoddam, MergeCake } from '../pages/Projects';

const Wrapper = styled.div`
  padding: 6vh 6vw 0 6vw;
  color: #fff;
  justify-content: space-between;
  .title {
    font-size: 3rem;
    font-weight: bold;
    @media screen and (max-width: 1024px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 767px) {
      font-size: 1.6rem;
    }
  }
  font-size: 1.6rem;
  color: #000;
  // @media screen and (max-width: 1024px) {
  //   padding: 30px 80px;
  // }
  //   @media screen and (max-width: 767px) {
  //     width: 100%;
  //     height: 100%;
  //     position: sticky;
  //     z-index: 9;
  //     font-size: 1.4rem;
  //   }
`;
const Title = styled.div`
  font-size: 6rem;
  font-family: 'Montserrat-Black';
  padding-bottom: 4vh;
  @media screen and (max-width: 767px) {
    font-size: 5rem;
  }
`;
// const WrapperInner = styled.div`
//   margin: 0 aulink;
//   display: flex;
//   flex-direction: column;
//   background-color: #fff;
//   border: 2px solid var(--main-color);
//   box-sizing: border-box;
//   @media screen and (max-width: 767px) {
//     height: 100%;
//   }
// `;
const ContentsWrappwer = styled.div`
  width: 100%;
  height: 65vh;
  padding: 25px;
  overflow: aulink;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    padding: 12px;
    height: 100%;
  }
`;
const Header = styled.div`
  background-color: #000;
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1440px) {
    height: 6vh;
  }
  @media screen and (max-width: 767px) {
    height: 5vh;
  }
`;
const TapWrapper = styled.ul`
  .clicked {
    Button {
      color: var(--main-color);
    }
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
const ListWrapInner = styled.ul`
  li {
    padding: 10px 0px;
  }
`;
const ProjectButton = styled.div``;

interface Props {
  list: any[];
}

export const nav = [
  {
    title: '01 TeamProject',
    list: [
      { id: 1, title: <NavButton link="/project/nadoddam" title="나도땀" />, content: <Nadoddam /> },
      { id: 2, title: <NavButton link="/project/mergecake" title="merge cake" />, content: <MergeCake /> },
    ],
  },
  {
    title: '02 Personal Project',
    list: [
      { id: 3, title: <NavButton link="/project/thumbnail" title="썸네일 메이커" />, content: <Nadoddam /> },
      { id: 4, title: <NavButton link="/project/yflix" title="Yflix" />, content: <Nadoddam /> },
      { id: 5, title: <NavButton link="/project/pfver1" title="Portfolio ver.1" />, content: <Nadoddam /> },
    ],
  },
  {
    title: '03 Publishing',
    list: [
      { id: 7, title: <NavButton link="/project/blend" title="Blend" />, content: <Nadoddam /> },
      { id: 8, title: <NavButton link="/project/sunsetbeer" title="선셋맥주" />, content: <Nadoddam /> },
    ],
  },
];
const ProjectIntro = () => {
  return (
    <Wrapper>
      <Title>Project List</Title>
      <TapWrapper className="cursor-pointer">
        {nav.map((item, index) => {
          return (
            <ListWrap key={`item-${index}`}>
              <p>{item.title}</p>
              <ListButton key={index} list={item.list} />
            </ListWrap>
          );
        })}
      </TapWrapper>
    </Wrapper>
  );
};

export default ProjectIntro;
