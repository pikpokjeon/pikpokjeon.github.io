---
title: "[Project-lib] PubSub 함수형 상태관리 패턴"
date: "2021-05-25T22:40:32.169Z"
template: "post"
draft: false
slug: "pubsubStore"
category: "Frontend"
tags:
  - "Pattern"
  - "Javascript"
  - "functional programming"
  - "reactive"
  - "PubSub"
  - "상태관리"
description: "Publish-Subscribe messaging pattern과 함수형 패러다임을 이용한 간단한 프론트엔드 프로젝트 상태관리 라이브러리 개발과정"
---
<작성중>
### 여러 함수가 오리진이 같은 데이터를 활용하고 있다면 어떻게 이 데이터의 변화를 추적하며 관리를 하면 좋을까 

1. #### 데이터를 만들어내는 주체와, 그 데이터를 사용하며, 의존하는 주체를 분리하여 커플링이 일어나지 않아야 한다고 생각합니다
2. 다수의 함수가 오리진이 같은 데이터를 사용한다면, 그 말은 곧 함수는 동기화 된 최신의 데이터를 가지거나, 일회성으로 Props형식으로 데이터를 자식으로 넘겨주며 생명을 다 할 수 있습니다.

- 특정 주제로 묶은 데이터의 집합을 원하는 함수에게만 전달하고, 데이터가 변경 되었을 시에만 데이터 업데이트가 진행되게 만들고 싶었습니다.
- 위에서 언급한 바와 같이 데이터를 만드는 주체는 데이터를 받는 주체를 몰라도 됩니다. 해당 행동을 하는 함수는 그저 행위목적에만 집중합니다 (Reactive)



#### 문제 해결을 위한 여러 방법들을 찾아 보던 중, 네트워크 방법론의 뿌리를 가진 PubSub Messaging 패턴을 알게 되었습니다.
( <small> 이는 프론트엔드 프레임워크/라이브러리 상태관리 패턴인  Flux의 기반이 됩니다. </small> )

간단히 해당 패턴의 구조를 제가 만들고자 하는 스토어 라이브러리에 비교하여 설명을 해보겠습니다.

```javascript

const { pipe } = require('./helper.js')

```

```javascript

/**
 * 
 * @param {*} msg 개수에 상관없이 [] 배열에 초기에 저장할 객체 전달
 * @param {*} sub 스토어를 구독할 구독자(함수)를 배열에 담아 전달
 */
const Store = (msg, sub) =>
{

    // 메세지 저장 객체
    let _store = {}

```

```javascript

    const ack = ({ topics }) =>
    {
        topics.forEach(topic => _store[topic].subs.forEach(s => s(_store[topic].data)))
    }

```

```javascript

    const subscribe = ({ topics, sub }) =>
    {
        for (const topic of topics)
        {
            _store[topic].subs.push(...sub)
        }
        return { topics }
    }

```

```javascript

    const getData = (store) => (topic) => store[topic].data

```
    

```javascript

    const setData = (msgs, sub) => 
    {
        const topics = msgs.reduce((acc, cur) =>
        {
            const prevStore = _store[cur.topic]

            const temp = {
                [cur.topic]: {
                    data: prevStore ? { ...prevStore['data'], ...cur.data } : { ...cur.data },
                    subs: prevStore ? [...prevStore['subs']] : []
                }
            }

            Object.assign(_store, temp)
            acc.push(cur.topic)

            return acc

        }, [])

        return {topics, sub}
    }
    

    const pubSubPipe = (msgs, subs) => [ pipe( setData(msgs, subs), subscribe, ack ) ]


    return { setData, pubSubPipe, subscribe, ack, getData: getData(_store) }

}
```

```javascript
/**
 * Store 생성자를 초기화 때와 분리한다
 * @param {*} msgs 데이터 정보
 * @param {*} subs 데이터를 구독하는 함수
 *   
 */

const store = (msgs, subs) =>
{
    const pubSubStore = Store(msgs, subs)
    pubSubStore.pubSubPipe(msgs, subs)

    return pubSubStore

}

```