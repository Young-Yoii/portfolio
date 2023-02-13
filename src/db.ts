interface project {
  id: number;
  title: string;
  image: string | null;
  video: string | null;
  github: string;
  url: string;
  date: string;
  overview: string;
  role: string | null;
  members: string;
  description: string[];
}
interface icon {
  role: string;
  viewBox: string;
  xmlns: string;
  title: string;
  path: string;
  url: string;
}
interface experiecetype {
  id: number;
  title: string;
  date: string;
  description: string;
}

export const teamProjectList: project[] = [
  {
    id: 1,
    title: '$merge cake',
    image: null,
    video: 'https://www.youtube.com/embed/BKXyOWmD79U',
    github: 'https://github.com/Young-Yoii/MergeCake-team-project1',
    url: '',
    date: '2022.10.31 - 2022.11.11',
    overview:
      '주문 제작 케이크의 수요가 증가하고 있지만 여전히 SNS만을 사용하여 주문 제작을 해야합니다.\nSNS를 하지 않거나 간편하게 주문을 하고 싶은 사람들은 케이크를 주문 제작 하는 것을 포기하곤 합니다.\n케이크를 주문 제작하는 것에 어려움을 느끼는 분들을 위해 프로젝트를 시작했습니다.\n$merge cake는 간편한 방법으로 원하는 모양으로 케이크를 만들고 장바구니에 추가하고, \n또 주문을 할 수 있는 케이크 주문제작 쇼핑몰 입니다.',
    role: 'front-end',
    members: 'FE 5명 / BE 2명',
    description: [
      'Figma 를 통한 와이어 프레임 제작',
      '관리자 관련 페이지 구현',
      '- 카테고리 및 상품 조회, 회원 목록 조회, 주문 내역 조회',
      '유저 주문 조회 페이지 구현',
      'Header, footer 재 사용을 위한 모듈 구현',
      '홈페이지 전반적인 CSS 담당',
    ],
  },
  {
    id: 2,
    title: '나도 땀',
    image: null,
    video: 'https://www.youtube.com/embed/RTndl4Qn7Zg',
    github: 'https://github.com/Young-Yoii/NADODDAM-team-project2',
    url: '',
    date: '2022.12.12 - 2022.12.28',
    overview:
      '과일을 땀 흘려 수확하고 농부가 되어보자! \n풍년으로 인한 과일값 하락과 인력 부족으로 수확을 포기하는 농민들이 늘고 있다는 뉴스를 보고\n직접 수확하고 과일을 가져가는 체험 상품을 판매한다면 농민과 소비자 모두 이득이지 않을까 생각했습니다.\n또한 농장 체험을 예약하는 서비스가 부재하기 때문에 만든다면 수요가 있을 것이라 판단했습니다.\n그렇게 "나도땀" 은 농민과 소비자의 상생을 목표로 시작되었습니다!',
    role: 'front-end',
    members: 'FE 5명 / BE 2명',
    description: [
      'figma를 통한 와이어프레임 제작',
      '레이아웃 구현',
      '유저정보 RUD, 유저리뷰 CRUD, 유저예약 RD 페이지 구현',
      '디자인 시스템 구축',
      '스켈레톤UI 구현',
      'React, Redux-toolkit, styled-components',
    ],
  },
];
export const personalProjectList: project[] = [
  {
    id: 1,
    title: 'YFLIX',
    image: '/images/yflix.png',
    video: null,
    github: 'https://github.com/Young-Yoii/moive-web-clone-coding',
    url: 'https://young-yoii.github.io/moive-web-clone-coding/',
    date: '2022.11.21 - 2022.12.01',
    overview: '엘리스 sw 트랙 중 진행한 스터디 활동에서 React 기초를 다지기 위해 제작한 영화 소개 페이지 입니다.',
    role: null,
    members: '1명',
    description: ['YTS 영화 오픈 API 사용', '슬라이드 기능 추가 구현', '디테일 페이지 추가 구현', '장르별 페이지 추가 구현', 'React.js, javaScript 환경 UI, css-module사용'],
  },
  {
    id: 2,
    title: '블로그 썸네일 메이커',
    image: '/images/thumbnail.png',
    video: null,
    github: 'https://github.com/Young-Yoii/thumbnail-maker',
    url: 'https://young-yoii.github.io/thumbnail-maker/',
    date: '2023.01.16 - 2023.01.24 ',
    overview:
      '블로그 썸네일 하나 제작하기 위해서 미리캔버스, 온라인 포토샵, 어도비 포토샵 등의 툴을 사용하며\n하나 하나 만들기가 힘들기도 하였고, 무엇보다 썸네일 제작에 소요되는 시간이 아까웠습니다.\n토이프로젝트 주제를 생각하다 `평소 불편한 것들을 개선해보자!` 라는 생각에서 시작된\n블로그 썸네일을 간단하게 만들어주는 앱, 블로그 썸네일 메이커 입니다.',
    role: null,
    members: '1명',
    description: [
      '토이 프로젝트',
      'useReducer를 사용하여 초기 구현한 뒤 redux를 사용하여 리팩토링 진행',
      '이미지 다운로드 기능',
      '클립보드 복사 기능',
      'React.js, TypeScript 환경 UI',
      'Redux-toolkit을 사용한 상태관리',
    ],
  },
  {
    id: 3,
    title: '2023 포트폴리오 ver.1',
    image: '/images/portfolio.png',
    video: null,
    github: 'https://github.com/Young-Yoii/2023-portfolio',
    url: 'https://young-yoii.github.io/2023-portfolio/',
    date: '2023.02.01 - 2022.02.05',
    overview:
      '프로젝트를 소개하기 위해 만든 첫 번째 포트폴리오 입니다.\n제작 후 프로젝트에 관한 설명과 포트폴리오 기능으로서의 부족함을 느껴 리팩토링을 진행하려다,\n하나의 결과물로 남겨두고 싶어 Portfolio ver1 이라는 타이틀을 달았습니다.',
    role: null,
    members: '1명',
    description: ['PC, 태블릿, 모바일 반응형으로 제작', 'React, TypeScript 환경 UI', 'styled-components사용'],
  },
];
export const publishingProjectList: project[] = [
  {
    id: 1,
    title: 'Blend',
    image: '/images/yflix.gif',
    video: null,
    github: 'https://github.com/Young-Yoii/portfolio-blend-publishing',
    url: 'https://young-yoii.github.io/portfolio-blend-publishing/',
    date: '2021.10',
    overview:
      '2021년에 제작한 웹사이트 H&B스토어 쇼핑몰 BLEND 입니다.\n웹사이트 디자인 및 전체를 구축하였고,\n메인화면과 4개의 서브화면으로 구성되어있으며 Aos플로그인을 이용한 애니메이션과 슬라이더 등으로 동적인 웹사이트입니다. PC용으로만 제작되었습니다.',
    role: null,
    members: '1명',
    description: ['홈페이지 전 페이지 디자인 담당 및 퍼블리싱', 'HTML, CSS, jQuery 환경 UI'],
  },
  {
    id: 2,
    title: '선셋 맥주',
    image: '/images/thumbnail.png',
    video: null,
    github: 'https://young-yoii.github.io/portfolio-sunset-publishing',
    url: 'https://young-yoii.github.io/portfolio-sunset-publishing/',
    date: '2021.10',
    overview: '2021 년에 제작한 반응형 웹사이트 입니다. 웹사이트 디자인 및 전체를 구축하였으며\n반응형 슬라이더, Aos플로그인을 사용하여 동적인 화면을 구현하였고 메인화면만 제작 되었습니다.',
    role: null,
    members: '1명',
    description: ['홈페이지 전 페이지 디자인 담당 및 퍼블리싱', '반응형 웹사이트로 구현', 'HTML, CSS, jQuery 환경 UI'],
  },
];
export const InfoIcon: icon[] = [
  {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
    title: 'Gmail',
    path: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z',
    url: 'fhqht4545@gmail.com',
  },
  {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
    title: 'GitHub',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    url: 'https://github.com/Young-Yoii',
  },
  {
    role: 'img',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
    title: 'Tistory',
    path: 'M0 3a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0',
    url: 'https://yoii-devlog.tistory.com/',
  },
];

export const experiece: experiecetype[] = [
  {
    id: 1,
    title: '엘리스 SW 엔지니어 트랙 3기',
    date: '2022.09.12 - 2022.12.31',
    description: '웹프론트엔드 중심으로 백엔드를 함께 배우는 개발자 양성 교육 과정',
  },
  {
    id: 2,
    title: '△△ 쇼핑몰 웹퍼블리셔',
    date: '2021.12.27 - 2022.08.31',
    description: '디자이너 브랜드 쇼핑몰 웹 디자인 및 퍼블리싱',
  },
  {
    id: 3,
    title: '웹디자인 / 퍼블리셔 과정 수료',
    date: '2021.06.24 - 2021.10.24',
    description: '웹디자이너 및 퍼블리셔 양성 교육과정',
  },
  {
    id: 4,
    title: '계명문화대학교 유아교육학과 학사졸업',
    date: '2017.03 - 2020.02',
    description: '석차 3등 졸업',
  },
];
