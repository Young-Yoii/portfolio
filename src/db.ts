interface projectType {
  id: number;
  title: string;
  link: string;
  video?: string; 
  github: string;
  url?: string
  date: string;
  members: string;
  overview: string;
  stack: string[];
  category: string;
  description: string[];
  review: string[];
}
interface experiecetype {
  id: number;
  title: string;
  date: string;
  description: string;
}
interface workType {
  id: number;
  title: string;
  overview: string;
  image: string;
  date: string;
  role?: string;
  description: string[];
  link1: string;
  link2: string;
}

export const works: workType[] = [
  {
    id: 1,
    title: '울산시 교육청 통합누리집 개편',
    overview: '울산시 교육청 및 통합누리집(45개 패밀리사이트)개편 및 유지보수 | 기획팀, 백엔드, 디자이너 협업',
    image: '/images/use.png',
    date: '2023.04.03 - 2024.01.29',
    role: '프론트엔드(퍼블리싱)',
    description: [
      '사용자 메인 화면 JSP 기반 프론트 개발',
      '지도 서비스 POI 사용자 화면 JS 개발',
      '통합검색 화면 퍼블리싱 담당',
      '레이아웃 및 footer 배너 등 공통 화면 모듈화',
      '이수증, 자격증 등 프린트 자료 퍼블리싱',
      '웹접근성 인증 획득'
    ],
    link1: 'https://inky-sprite-6cd.notion.site/e90fde59da3d462ebdb7d11ad3776557',
    link2: 'https://inky-sprite-6cd.notion.site/88c94b3582224360899ccea9296f92f5',
  },
  {
    id: 2,
    title: '경상남도 교육청 통합누리집 개편 ',
    overview: '경상남도 교육청 및 통합누리집(37개 패밀리사이트)개편 | 기획팀, 백엔드, 디자이너 협업',
    image: '/images/gne.png',
    date: '2023.06.12 - 2024.02.26',
    role: '프론트엔드(퍼블리싱)',
    description: [
      '사용자 화면 JSP 기반 프론트 개발',
      '통합검색 및 통합로그인 전체 퍼블리싱 담당',
      '레이아웃 및 footer 배너 등 공통 화면 모듈화 ',
      '계산 프로그램 JS 개발 등 주요기능 개발',
      '웹접근성 인증 획득',
      '관리자 화면 cms (openworks4) 퍼블리싱' 
    ],
    link1: 'https://inky-sprite-6cd.notion.site/33c25b7427b6456fbf3db8299be4a938',
    link2: 'https://inky-sprite-6cd.notion.site/cc0726535c67436a98b54190e0edd486',
  }
]

export const project: projectType[] = [
  {
    id: 1,
    title: '나도 땀',
    link: 'nadoddam',
    video: 'https://www.youtube.com/embed/RTndl4Qn7Zg',
    github: 'https://github.com/Young-Yoii/NADODDAM-team-project2',
    url: 'https://www.youtube.com/embed/RTndl4Qn7Zg',
    date: '2022.12.12 - 2022.12.28',
    overview:
      '앨리스에서 진행한 팀 프로젝트로 등록, 예약, 리뷰쓰기가 가능한 농장체험 신청 플랫폼 ',
    members: 'FE 5명 / BE 2명',
    category: '팀 프로젝트',
    stack: ['React', 'JavaScript', 'Redux-toolkit', 'styled-components'],
    review: [
      'IA(정보구조도), 요구사항 정의서를 작성하는 방법을 학습하고 적용함',
      '협업을 통해 Git 관리의 중요성을 배움',
      'RESTful API 개발을 경험함',
      '컴포넌트 재사용을 위한 코드 작성 방법을 고민하고 적용함',
    ],
    description: [
      'figma를 통한 와이어프레임 제작',
      '레이아웃 구현',
      '유저정보 RUD, 유저리뷰 CRUD, 유저예약 RD 페이지 구현',
      '디자인 시스템 구축',
      '스켈레톤UI 구현',
      'React, JavaScript, Redux-toolkit, styled-components',
    ],
  },
  {
    id: 2,
    title: 'YFLIX',
    link: 'yflix',
    video: 'https://youtu.be/RRZAoErhO_8',
    github: 'https://github.com/Young-Yoii/yflix',
    url: 'https://young-yoii.github.io/yflix/',
    category: '개인 프로젝트',
    date: '2022.11.21 - 2022.12.01',
    overview: 'React를 배우며 제작한 영화 소개 페이지 ',
    members: '1명',
    review: ['오픈 API를 사용하여 서버와 통신하는 로직을 이해하고 적용함', 'react-hooks를 사용하는 방법을 배우고 적용함', 'react-router를 사용하는 방법을 배우고 적용함'],
    description: ['YTS 영화 오픈 API 사용', '슬라이드 기능 추가 구현', '디테일 페이지 추가 구현', '장르별 페이지 추가 구현', 'React.js, javaScript 환경 UI, css-module사용'],
    stack: ['React', 'JavaScript', 'css-module'],
  },
  {
    id: 3,
    title: '$merge cake',
    link: 'mergecake',
    video: 'https://www.youtube.com/embed/BKXyOWmD79U',
    github: 'https://github.com/Young-Yoii/MergeCake-team-project1',
    url: 'https://www.youtube.com/embed/BKXyOWmD79U',
    overview:
      '앨리스에서 진행한 팀 프로젝트로 케이크 주문, 관리자 관리기능이 있는 프로젝트',
    members: 'FE 3명 / BE 2명',
    description: [
      'Figma 를 통한 와이어 프레임 제작',
      '관리자 관련 페이지 구현',
      '- 카테고리 및 상품 조회, 회원 목록 조회, 주문 내역 조회',
      '유저 주문 조회 페이지 구현',
      'Header, footer 재 사용을 위한 모듈 구현',
      '홈페이지 전반적인 CSS 담당',
    ],
    review: [
      '제한된 기간 내에 프로젝트를 완성할 수 있도록 일정을 관리하는 방법을 깨달음',
      'fetch를 통해 JSON 데이터에 접근하고 해당 데이터를 다루는 방법을 익힘',
      '백엔드 및 팀원들과 소통, 협업을 하여 프로젝트를 진행하는 방법을 깨달음',
    ],
    category: '팀 프로젝트',
    date: '2022.10.31 - 2022.11.11',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    title: 'Blend',
    link: 'blend',
    video: 'https://youtu.be/j7ut32mrUWU',
    github: 'https://github.com/Young-Yoii/blend',
    url: 'https://young-yoii.github.io/blend/',
    date: '2021.10',
    category: '퍼블리싱',
    overview:
      'Aos플러그인을 이용한 애니메이션과 슬라이더 등으로 제작한 동적인 웹사이트',
    members: '1명',
    review: ['와이어 프레임을 만들고 그에따라 홈페이지를 제작함', 'HTML과 CSS를 활용하여 정적인 홈페이지를 만드는 방법을 깨달음'],
    description: ['홈페이지 전 페이지 디자인 담당 및 퍼블리싱', 'PC버전으로 제작'],
    stack: ['HTML', 'CSS', 'jQuery'],
  },
  {
    id: 5,
    title: '선셋 맥주',
    link: 'sunsetbeer',
    video: 'https://youtu.be/m-CN3OmhUDc',
    github: 'https://young-yoii.github.io/sunset-beer',
    url: 'https://young-yoii.github.io/sunset-beer/',
    date: '2021.10',
    category: '퍼블리싱',
    overview: 'Aos플러그인을 사용하여 동적인 화면으로 구현한 반응형 웹 사이트',
    members: '1명',
    review: ['와이어 프레임을 만들고 그에 따라 홈페이지를 제작함', '미디어 쿼리를 사용하여 반응형 웹을 만드는 방법을 깨달음'],
    description: ['홈페이지 전 페이지 디자인 담당 및 퍼블리싱', '반응형 웹사이트로 구현', 'HTML, CSS, jQuery 환경 UI'],
    stack: ['HTML', 'CSS', 'jQuery'],
  },
  {
    id: 6,
    title: '블로그 썸네일 메이커',
    link: 'thumbnail',
    video: 'https://youtu.be/2hfo5xujF_s',
    github: 'https://github.com/Young-Yoii/thumbnail-maker',
    url: 'https://young-yoii.github.io/thumbnail-maker/',
    date: '2023.01.16 - 2023.01.24',
    category: '개인프로젝트',
    overview:
      'React, redux를 이용하여 토이프로젝트로 제작한 블로그 썸네일 메이커',
    members: '1명',
    description: ['이미지 다운로드 기능 구현', '클립보드 복사 기능 구현', '클립보드 복사시 토스트 메세지 구현', 'Redux-toolkit을 사용한 상태관리'],
    review: [
      'Redux-toolkit을 활용하여 상태관리 방법을 학습하고 적용함',
      'useReducer와 ContextAPI를 사용하여 초기 구현한 뒤 redux-toolkit를 사용하여 리팩토링을 해봄',
      'TypeSctipt의 타입 에러에 대해 공부하고 해결방법을 기록함',
    ],
    stack: ['React', 'TypeScript', 'Redux-toolkit'],
  },
];

export const experiece: experiecetype[] = [
  {
    id: 1,
    title: '제스아이앤씨',
    date: '2023.04.03 - 2024.02.29',
    description: '웹사이트 프론트 개발 및 퍼블리싱',
  },
  {
    id: 2,
    title: '쇼핑몰 웹퍼블리셔',
    date: '2021.12.27 - 2022.08.31',
    description: '디자이너 브랜드 쇼핑몰 웹 디자인 및 퍼블리싱',
  },
  {
    id: 3,
    title: '엘리스 SW 엔지니어 트랙 3기',
    date: '2022.09.12 - 2022.12.31',
    description: '웹프론트엔드 중심으로 백엔드를 함께 배우는 개발자 양성 교육 과정',
  },
  {
    id: 4,
    title: '웹디자인 / 퍼블리셔 과정 수료',
    date: '2021.06.24 - 2021.10.24',
    description: '웹디자이너 및 퍼블리셔 양성 교육과정',
  },
];
