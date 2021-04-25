---
title: "[Frontend] html <script> 태그에서 import 구문 사용하여 모듈 불러오기  "
date: "2021-04-14T22:40:32.169Z"
template: "post"
draft: false
slug: "use-import-in-html-script"
category: "frontend"
tags:
  - "프론트엔드"
  - "자바스크립트"
  - "모듈"
description: "번들링 라이브러리 없이, html내부에서 import를 사용하여 자바스크립트 모듈을 불러오는 방법"
---
 <작성중>

### html에서 여러 javascript 파일을 불러올 때, 모듈로 필요한 코드만 가져와 봅시다.
- 최신 브라우저에서는 자바스크립트의 네이티브 모듈기능을 지원하기 시작하였습니다. 
- 브라우저에서는 모듈의 로딩을 최적화 할 수 있기 때문에 webpack과 같은 번들링 라이브러리를 사용하는 것 보다 효율적입니다.

#### <script type="module">
- javascript 파일을 html에 삽입할 때, 타입을 'module'로 정의함으로써 'import' 구문을 사용가능 하도록 합니다.

#### 1. html
- 모듈 스크립트는 자동으로 defer 속성을 가지게 됩니다.
``` html
<!DOCTYPE html>
...
<body>
// 인라인스크립트에서 모듈을 불러옵니다.
<script type="module">
    import {chartIdx} from './chart/store.js' //*로컬에서 CORS문제가 발생합니다. 서버를 통하도록 합니다.
</script>
// main.js 에서 모듈을 불러옵니다.
<script type="module" src="./main.js"></script>
</body>
</html>
```

#### 2. main.js
``` javascript
import {chartIdx} from './chart/store.js'  //*로컬에서 CORS문제가 발생합니다. 서버를 통하도록 합니다.
...
```

#### 3. store.js
- Named export : 이름을 참조하여 내보냅니다. 불러 올 때도 마찬가지 입니다.
- default export : 모듈의 기본값을 사용합니다, 하나의 모듈에는 하나의 default export만 허용합니다.
```javascript

const chartIdx =
{
    lastIdx: -1,
    selectedIdx:
    {
        begin: -1,
        end: -1,
    }
}
// 객체에 초기이름을 부여하기 위해 사용합니다.
// 함수와 객체 등 여러 타입이 배열에 들어간 경우, 이 원소들을 객체로 복사해서 재사용 할 때
// 고유한 이름을 남겨줍니다. 이 부분은 다음번에 설명 하도록 하겠습니다.
chartIdx[Symbol.toStringTag] = 'chartIdx'

export {chartIdx}
```

