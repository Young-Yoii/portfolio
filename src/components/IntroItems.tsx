import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
  text-align: center;
  font-family: 'Montserrat-Black';
  color: #fff;
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const TextItem = styled.div`
  font-size: 2rem;
  display: inline-block;
  position: absolute;
  top: 2vh;
  left: 1vw;

  text-align: left;
`;
const ScrollArrowAnimate = keyframes`
0% {
  height: 30vh;
}
50% {
  height: 20vh;
}
100% {
  height: 30vh;
}
`;
const ArrowItem = styled.div`
  width: 1px;
  height: 30vh;
  background-color: #fff;
  position: relative;
  animation: ${ScrollArrowAnimate} 2s linear infinite;
  animation-delay: 5s;
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 1px;
    background-color: #fff;
    transform-origin: 0 100%;
    bottom: 0;
    left: 2px;
  }
  &::after {
    transform: rotate(225deg);
  }
  &::before {
    transform: rotate(315deg);
  }
`;
const ScrollAnimate = keyframes`
0% {
  opacity: 0.3;
}
100% {
  opacity: 1;
}
`;

const ScrollText = styled.div`
  font-size: 3rem;
  position: absolute;
  top: 35vh;
  opacity: 0;
  animation: ${ScrollAnimate} 2s linear infinite;
  animation-delay: 5s;
  animation-fill-mode: forwards;
`;

const textAnimate = keyframes`
  0% {
    opacity: 0;
    transform: rotate(var(--resultRotate)) translateX(var(--pixelTranslate));
    bottom: 100%;
  }
  25% {
    opacity: 1;
    transform: rotate(var(--prevRotate)) translateX(var(--pixelTranslate));
    bottom: var(--pixelHeight);
  }
  50% {
    opacity: 1;
    transform: rotate(var(--resultRotate)) translateX(var(--pixelTranslate));
    bottom: var(--pixelHeight);
  }
  75%{
    opacity: 1;
    transform: rotate(var(--prevRotate)) translateX(var(--pixelTranslate));
    bottom: var(--pixelHeight);
  }
  100%{
    opacity: 1;
    transform: rotate(var(--resultRotate)) translateX(var(--pixelTranslate));
    bottom: var(--pixelHeight);
  }
  
`;
const ballAnimate = keyframes`
  0% {
    opacity: 0;
    top:0;
  }
  25% {
    opacity: 0;
    bottom: 50%;
  }
  50% {
    opacity: 1;
    bottom: var(--pixelHeight);
  }
  75%{
    opacity: 1;
    bottom: var(--prevHeight);
  }
  100%{
    opacity: 1;
    bottom: var(--pixelHeight);
  }
`;

const Item = styled.div`
  border: 1px solid #fff;
  border-radius: 20vw;
  display: inline-block;
  padding: 13px 20px;
  opacity: 0;
  position: absolute;
  animation: ${textAnimate} 2s;
  animation-fill-mode: forwards;
  transition: all 0.5s ease-in-out;
  transform-origin: center center;

  span {
    font-size: 4rem;
  }
  &.item-first {
    --pixelHeight: 1rem;
    --prevRotate: 0deg;
    --resultRotate: 0deg;
    --pixelTranslate: 0px;
  }
  &.item-second {
    --pixelHeight: 7.4rem;
    --prevRotate: 4deg;
    --resultRotate: -4deg;
    --pixelTranslate: 16.8rem;
    animation-delay: 1s;
  }
  &.item-third {
    --pixelHeight: 15rem;
    --prevRotate: -4deg;
    --resultRotate: 1deg;
    --pixelTranslate: -12.9rem;
    animation-delay: 2s;
  }
  &.item-fourth {
    --pixelHeight: 32.9rem;
    --prevRotate: 25deg;
    --resultRotate: 33deg;
    --pixelTranslate: 15rem;
    animation-delay: 3.5s;
  }
  &.item-fifth {
    --pixelHeight: 22.7rem;
    --prevRotate: 20deg;
    --resultRotate: 24deg;
    --pixelTranslate: 1.2rem;
    animation-delay: 2.9s;
  }
  &.item-sixth {
    --pixelHeight: 40.9rem;
    --prevRotate: -30deg;
    --resultRotate: -38deg;
    --pixelTranslate: -14.2rem;
    animation-delay: 4.5s;
  }
  @media screen and (max-width: 1440px) {
    span {
      font-size: 3rem;
    }
    &.item-second {
      --pixelHeight: 6.8rem;
      --pixelTranslate: 13.8rem;
    }
    &.item-third {
      --pixelHeight: 13rem;
      --pixelTranslate: -9.9rem;
    }
    &.item-fourth {
      --pixelHeight: 29.1rem;
      --pixelTranslate: 15.4rem;
    }
    &.item-fifth {
      --pixelHeight: 19.7rem;
      --pixelTranslate: 4.2rem;
    }
    &.item-sixth {
      --pixelHeight: 25rem;
      --prevRotate: 3deg;
      --resultRotate: -3deg;
      --pixelTranslate: -8.2rem;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 10px;
    span {
      font-size: 2rem;
    }
    &.item-second {
      --pixelHeight: 5.8rem;
      --pixelTranslate: 4rem;
    }
    &.item-third {
      --pixelHeight: 11rem;
      --pixelTranslate: -5.9rem;
    }
    &.item-fourth {
      --pixelHeight: 22.1rem;
      --pixelTranslate: 7.4rem;
    }
    &.item-fifth {
      --pixelHeight: 15.7rem;
      --pixelTranslate: 4.2rem;
    }
    &.item-sixth {
      --pixelHeight: 20rem;
      --prevRotate: 3deg;
      --resultRotate: -3deg;
      --pixelTranslate: -7.2rem;
    }
  }
`;
const BallItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  opacity: 0;
  position: absolute;
  animation: ${ballAnimate} 1s;
  animation-fill-mode: forwards;

  &.ball-first {
    --pixelHeight: 9rem;
    --prevHeight: 10rem;
    transform: translateX(-7.6rem);
    background-color: #8f3eff;
    box-shadow: 0px 0px 20px #8f3eff;
    animation-delay: 1.5s;
  }
  &.ball-second {
    --pixelHeight: 17.1rem;
    --prevHeight: 17.7rem;
    transform: translateX(12.5rem);
    background-color: #fe6c47;
    box-shadow: 0px 0px 20px #fe6c47;
    animation-delay: 2.3s;
  }
  &.ball-third {
    --pixelHeight: 23.6rem;
    --prevHeight: 24.8rem;
    transform: translateX(-11.9rem);
    background-color: #5bff6b;
    box-shadow: 0px 0px 20px #5bff6b;
    animation-delay: 4s;
  }
  @media screen and (max-width: 1440px) {
    width: 40px;
    height: 40px;
    &.ball-first {
      --pixelHeight: 8.3rem;
      --prevHeight: 9.3rem;
      transform: translateX(-6rem);
    }
    &.ball-second {
      --pixelHeight: 15rem;
      --prevHeight: 16rem;
    }
    &.ball-third {
      --pixelHeight: 20rem;
      --prevHeight: 21rem;
    }
  }
  @media screen and (max-width: 767px) {
    width: 35px;
    height: 35px;
    &.ball-first {
      --pixelHeight: 6.3rem;
      --prevHeight: 7.3rem;
      transform: translateX(-8rem);
    }
    &.ball-second {
      --pixelHeight: 11.5rem;
      --prevHeight: 12.5rem;
      transform: translateX(9rem);
    }
    &.ball-third {
      --pixelHeight: 16rem;
      --prevHeight: 17rem;
      transform: translateX(-3.9rem);
    }
  }
`;
const IntroItems = () => {
  const itemList = [
    { name: 'Jo Gayoung', class: 'first' },
    { name: 'Communication', class: 'second' },
    { name: 'Positiveness', class: 'third' },
    { name: 'Study steadily', class: 'fourth' },
    { name: 'UI/UX', class: 'fifth' },
    { name: 'Portfolio', class: 'sixth' },
  ];
  const ballList = [{ class: 'first' }, { class: 'second' }, { class: 'third' }];
  return (
    <Wrapper>
      <TextItem>
        Jo Gayoung <br />
        Front-end Portfolio
      </TextItem>
      <ItemWrapper>
        <ArrowItem />
        <ScrollText>Scroll</ScrollText>
        {itemList.map((item, index) => (
          <Item key={index} className={`item-${item.class}`}>
            <span>{item.name}</span>
          </Item>
        ))}
        {ballList.map((item, index) => (
          <BallItem key={index} className={`ball-${item.class}`}></BallItem>
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};
export default IntroItems;
