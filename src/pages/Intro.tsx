import styled from 'styled-components';
import IntroItems from '../components/IntroItems';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100.1%;
`;

const Intro = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const navigate = useNavigate();

  const onScroll = useCallback(async () => {
    setState({ x: window.scrollX, y: window.scrollY });
    if (state.y === 0) navigate('/');
    return navigate('/about');
  }, [navigate, state]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <Wrapper>
      <IntroItems />
    </Wrapper>
  );
};

export default Intro;
