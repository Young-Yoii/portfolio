import { Routes, Route, useLocation } from 'react-router-dom';
import Intro from '../pages/Intro';
import About from '../pages/About';
import Project from '../pages/Project';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MergeCake, Nadoddam, Portfolio, Thumbnail, Yflix, Blend, Sunset } from '../pages/Projects';

const Transition = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
        <Routes location={location}>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/mergecake" element={<MergeCake />} />
          <Route path="/project/nadoddam" element={<Nadoddam />} />
          <Route path="/project/yflix" element={<Yflix />} />
          <Route path="/project/pfver1" element={<Portfolio />} />
          <Route path="/project/thumbnail" element={<Thumbnail />} />
          <Route path="/project/blend" element={<Blend />} />
          <Route path="/project/sunsetbeer" element={<Sunset />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
