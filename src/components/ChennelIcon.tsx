import React from 'react';
import styled from 'styled-components';

import { VscGithubAlt, VscMail } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

/* Component Style */
const Wrapper = styled.article`
  position: fixed;
  bottom: 10px;
  right: 30px;
  z-index: 900;
  @media screen and (max-width: 1024px) {
    right: 10px;
  }
  @media screen and (max-width: 768px) {
    right: 6px;
    bottom: 0;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  width: 1.7vw;
  height: 3.3vh;
  margin-bottom: 17px;
  a {
    color: #000;
    text-decoration: none;
    &:hover svg {
      fill: #8f3eff;
    }
  }
  svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const Bar = styled.span`
  display: block;
  width: 0.1vw;
  height: 8vh;
  background-color: #000;
  margin: 0px auto 15px;
  @media screen and (max-width: 1024px) {
    width: 1px;
  }
`;

const ChennelIcon = () => {
  return (
    <Wrapper>
      <Bar></Bar>
      <LinkList>
        <LinkItem>
          <a href="https://yoii-devlog.tistory.com/" target="_blank" rel="noreferrer" className="cursor-pointer">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Tistory</title>
              <path d="M0 3a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
            </svg>
          </a>
        </LinkItem>

        <LinkItem>
          <a href="https://github.com/Young-Yoii" target="_blank" rel="noreferrer" className="cursor-pointer">
            <VscGithubAlt />
          </a>
        </LinkItem>

        <LinkItem>
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = 'mailto:fhqht4545@naver.com';
              e.preventDefault();
            }}
            className="cursor-pointer"
          >
            <VscMail />
          </Link>
        </LinkItem>
      </LinkList>
    </Wrapper>
  );
};

export default ChennelIcon;
