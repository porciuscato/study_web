const nothing = () => {
    setTimeout(nothing3, 500)
    console.log('2초 끝남')
}

const nothing2 = () => {
    console.log('1초 지남')
}

const nothing3 = () => {
    console.log('이건 뭔가')
}
console.log('start')
// 시간을 멈춰두는 것. 파이썬은 sleep()
// 첫번째 인자는 함수, 두 번째 인자는 ms
setTimeout(nothing, 2000)
setTimeout(nothing2, 1000)
console.log('end')