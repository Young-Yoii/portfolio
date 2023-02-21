import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 6vh 0;
  width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 1240px) {
    width: 85%;
    padding-bottom: 0;
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
const ImgWrapper = styled.div`
  width: 30%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  @media screen and (max-width: 1440px) {
    width: 40%;
  }
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 767px) {
    width: 70%;
  }
`;
const Contents = styled.div`
  font-size: 1.6rem;
  line-height: 2.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Pretendard-Regular';
  padding-bottom: 30px;

  span {
    font-size: 2rem;
    font-weight: 600;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    span {
      font-size: 1.8rem;
    }
  }
`;
const ContentsInner = styled.div`
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  margin-left: 50px;
  @media screen and (max-width: 1024px) {
    margin: 20px 0px 0px 0px;
  }
  @media screen and (max-width: 767px) {
    padding: 20px;
    .mob {
      display: none;
    }
  }
`;

const Introduce = () => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Contents>
        <ImgWrapper>
          <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="프로필사진"></img>
        </ImgWrapper>
        <ContentsInner>
          <p>
            <span>"안녕하세요. 좋은 코드를 위해 고민하고 노력하는 조가영입니다."</span> <br />
            <br />
            2021년 처음 웹을 접하고 발전을 위해 지금까지 열심히 달려왔습니다. <br />
            꾸준히 배우며 성장하는 것을 좋아하며 부족한 지식들을 하루하루 채우며 노력하고 있습니다. <br />
            현재는 JavaScript, TypeScript, React 를 계속해서 공부하고 있으며, <br />
            코드의 재 사용성을 높일 수 있는 코드 작성 방법과 함께 좋은 코드가 무엇인지 고민하고 공부하고 있습니다. <br />
            빠르게 변하는 웹 개발 트렌드 속에서 사용자 경험을 고려하며 성실하게 성장하는 프론트엔드 개발자가 되겠습니다.
          </p>
        </ContentsInner>
      </Contents>
    </Wrapper>
  );
};

export default Introduce;
