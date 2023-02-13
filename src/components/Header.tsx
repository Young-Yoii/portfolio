import styled, { css } from 'styled-components';
import { useState } from 'react';

import NavButton from './NavButton';
import ChennelIcon from './ChennelIcon';
// import Projects from './Projects';

const Wrapper = styled.div<{ project: boolean }>`
  background-color: #5bff6b;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6vw;

  ${(props) =>
    props.project &&
    css`
      background: #fe6c47;
    `}// @media screen and (max-width: 1440px) {
  //   height: 6vh;
  // }
  // @media screen and (max-width: 767px) {
  //   height: 5vh;
  // }
`;
const ContentsWrappwer = styled.div`
  width: 100%;
  height: 65vh;
  padding: 25px;
  overflow: auto;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    padding: 12px;
    height: 100%;
  }
`;

const NavWrapper = styled.ul`
  display: flex;
  .clicked {
    button {
      color: var(--main-color);
    }
  }
`;

interface Props {
  project: boolean;
}

const Header = ({ project }: Props) => {
  const [selectBtn, setSelectBtn] = useState(0);
  const nav = [{ title: <NavButton link="/" title="Home" /> }, { title: <NavButton link="/about" title="About" /> }, { title: <NavButton link="/project" title="Project" /> }];

  return (
    <Wrapper project={project}>
      <NavWrapper className="cursor-pointer">
        {nav.map((item, index) => {
          return (
            <li key={index} className={index === selectBtn ? 'clicked' : ''}>
              {item.title}
            </li>
          );
        })}
      </NavWrapper>
    </Wrapper>
  );
};
export default Header;
