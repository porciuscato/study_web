// object 만든다고 하면 딕셔너리로 알고 있으면 됨
// 키를 변수명처럼 써도 작동함!
// const me = {
//     name: 'john',
//     // sleep: function() {
//     //     console.log('쿨쿨')
//     // },
//     appleProducts: {
//         macBook: '2018pro',
//         iPad: '2018pro',
//     },
// }

// console.log(me['name'])
// // console.log(me[name]) 은 작동 안함
// console.log(me.name)

// console.log(me.sleep) // [Function: sleep]
// console.log(me.sleep()) // 쿨쿨, undefined (return 값이 없으므로)

// console.log(me.appleProducts.macBook)

// JSON(javascript object notation) => 자바스크립트의 객체처럼 표현한 것

// 외부 파일이나 라이브러리를 가져오는 것
// fs: file system
const fs = require('fs')

const me = {
    name: 'john',
    appleProducts: {
        macBook: '2018pro',
        iPad: '2018pro',
    },
}

// 오브젝트를 json 파일로 만들어주는 것
const meJSON = JSON.stringify(me)
// console.log(typeof meJSON)

// 현재 폴더에 만드려면 파일명만 써주면 됨
// fs.writeFile('me.json', meJSON, err => {})
// fs.writeFileSync('me2.json', meJSON)

// json을 오브젝트로
// JSON.parse()

const meObject = JSON.parse(meJSON)
console.log(typeof meObject)
console.log(meObject)