import styled from 'styled-components';
import { project } from '../db';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import throttle from 'throttle';

/* Component Style */
const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 3vh 0;
  .title {
    padding: 10px 0px;
    font-size: 2.2rem;
    font-family: 'Montserrat-Black';
  }
  @media screen and (max-width: 1240px) {
    width: 85%;
  }
`;
const WrapperInner = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: 'Pretendard-Regular';
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  transition: all 0.5s;
`;
const Item = styled.ul`
  display: flex;
`
const ItemWrapper = styled.li`
  padding: 40px 70px;
  width: ${props => props.property}px;
  display: grid;
  grid-template-columns: 45%;
  grid-column-gap: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    padding: 20px 10px;
  }

  .item-member {
    font-size: 1.6rem;
    padding: 2px 5px;
    border-radius: 5px;
    background-color: #fe6c473d;
    margin: 0 5px 5px 0;
    display: inline-block;
    &.team {
      background-color: #5bff6b66;
    }
  }
`;

const MideaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  grid-column: 2;
  
  @media screen and (max-width: 1199px) {
    margin-top: 30px;
    height: 350px;
  }
  @media screen and (max-width: 640px) {
    height: auto;
  }
`;
const ContetnsWrapper = styled.div`
  box-sizing: border-box;
  grid-column: 1;
  font-size: 1.5rem;
  .tit {
    font-weight: 600;
    margin: 20px 0 5px 0;
  }
`;
const LinkWrap = styled.div`
  display: flex; 
  margin-top: 10px;
  & > a {
    display: block;
    color: gray;
    text-decoration: underline;
    font-size: 1.4rem;
    font-weight: 500;
  }
  & > a + a {
    margin-left: 10px;
  }
`;
const StackItem = styled.div`
  font-size: 1.4rem;
`;
const NavBtn = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  border: none;
  cursor: pointer;
  & + button {right: 0}
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 2px solid;
    border-color: transparent #fff #fff transparent;
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    transform: rotate(135deg) translate(-25%, -25%)
  }
  & + button::after {
    transform: rotate(-45deg) translate(-25%, -25%)
  }
`
const PageNation = styled.div`
  position: absolute;
  bottom: 10px;
  right: 16px;
  width: auto;
  display: inline-table;
  padding: 4px 12px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 1.2rem;

  .bold {font-weight: bold;}
`

interface ListProps{
  list?: string[];
  stack?: string[];
  name?: string;
}

const ProjectIntroForm = () => {
  const cloneItem = [project[project.length - 1], ...project, project[0]];
  const lastItem = cloneItem.length - 1;
  const slideRef = useRef<HTMLUListElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [realIndex, setRealIndex] = useState<number>(1);
  const [carouselTransition, setCarouselTransition] = useState('transform 500ms ease-in-out');
  const [width, setWidth] = useState<any>(null);
  const IMG_SIZE = 1316;
  console.log( )
  const roofSlide = (currentSlide: number) => {
    setTimeout(() => {
      setCurrentSlide(currentSlide);
      setCarouselTransition('')
    }, 500)
  }
  const handleSlide = (direction: string) => {
    if(direction === 'prev') {
      setCurrentSlide((currentSlide) => currentSlide - 1);
      realIndex === 1 ? setRealIndex(project.length) : setRealIndex((realIndex) => realIndex - 1)
    } else {
      setCurrentSlide((currentSlide) => currentSlide + 1);
      realIndex === project.length ? setRealIndex(1) : setRealIndex((realIndex) => realIndex + 1);
    }
    setCarouselTransition('transform 500ms ease-in-out');
  }
  useEffect(() => {
    if(slideRef.current !==null){
      slideRef.current.style.transform = `translateX(-${width * currentSlide}px)`;
      slideRef.current.style.transition = `${carouselTransition}`;
    }
  }, [handleSlide]);
  useEffect(() => {
    if(currentSlide === lastItem){
      roofSlide(1);
    }else if (currentSlide === 0){
      roofSlide(lastItem - 1);
    }
  }, [lastItem, currentSlide])

  useEffect(() => {
    const handleResize = () => {
      setWidth(itemRef.current !==null && itemRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Wrapper>
     <p className="title">Projects</p>
      <WrapperInner ref={itemRef}>
        <Item ref={slideRef}>
        {cloneItem.map((item, index) => (
          <ItemWrapper key={index} property={width}>
              <ContetnsWrapper>
                <div className="item-title">
                  <span className={'item-member' + (item.category === '팀 프로젝트' ? ' team' : '')}>{item.category}</span>
                  {item.title}
                  <p className="item-date">{item.overview}</p>
                  <p className="item-date">{item.date} ｜ {item.members}</p>
                    <LinkWrap>
                      <a href={item.github} target="_blank" rel="noreferrer">🔗 github.com →</a>
                      {item.url && <a href={item.url} rel="noreferrer">🔗 서비스 URL →</a>}
                    </LinkWrap>
                </div>
                <ReviewList list={item.description} name="description"/>
                <ReviewList list={item.review} name="review"/>
                <Stack stack={item.stack} />
              </ContetnsWrapper>
              <MideaWrapper>
                <ReactPlayer className="react-player" url={`${item.video}`} width={'100%'} height={'100%'} playing={index === currentSlide ? true : false} muted={true} controls={true} light={false} />
              </MideaWrapper>
          </ItemWrapper>
        ))}
        </Item>
        <PageNation><span className='bold'>{realIndex}</span> / {project.length}</PageNation>
        <NavBtn onClick={() => handleSlide('prev')}></NavBtn>
        <NavBtn onClick={() => handleSlide('vext')}></NavBtn>
      </WrapperInner>
    </Wrapper>
  );
};

const ReviewList = ({list , name}: ListProps) => {
  return (
    <>
     <p className="tit">{name === 'review' ? '느낀 점' : '기여한 부분'}</p>
      <ul className='list'>
      {list && list.map((item, index) => (
        <li key={index}>{name === 'review' ? '👩‍💻' : '✔️'} {item}</li>
      ))}
     </ul>
    </>
  )
}

const Stack = ({ stack }: ListProps) => {
  return (
    <>
      <p className="tit">기술스택</p>
      <StackItem>
        {stack && stack.map((item, index) => (
          <span key={index}>{item}&nbsp;&nbsp;</span>
        ))}
      </StackItem>
    </>
  );
};
export default ProjectIntroForm;
