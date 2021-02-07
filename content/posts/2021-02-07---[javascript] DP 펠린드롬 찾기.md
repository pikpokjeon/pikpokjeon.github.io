---
title: "[JS] DynamicProgramming 펠린드롬 찾기"
date: "2021-02-07T22:40:32.169Z"
template: "post"
draft: false
slug: "dppel"
category: "알고리즘"
tags:
  - "알고리즘"
  - "자바스크립트"
  - "백준"
  - "DynamicProgramming"
description: "DP와 재귀함수를 통해 펠린드롬 검사하기. 제한 1.5초/256 MB"
---
## 팰린드롬
-  검사할 항목의 수와 테스트들이 많기에, Memoization을 활용하여 비효율적인 연산을 줄이는 것이 핵심이다.
 
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
0.5 초 (하단 참고)	256 MB	24293	6628	4352	28.197%
### 문제
명우는 홍준이와 함께 팰린드롬 놀이를 해보려고 한다.

먼저, 홍준이는 자연수 N개를 칠판에 적는다. 그 다음, 명우에게 질문을 총 M번 한다.

각 질문은 두 정수 S와 E(1 ≤ S ≤ E ≤ N)로 나타낼 수 있으며, S번째 수부터 E번째 까지 수가 팰린드롬을 이루는지를 물어보며, 명우는 각 질문에 대해 팰린드롬이다 또는 아니다를 말해야 한다.

예를 들어, 홍준이가 칠판에 적은 수가 1, 2, 1, 3, 1, 2, 1라고 하자.

S = 1, E = 3인 경우 1, 2, 1은 팰린드롬이다.
S = 2, E = 5인 경우 2, 1, 3, 1은 팰린드롬이 아니다.
S = 3, E = 3인 경우 1은 팰린드롬이다.
S = 5, E = 7인 경우 1, 2, 1은 팰린드롬이다.
자연수 N개와 질문 M개가 모두 주어졌을 때, 명우의 대답을 구하는 프로그램을 작성하시오.

### 입력
- 첫째 줄에 수열의 크기 *** N (1 ≤ N ≤ 2,000) ***이 주어진다.

- 둘째 줄에는 홍준이가 칠판에 적은 수 N개가 순서대로 주어진다. 칠판에 적은 수는 ***100,000***보다 작거나 같은 자연수이다.

- 셋째 줄에는 홍준이가 한 질문의 개수 ***M (1 ≤ M ≤ 1,000,000)***이 주어진다.

- 넷째 줄부터 M개의 줄에는 홍준이가 명우에게 한 질문 S와 E가 한 줄에 하나씩 주어진다.

### 출력
총 M개의 줄에 걸쳐 홍준이의 질문에 대한 명우의 답을 입력으로 주어진 순서에 따라서 출력한다. 팰린드롬인 경우에는 1, 아닌 경우에는 0을 출력한다.



1. 입력 부분

```javascript
let input = `18
1 1 1 2 1 1 2 3 3 2 1 1 1 1 2 2 1 1
6
1 2
2 6
3 9
7 10
8 16
13 18`.toString().trim().split('\n')

const [n,t] = [input[0],input[2]].map( _ => Number(_))
const nums = input[1].split(' ').map( _ => Number(_))

```

2. 재연산을 방지하는 Memoization 배열과, 펠린드롬을 검사해주는 함수

``` javascript
let memo = Array(n).fill([]).map((_,idx) => 
{ 
    const tmp = [...new Array(n).fill(0)], tmp[idx] = 1
    return tmp 
})

// 파라메터 설명
// (초기 비교 인덱스차이, 비교 중앙인덱스, 짝수이면 = 1)
const go = (i,center,a) =>
{
   const [end,start] = [center+i+a,center-i]
   if ( end > n || start  < 0) return 
   if ( memo[start][end] < 1 && nums[start] === nums[end])
   {
      memo[start][end] = 1
      return go(i+1,center,a)
   }
   return 
}

```

3. 테스트케이스들이 펠린드롬 가능성이 있는지 확인해본다.

``` javascript
// 답안 배열을 생성 
let answer = []

for(let i = 3; i < 3 + t ; i ++)
{
   const [a, b] = input[i].split(' ').map(e => Number(e)-1)
   
   // 해당 범위를 계산하지 않았다면
   if(memo[a][b] < 1)
   {
      // 반복이 시작되는 지점을 찾아준다.
      const start = Math.floor(((a + b) / 2))

      // 팰린드롬의 시작 가능성이 있다면, 판별 함수를 바로 실행한다.
      if(nums[start] === nums[start+1]) go(0,start,1) //짝수
      if(nums[start-1] === nums[start+1])  (go(1,start,0) ) //홀수
      answer.push(memo[a][b])
   }
   else { answer.push(memo[a][b]) }
}

// 반복문에서 콘솔로그를 출력하면 시간 초과가 뜨기에, 종료 후 답을 출력 해준다
console.log(answer.join('\n'))

```

다음번에는 최장길이 펠린드롬 수열을 구하는 문제를 풀어보겠다.