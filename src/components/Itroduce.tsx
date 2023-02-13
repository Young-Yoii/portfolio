import styled from 'styled-components';
import { ArrowItem } from './IntroItems';

const Wrapper = styled.div`
  background: linear-gradient(#dfe2eb, #bffad0, #93fcb1, #000);
  box-sizing: border-box;
  color: #000;
  padding: 6vh 6vw 11vh 6vw;
  // display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1440px) {
    padding: 6vh 5vw 11vh 5vw;
  }
  @media screen and (max-width: 767px) {
    padding: 4vh 5vw 11vh 5vw;
  }
`;
const Title = styled.div`
  font-size: 5rem;
  font-family: 'Montserrat-Black';
  padding-bottom: 3vh;
  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }
`;
const Arrow = styled(ArrowItem)`
  transform: rotate(270deg);
  background-color: #000;
  width: 2px;
  &::after,
  &::before {
    background-color: #000;
    height: 2px;
  }
`;
const Contents = styled.div`
  font-size: 1.6rem;
  font-family: 'Noto Sans KR';
  span {
    font-size: 2rem;
    font-weight: 600;
  }
  @media screen and (max-width: 767px) {
    span {
      font-size: 1.8rem;
    }
  }
`;
const ContentsInner = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    .mob {
      display: none;
    }
  }
`;

const Introduce = () => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      {/* <Arrow /> */}
      <Contents>
        <span>"안녕하세요. 좋은 코드를 위해 고민하고 노력하는 조가영입니다."</span> <br />
        <br />
        <ContentsInner>
          <p>
            퍼블리싱을 하며 화면을 그리는 것을 넘어 웹을 사용하는 많은 사용자들에게 <br className="mob" />
            더 나은 경험과 서비스를 제공하고 싶다는 욕심이 생겼고, 그렇게 개발을 시작하게 되었습니다. <br />
            <br />
            여러 가지 웹, 앱을 사용하며 사소한 불편함을 느꼈던 적이 있습니다. <br />
            그럴 때 프론트엔드 개발자로서 불편한 점들을 어떻게 개선하면 사용자가 더 편리하고 효율적으로 <br className="mob" />
            해당 서비스를 사용할 수 있을 지 생각하곤 합니다. <br />
            <br />
          </p>
          <p>
            협업을 시작하면서 내가 작성한 코드를 다른 사람이 봤을 때에도 쉽게 알아볼 수 있는 방법, <br />
            재사용성을 높일 수 있는 방법에 대해 고민하고 그런 코드를 짤 수 있도록 노력하고 있습니다. <br />
            <br />
            어떤 것에 목표가 생기면 깊게, 그리고 꾸준히 학습합니다.
            <br />
            HTML, CSS, JS 학습을 시작으로 TS, React를 깊이 학습하고 있으며,
            <br className="mob" />
            개인 프로젝트로 React와, Github을 이용하여 프로젝트를 설계하고 배포한 경험을 가지고 있습니다.
          </p>
          <br />
        </ContentsInner>
        <p>
          이렇게 늘 문제 해결과 좋은 코드에 대해 생각하는 개발자 조가영입니다. <br />
          감사합니다 : )
        </p>
      </Contents>
    </Wrapper>
  );
};

export default Introduce;
