---
title: "[SSH] 한 컴퓨터로 여러 Github 계정 사용하기"
date: "2021-02-28T22:40:32.169Z"
template: "post"
draft: true
slug: "github_ssh"
category: "Infra"
tags:
  - "Github"
  - "SSH"
description: "SSH 연결을 사용하여 여러 계정을 등록 하여보자"
---

Github 계정이 

### 입력 받기 위해 필수적으로 필요한 코드
- 아래에서 언급되는 input 백틱 문자열 부분을 변경해 줘야합니다.

``` javascript

const fs = require('fs') // 파일시스템 불러오기
// 입력부를 스트링으로 불러와서 트림으로 앞뒤 공백을 제거해 줘야합니다.
// 이후 이 input에서 받아올 데이터들을 정리합니다.
// 하단에서 언급되는 백틱 내부 문자열 부분을 아래의 코드처럼 변경 해줘야 합니다
let input = fs.readFileSync('/dev/stdin').toString().trim()

```

### 숫자

``` javascript

// 단일 숫자 8
let input = Number(fs.readFileSync('/dev/stdin').toString().trim())

// 공백을 둔 복수 8 8 8
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(_ => Number(_))

```

### 문자열
``` javascript

let input = `1 
the cat chased the rat while
the dog chased the cat into the rat house`.toString().split('\n')

const N = input.shift() //테스트 케이스
const S = input.map( e => e.split(' ')) 

```

### 처음 테스트케이스 갯수를 모를 때

1. 마지막 배열의 원소가 0 0 일 때 종료

``` javascript
let input = `1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
0 0`.toString().trim().split('\n')  // 줄바꿈으로 문자열을 쪼개줍니다.
```

입력 부분 문자열을 배열화 하여, shift() 연산을 통해 배열 길이를 줄여주며,
최종적으로 길이가 0이 될 때 까지 반복합니다. 하지만 모든 테스트케이스의 종료 시점이
0 0 임을 나타내기에, 반복문 안에 조건을 주어 return 하여 종료 해주어야 합니다.
(종료를 해주지 않으면 백준에서 런타임 에러가 뜹니다.)

``` javascript
while(input.length) // 입력 총 길이만큼 반복한다
{
    // W 원소개수, H 테스트케이스 개수
    let [W, H] = input.shift().split(' ').map(_ => Number(_))
    // 0 0 일 때 입력 종료
    if (w === 0 && H === 0) return
    let tests = []
    
    // H만큼 돌면서 테스트 케이스들을 추가해준다
    for(let _ =0; _ < H; _ ++)
    {
         tests.push(input.shift().split(' ').map(_ => Number(_)))
    }
    // 여기서 해당 케이스의 함수를 작성하며, 바로 출력을 해주면 된다.
    
}
```

2. 원소 개수/ 배열/ 테스트케이스

``` javascript

let input = `18 
1 1 1 2 1 1 2 3 3 2 1 1 1 1 2 2 1 1
6
1 2
2 6
3 9
7 10
8 16
13 18`.toString().trim().split('\n')

// n = 18  원소의 개수, t = 6 테스트케이스 개수
// 각 테스트 케이스 배열화
const [n,t] = [input[0],input[2]].map( _ => Number(_))
const nums = input[1].split(' ').map( _ => Number(_))
```
