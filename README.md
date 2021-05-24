# mockData

유닛테스트 작성시 특정 타입(stirng, not string, object, ...)의 mock 데이터를 가지고 있는 패키지 입니다.  
어떤 타입이 있는 지 확인하시려면 [링크](https://github.com/goorm-dev/mockData/blob/9da569ff938d22105944f46940b2604297ee3282/index.js#L37)를 참고해주세요!

## Install
```
npm i https://github.com/goorm-dev/mockData.git#v1.1.1
```

## types
- 	`mockData.allTypeData`: '', null, 0, undefined, false, new Date(), [], 2, () => {}, 'str'
- 	`mockData.falselyList`: '', null, 0, undefined, false
- 	`mockData.notStringList`: null, 0, undefined, false, new Date(), [], 2, () => {}
- 	`mockData.notObjectList`: '', null, 0, undefined, false, 2, 'str'
- 	`mockData.notArrayList`: '', null, 0, undefined, false, new Date(), 2, () => {}, 'str'
- 	`mockData.notIntList`: null, undefined, false, new Date(), [], () => {}, 'str'
- 	`mockData.notDateList`: '', null, 0, undefined, false, [], 2, () => {}, 'str'
- 	`mockData.notBoolList`: null, 0, undefined, new Date(), [], 2, () => {}, 'str'
- 	`mockData.notObjectAndStringList`: '', 'str'
- 	`mockData.notIntArrayList`: '', null, 0, undefined, false, new Date(), 2, () => {}, 'str', [ '', '', '' ], [ null, null, null ], [ undefined, undefined, undefined ], [ false, false, false ], [ new Date(), new Date(), new Date() ], [ [], [], [] ], [ () => {}, () => {}, () => {} ], [ 'str', 'str', 'str' ]
- 	`mockData.notStringArrayList`: null, 0, undefined, false, new Date(), 2, () => {}, [ null, null, null ], [ 0, 0, 0 ], [ undefined, undefined, undefined ], [ false, false, false ], [ new Date(), new Date(), new Date() ], [ [], [], [] ], [ 2, 2, 2 ], [ () => {}, () => {}, () => {} ]
- 	`mockData.notObjectArrayList`: [ '', '', '' ], [ null, null, null ], [ 0, 0, 0 ], [ undefined, undefined, undefined ], [ false, false, false ], [ 2, 2, 2 ], [ 'str', 'str', 'str' ]
