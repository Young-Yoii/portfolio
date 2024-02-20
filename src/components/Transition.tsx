import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../pages/About';
// import ProjectList from '../pages/ProjectList';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { MergeCake, Nadoddam, Thumbnail, Yflix, Blend, Sunset } from '../pages/Projects';

const Transition = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
        <Routes location={location}>
          <Route path="/" element={<About />} />
          {/* <Route path="/projects" element={<ProjectList />} /> */}
          {/* <Route path="/project/mergecake" element={<MergeCake />} />
          <Route path="/project/nadoddam" element={<Nadoddam />} />
          <Route path="/project/yflix" element={<Yflix />} />
          <Route path="/project/thumbnail" element={<Thumbnail />} />
          <Route path="/project/blend" element={<Blend />} />
          <Route path="/project/sunsetbeer" element={<Sunset />} /> */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
