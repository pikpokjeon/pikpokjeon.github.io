---
title: "[Javascript] Destructuring Assignment feat.구조분해할당"
date: "2021-06-05T22:40:32.169Z"
template: "post"
draft: true
slug: "destructuring-assignment"
category: "Javascript"
tags:
  - "Javascript"
description: "객체나 배열의 전체가 아닌 일부의 값만 가져온다!"
---

# 구조 분해 할당 <small>Destructuring assignment</small>

> 데이터를 복사한 이후 변수로 '분해(destructurize)' 해준다는 뜻. 분해 대상은 변형되지 않는다.

---

- 객체나 배열의 전체가 아닌 일부를 변수로 분해 할 수 있다

```javascript
const [first, second] = [1, 2]
const { first, second } = { first: 1, second: 2 }
```

- 좌측의 할당 연산자는 'assignables' 할당 가능한 것들이면 된다.

```javascript
const number = ({}[(number.first, number.second)] = [1, 2]) // 객체 프로퍼티도 가능
```

- 함수의 매개변수가 많거나 매개변수의 기본값이 필요한 경우에 사용 할 수 있다
- 배열에 빈 공간을 만들어 필요없는 요소를 건너뛸수 있다

```javascript
const [first, , third] = [1, 2, 3] // third = 3
```

- '이터러블 (iterable = 반복 가능한 객체)' 이면 구조 분해 할당을 사용 할 수 있다.

```javascript
const [first, second] = "12" // ['1', '2'], first = '1'
const [first, second] = new Set([1, 2])
```

- 반복문을 돌릴 떼 키와 값을 뽑아낼 수 있다

```javascript
const number = { first: 1, second: 2 }
for (const [key, value] of Object.entries(number)) {
  log(key, value) // first, 1 ...
}
```
