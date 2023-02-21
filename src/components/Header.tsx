import styled, { css } from 'styled-components';
import NavButton from './NavButton';

const Wrapper = styled.div<{ project: boolean }>`
  background-color: #5bff6b;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat-Black';

  ${(props) =>
    props.project &&
    css`
      background: #fe6c47;
    `}
`;
const NavWrapper = styled.ul`
  display: flex;
  width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`;

interface Props {
  project: boolean;
}

const Header = ({ project }: Props) => {
  const nav = [{ title: <NavButton link="/" title="About" /> }, { title: <NavButton link="/project" title="Project" /> }];

  return (
    <Wrapper project={project}>
      <NavWrapper className="cursor-pointer">
        {nav.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </NavWrapper>
    </Wrapper>
  );
};
export default Header;
