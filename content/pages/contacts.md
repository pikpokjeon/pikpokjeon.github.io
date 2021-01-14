---
title: "Contact me"
template: "page"
---
# 전 예진 (Beatrix)

> **매일 폭발적으로 성장중인 프론트엔드 개발자**

서울시 마포구 방울내로 3길 41-7

(+82) 010- 2102- 1078

[pikpokjeon@gmail.com](mailto:pikpokjeon@gmail.com)

![%E1%84%8C%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%B5%E1%86%AB%20(Beatrix)%205781581dce274c498ac9c185fd78eda6.jpg](%E1%84%8C%E1%85%A5%E1%86%AB%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%B5%E1%86%AB%20(Beatrix)%205781581dce274c498ac9c185fd78eda6.jpg)

## 한 줄 소개

---

> 어릴 적 꿈을 이루기 위해, **프론트엔드 개발자**가 되기로 결심 했습니다.

- Github

    [pikpokjeon - Overview](https://github.com/pikpokjeon)

- Rocket Punch

    [전예진 Web Developer](https://www.rocketpunch.com/@pikpokjeon)

[https://ghchart.rshah.org/409ba5/pikpokjeon](https://ghchart.rshah.org/409ba5/pikpokjeon)

### 🖋  학력

- **이화여자대학교 /** 산업디자인과 ****중퇴 2013 ~ 2018
- **MPGU** / 러시아어 어학연수  2015~2016
- **부산예술고등학교** /2009~ 2013
- **Unity High School** / 미국 교환학생 2010

- PDF 이력서

    [전예진 이력서](https://docs.google.com/document/d/1yANabbJDKvy7YJXyE6vshixTZksTR7JBoO3Rnf2r_ag/edit?usp=sharing)

[이력 사항](https://www.notion.so/755613f92ee54803bbc438653c0a4a41)

- **아이팩토리**
    - Frontend Developer

    **Pattent play**

    서울과학기술대학교의 특허를 관리하는 특허관리시스템의 프론트엔드 개발을 혼자 맡아서 진행하였습니다.

    SPA VueJS, Vuex, Vuetify, CSS를 사용하였고, Zira, Postman, Slack 그리고 Gitlab을 사용

- **인포플라**
    - Full stack Developer

    **시청자미디어 모니터링 시스템**

    시청자미디어 재단의 백오피스 서버 모니터링 페이지의 프론트엔드 개발을 혼자 맡아서 진행하였습니다.

    SPA VueJS, Vuex, Vuetify, CSS, Apollo GraphQL를 사용하였고, Postman, Slack 그리고 Gitlab을 사용

[기술 스택](https://www.notion.so/5c2d20bb4e3947a1886a43e6933e84a6)

## 프로젝트 경험

---

### 1. **Patent play**

- 2020.09~2020.10(2개월)
- 상기 프로젝트는 프론트엔드1명 백엔드 1명으로 진행한 단기 프로젝트입니다.

    **서울과학기술대학교의 특허를 관리하는 특허관리시스템.**

    교수관리/ 학과관리/ 코드관리/ 신규케이스 등록 화면의 비즈니스 로직 작성과 전체의 90% 페이지들의 UI 마크업을 진행 하였습니다. Vuex를 사용하여 상태관리를 하였으며, 투입 당시 짜여진 20%의 코드를 최적화하기 위해 리팩토링 또한 진행 하였습니다.   800줄이 넘는 하드코딩 된 컴포넌트를 기능별로 나누어 유지보수와 협업에 용이하게 하였습니다.

- 사용기술 : Javascript es6, VueJS, Vuex, Vuetify, SASS

### 2. 시청자미디어재단 모니터링 시스템

- 2020.11~2020.11(2개월)
- 상기 프로젝트는 프론트엔드1명 백엔드 1명으로 진행한 단기 프로젝트입니다.

    **시청자미디어재단 시청각 사이트 서버 모니터링 페이지.**

    SPA 프로젝트로서, 상단 웹 소켓으로 통신하는 차트의 타임라인이 좌측으로 이동하며 넘어가도록 스트리밍 차트 구현 및 하단에는 날짜 조회로 검색 가능한 차트를 구현.

    화면 상단부 스트리밍 차트는 chartJS streaming plugin을 사용했으나, 메모리 낭비가 심한 성능 문제가 발생하여 해당 plugin 을 제거하고 직접 구현 하였습니다. 데이터가 업데이트 되었을 때, 데이터를 스트리밍 차트에 업데이트 해주었으며, 이전 데이터들은 지속해서 메모리에서 없애주었습니다. 

    해당 플러그인은 Chart canvas 를 주기적으로 업데이트해서 화면에 렌더링 하여 GPU 가 60%까지 오를 정도로 사용량이 높았습니다. 데이터를 감지하는 시점에차트가 이동하는 기능을 구현하여 canvas 렌더링을 최소화 하였고, GPU 사용량을 15%이하로 낮추었습니다. 클라이언트에서 graphql apollo서버와 통신하기 위해 graphql 쿼리를 통한 API 를 요청 하였습니다. 클라이언트의 명세가 미흡 하였지만, 동료 직원들과 더 나은 웹사이트를 개발하기 위해 서로의 아이디어를 나누며, 클라이언트에게 제안하며 화면 설계 및 기능을 구축하였습니다.

- 사용기술: Javascript es6, VueJS, VueX, ChartJS, Vuetify, CSS, Apollo-Graphql-Express

### 3. Fantasy Stock

- **프레젠테이션과 시연연상 :** [https://bit.ly/3giktLT](https://bit.ly/3giktLT)
- **Github** : [https://github.com/pikpokjeon/stockProject](https://github.com/pikpokjeon/stockProject)
- **동기:** 가족과 친구들이 주식투자에 관심이 많으며 재산이 부족하여 투자하지 못하는 경우를 보아 누구나 쉽게 접근할 수 있는 주식 모의투자 커뮤니티를 만들고 싶었다.

    **활동과정:**

    프론트엔드 개발을 맡아 진행하였습니다. 처음 웹 개발을 배우면서 진행한 프로젝트인 만큼 명세에 따른 화면설계에 최선을 다 했습니다. JSP, Jquery와 Bootstrap를 사용하여 개발하였습니다. 개발을 진행하며 공식문서를 꼼꼼히 확인하지 않아 셀렉터가 충돌되어 문제가 생긴 경험이 있었습니다. 이를 통해 외부 라이브러리를 사용하는 경우, 공식문서를 꼼꼼히 읽게되는 습관이 생기게 되었습니다. Github의 Repository flow 패턴을 따라 다른 개발자들과 협업하며 git 사용법을 익히게 되었습니다.