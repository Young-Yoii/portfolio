import { AiOutlineHtml5 } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import { SiRedux, SiExpress, SiFigma, SiTypescript, SiMongodb, SiNotion } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';
import { DiPhotoshop } from 'react-icons/di';
import { IoLogoCss3 } from 'react-icons/io';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3vh 0;
  width: 70%;
  margin: 0 auto;
  font-size: 1.6rem;
  font-family: 'Pretendard-Regular';
  line-height: 2.4rem;
  .title {
    padding: 10px 0px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.18);
    font-size: 2.2rem;
    font-family: 'Montserrat-Black';
  }
  @media screen and (max-width: 767px) {
    width: 85%;
  }
`;
const SkillListWrap = styled.div`
  margin: 20px 0px;
  p {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const SkillItem = styled.li`
  border: 1px solid #000;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin: 5px 10px 0px 0px;
  padding: 5px 10px;
  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  span {
    padding-left: 5px;
  }
`;

const Skills = () => {
  const frontend = [
    { title: 'HTML 5', icon: <AiOutlineHtml5 /> },
    { title: 'CSS 3', icon: <IoLogoCss3 /> },
    { title: 'JAVASCRIPT', icon: <IoLogoJavascript /> },
    { title: 'TYPESCRIPT', icon: <SiTypescript /> },
    { title: 'REACT', icon: <GrReactjs /> },
    { title: 'REDUX', icon: <SiRedux /> },
  ];

  const backend = [
    { title: 'Express.js', icon: <SiExpress /> },
    { title: 'Node.js', icon: <FaNode /> },
    { title: 'MongnDB', icon: <SiMongodb /> },
  ];

  const tools = [
    { title: 'Git', icon: <BiGitBranch /> },
    { title: 'Figma', icon: <SiFigma /> },
    { title: 'Photoshop', icon: <DiPhotoshop /> },
    { title: 'Notion', icon: <SiNotion /> },
  ];
  return (
    <Wrapper>
      <p className="title">Skills</p>
      <div>
        <SkillListWrap>
          <p>Front-end</p>
          <SkillList>
            {frontend.map((item, index) => (
              <SkillItem key={index}>
                {item.icon}
                <span>{item.title}</span>
              </SkillItem>
            ))}
          </SkillList>
        </SkillListWrap>
        <SkillListWrap>
          <p>Back-end</p>
          <SkillList>
            {backend.map((item, index) => (
              <SkillItem key={index}>
                {item.icon}
                {item.title}
              </SkillItem>
            ))}
          </SkillList>
        </SkillListWrap>
        <SkillListWrap>
          <p>Tools</p>
          <SkillList>
            {tools.map((item, index) => (
              <SkillItem key={index}>
                {item.icon}
                {item.title}
              </SkillItem>
            ))}
          </SkillList>
        </SkillListWrap>
      </div>
    </Wrapper>
  );
};

export default Skills;
