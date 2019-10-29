const nums = [1, 2, 3, 4]
console.log(nums[0])
console.log(nums[nums.length - 1])

console.log(nums.reverse())
console.log(nums)

nums.push(0)
console.log(nums)

nums.pop()
console.log(nums)

// unshift, shift, includes, indexOf
nums.unshift(5) // 맨 앞에 넣기
console.log(nums)

nums.shift() // 맨 앞 빼기
console.log(nums)

console.log(nums.includes(0))
console.log(nums.includes(4))

console.log(nums.indexOf(1))


// 이터러블.forEach(함수)
//nums.forEach(함수)

// -> nums 배열을 순회하며, 함수를 각각의 요소에 실행
// nums.forEach(function(순회되는요소) {})
let i = 0

const squared = nums.map(num => num ** 2)
console.log(squared)