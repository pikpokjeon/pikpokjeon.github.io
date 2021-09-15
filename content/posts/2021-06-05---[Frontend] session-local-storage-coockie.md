---
title: "[Frontend] local Storage / Session Storage / Cookie"
date: "2021-09-05T22:40:32.169Z"
template: "post"
draft: true
slug: "frontendStorages"
category: "Frontend"
tags:
  - "frontend"
description: "클라이언트 단의 저장소에 대해서 알아보자."
---

## local Storage / Session Storage / Cookie

- 동일 출처 정책 (SOP)를 따르기 때문에 다른 도메인에서 접근 불가하다.

## Cookie

- 생성 - 클라이언트/서버
- 유지시간 - 설정에 따름
- 서버통신 - 가능
- 취약점 - XSS/CSRF
- 크기 4MB
- 제한 : 300개/ 4MB / 도메인당 쿠키 20개

## Local Storage

- 생성 - 클라이언트
- 유지시간 - 삭제하기까지
- 서버통신 - 불가
- 취약점 - XSS
- 크기 5MB

## Session Storage

- 생성 - 클라이언트
- 유지시간 - 브라우저 세션 동안에만 (페이지를 다시 로드하면 생성됨)
- 서버통신 - 불가
- 취약점 - XSS

# Local Storage / Session Storage

- 키:값 형식으로 값은 문자열만 저장 가능하다.
- API를 사용하여 저장하기 위해 JSON을 직렬화 한다.
- 세션 저장소는 보통 서버 측 언어/ 프레임워크에서 지원하는 모든 기본요소/객체를 저장할 수 있도록 한다.

### 1. 저장 중인 데이터를 지속적으로 사용할 수 있는경우

- 세션 저장소 보다 로컬 저장소 가 좋다. 하지만 둘다 사용자가 지울 수 있어서 지속성에 의존 할 수 없다. 클라이언트 스크립트에 중요하지 않은 데이터를 유지하는데 적합하다.

# Cookie

- 사용자가 쉽게 조작가능하고, 데이터는 일반 텍스트로 읽을 수 있다.
- 민감한 데이터를 저장하려는 경우 세션이 유일한 옵션이다.
- SSL을 사용하지 않는 경우 개방형 wifi에서 전송 중에 쿠키 정보가 가로채질 수 있다.
- 쿠키는 인증 목적과 데이터의 지속성(세션)을 위해 사용되므로, 페이지에 유효한 모든 쿠키는 동일한 도메인에 대한 모든 요청에 대해 브라우저에서 서버로 전송된다. ( 클라이언트와 서버 간의 트래픽 양이 증가한다.)

### 토큰

- 일반적으로 쿠키는 인증 세션 및 광고 추적을 위한 식별 토큰을 저장하는데 사용된다
- 토큰은 일반적으로 그 자체로 사람이 읽을 수 있는 정보가 아니라 앱 또는 데이터베이스에 연결된 암호화 식별자이다.

# Client vs Server

- HTTP는 상태를 저장하지 않는 프로토콜이기에 웹사이트에 돌아올 때 이전에 방문한 사용자를 식별할 방법이 없다.

## 세션 데이터

- 세션 데이터는 쿠키 토큰에 의존하여 반복 방문에 대해 사용자를 식별한다.
- 앱(서버) 측에 의해 완전히 제어되기 때문에 본질적으로 민감하거나 안전한 모든 데이터에 적합하다.
- 사용자가 쿠키를 삭제하거나 브라우저/기기를 전환하는 경우 손실 됨.

#### 레퍼런스

1. [What is the difference between localStorage, sessionStorage, session and cookies?](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies)

---