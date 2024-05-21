import styled from 'styled-components';

/* Component Style */
const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 3vh 0;
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
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard-Regular';

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
  margin-left: 50px;

  a {
    font-weight: 600; 
    color:gray;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }

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
            <span>조가영 </span> 웹 개발자 (FrontEnd/퍼블리셔)<br /><br />
            함께 하는 팀원들과 원활한 소통을 통해 하나의 프로젝트를 만들어갑니다. <br/>
            사용자 관점에서 개발하는 프론트엔드 개발자 입니다.<br /><br />
            <span>Contact</span><br /><br />
            Phone. 010.8176.0213<br />
            Email. fhqht4545@gmail.com<br />
            Notion PF. <a href='https://inky-sprite-6cd.notion.site/1c8818d952b942ecae19838462d675a6' target='_blank' rel="noreferrer noopener">🔗 바로가기 →</a>
        </ContentsInner>
      </Contents>
    </Wrapper>
  );
};

export default Introduce;
