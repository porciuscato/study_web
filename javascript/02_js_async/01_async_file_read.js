// 파일 시스템 라이브러리
const fs = require('fs')


// console.log('파일 읽기 전')

// 파일 쓸 때
// fs.writeFile
// fs.readFile('me2.json', (err, data) => {
//     // console.log('파일 읽기')
//     setTimeout(() => {
//         console.log(JSON.parse(data))
//     }, 10000)
// })

// console.log(content)

// 비동기적함수( , function)

// console.log('끝')



let content = ''

console.log("파일 읽기 전")

// 이 함수는 callback이 없다.
content = fs.readFileSync('me2.json')

console.log('읽기 종료')

console.log(JSON.parse(content))

console.log('끝')