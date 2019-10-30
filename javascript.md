ctrol + shift + j 로 자바스크립트를 컨트롤

```javascript
window.document...
```

객체는 클래스로부터 생성될 필요가 없는데 자바스크립트가 그러하다.

자바스크립트는 브라우저 조작 언어였었다. node.js가 나오기 전까지

그 전까지는 브라우저 안에서만 있었는데, 이걸 밖으로 끌어낸 것이 node.js (구글에서 만듦)

node.js 설치하자 & npm

초콜라티

파일을 실행할 땐

`node {파일이름}`

- 콘솔 출력

  ```javascript
  // 이렇게 선언하면 전역변수가 됨
  x = 1
  console.log(x)
  ```

  되도록 global 변수는 쓰지 않는 것이 좋다. scope를 망친다.

  ```javascript
  // 지역변수 - 해당하는 한 변수에 대해 한 번만 쓸 수 있다.
  let x = 1 // 이건 선언을 하는 것
  x = 2 // 값 변경
  console.log(x)
  ```

- `let`은 블록스코프

  ```javascript
  let x = 1
  x = 2
  if (x == 2){
      let x = 3
      console.log(x)
  }
  console.log(x)
  ----------------
  // 3, 2가 출력됨
  ```

  

 https://twitter.com/BrendanEich/status/951554266535141377 

=> 세미콜론은 쓰지 말자

- `const` 변하지 않는 값을 만들자

  ```javascript
  const MY_FAV = 13
  console.log('내가 좋아하는 숫자는 ' + MY_FAV)
  console.log(`내가 좋아하는 숫자는 ${MY_FAV}`)
  ```



declare : 선언 (lvalue)

assign : 할당

- `var` 은 쓰지 않는다! var은 쓰면 그 변수가 코드 맨 위로 올라가는 효과를 낸다. 이건 예전 코드이므로 쓰지 않는다.





언어공부

```
자바스크립트는 `저장`과 `계산(조작)`을 어떻게 하는가?

- 내가 알고 있는 언어와의 차이를 보고
- 관례를 본다.

=> 사실상 이 두 가지만 알면 끝난 것

그리고 추가적으로 함수까지 보고 ++ 클래스(가면 좋고 안 가도 상관 없고)

===>>> 바로 구현에 들어간다
구현은 내가 잘하는 언어로 했던 것을 바로 옮겨본다.
기초만 빨리 보고 다른 언어로 하는 것
```

구현 단계에서 더 많이 배운다!!

callback 파트가 좀 어렵다

### 1. 저장파트

- 무엇을, 어디에, 어떻게

  - 무엇을(자료형, Data Type)

    - type() in python

    - Primitive Types(원시자료형) : 숫자(아무숫자, Infinity) / 글자(' ', " ", ``) / 불리언(true, false) / Empty Value ( undefied(default), null )

      ```javascript
      typeof 2 // number
      typeof 'hello' // string
      typeof true // boolean
      
      typeof Infinity
      typeof NaN // not a number
      ```

      - typeof 는 reserved word 예약어

  - 어디에(변수명, identifier, Container Type)

    - 상수명은 : `ALLCAP`

    - 변수명이나 함수명 : `camelCase`로 작성

    - 클래스는 : `PascalCase`

      => 그러나 너무 바인딩되지는 말고

비교는 == 보다는 `===`

[] === [] 이 false가 나오는 이유는 서로 주소가 다르기 때문에 다르다고 나온다.



원시자료형처럼 보이지만 method 와 property를 사용할 수 있다.

가령

```js
'hello'.toUpperCaser()
```



```javascript
const a = 1
const b = '1'
a == b // true: 글자 1을 숫자 1로 형변환 시켜줌
a != b // false
```

=> 그래서 `타입스크립트 ` 를 씀. 타입 변환이 함부로 일어나지 않는다.



- 논리연산자
  - ! : ban
  - &&
  - || : pipe

- 삼항연산자

  - `참/거짓 ? 참일경우 : 거짓일경우`

    const result = Math.PI > 4 ? '네' : '아니오'

- 사용자 입력 받기
  
  - `prompt()`
- 사용자에게 출력
  
  - `alert()`



- 배열

  ```javascript
  let menus = ['대우식당', '바스버거', '진가와', '세븐브릭스']
  menu[0]
  for (let i = 0; i < menus.length; i++) {
  	console.log(menus[i])
  }
  ------------------------------------------------------
  for (let menu of menus) {
  	console.log(menu)
  }
  ------------------------------------------------------
  // 함수를 넣어주는 형식 map과 비슷: map(int, [])
  menus.forEach(function(menu) {
  	console.log(menu)
  })
  
  menus.forEach(menu => {
      console.log(menu)
  })
  ```



### 2. 함수

```javascript
function add(num1, num2) {
	return num1 + num2
}
```



```python
add = lambda x, y : x + y
```



표현식 정의: 이 방식을 많이 쓴다.

```javascript
const sub = function (num1, num2) {
	return num1 - num2
}
sub(7, 2)
```

- 이렇게 하는 이유? 그냥 함수를 정의하면 var처럼 이 줄에 다달았을 때 시행되는 것이 아니라, 맨 처음에서 실행이 되기 때문

혹은 ES6부터

```javascript
// arrow function
const mul = (x, y) => {
    return x * y
}
```

```javascript
// 인자가 하나면 괄호도 줄일 수 있고, 한 줄이면 블럭도 없앨 수 있고, return 도 하나면 없앨 수 있다.
const ssafy1 = name => {
    return `안녕, ${name}`
}
const ssafy1 = name => `안녕, ${name}`

const ssafy2 = () => {}
const square = num => num**2
```

=> 괄호를 없애려면, 인자가 한 개만 있을 때

=> 블럭을 없애려면, 표현식이 하나만 있을 때



### 3. 배열

```javascript
const nums = [1, 2, 3, 4]
console.log(nums[0])
console.log(nums[nums.length - 1])
```

```javascript
console.log(nums.reverse())
console.log(nums)
```

- reverse() 함수 쓰면 원본이 바뀜

- `push()`, `pop()` : 파이썬의 append, pop

  ```javascript
  nums.push(0)
  console.log(nums)
  
  nums.pop()
  console.log(nums)
  ```

- `unshift`, `shift`, `includes`, `indexOf`

  ```javascript
  // 맨 앞에 넣기
  nums.unshift(5) 
  console.log(nums)
  
  // 맨 앞 빼기
  nums.shift() 
  console.log(nums)
  
  // includes 있는지 확인
  console.log(nums.includes(0))
  console.log(nums.includes(4))
  
  // 인덱스 확인
  console.log(nums.indexOf(1))
  ```

- 배열 순회하기

  ```javascript
  반복문 
  ```

  혹은

  `이터러블.forEach(함수)`

  ```javascript
  // 이터러블.forEach(함수)
  //nums.forEach(함수)
  
  // nums 배열을 순회하며, 함수를 각각의 요소에 실행
  // nums.forEach(function(순회되는요소) {})
  
  let i = 0
  nums.forEach(function(num) {nums[i] = num ** 2;i++;})
  console.log(nums)
  ```

  ```javascript
  let i = 0
  nums.forEach(function(num) {
      nums[i++] = num ** 2
  })
  console.log(nums)
  ```

  ```javascript
  let newNums = []
  nums.forEach(function(num){
      newNums.push(num**2)
  })
  console.log(newNums)
  ```

  ```javascript
  const squared = nums.map(function(num){
      return num ** 2
  })
  console.log(squared)
  ```

  ```javascript
  const squared = nums.map(num => num ** 2)
  console.log(squared)
  ```

  

### 4. object

```javascript
// object 만든다고 하면 딕셔너리로 알고 있으면 됨
// 키를 변수명처럼 써도 작동함!
const me = {
    name: 'john',
    sleep: function() {
        console.log('쿨쿨')
    }
    appleProducts: {
        macBook: '2018pro',
        iPad: '2018pro',
    },
}

console.log(me['name'])
// console.log(me[name]) 은 작동 안함
console.log(me.name)

console.log(me.sleep) // [Function: sleep]
console.log(me.sleep()) // 쿨쿨, undefined (return 값이 없으므로)

console.log(me.appleProducts.macBook)
```

 마치 딕셔너리처럼 보이지만 더 강력

-> property도 가지고 있고 method도 가지고 있으므로

원래 js에 클래스가 없었다.



- JSON 파일 다루기

  - JSON(javascript object notation) => 자바스크립트의 객체처럼 표현한 것
  - `JSON.stringify()`
  - `JSON.parse()`

  ```javascript
  const me = {
      name: 'john',
      appleProducts: {
          macBook: '2018pro',
          iPad: '2018pro',
      },
  }
  
  // 오브젝트를 json 파일로 만들어주는 것
  // JSON.stringify()
  const meJSON = JSON.stringify(me)
  console.log(typeof meJSON)
  
  // json을 오브젝트로
  JSON.parse()
  ```

- 만든 걸 JSON 파일로 만들기

  ```javascript
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
  
  fs.writeFile('me.json', meJSON, err => {})
  // or
  fs.writeFileSync('me2.json', meJSON)
  ```

- JSON을 파일로 가져오기

  ```javascript
  const fs = require('fs')
  
  const me = {
      name: 'john',
      appleProducts: {
          macBook: '2018pro',
          iPad: '2018pro',
      },
  }
  
  const meJSON = JSON.stringify(me)
  const meObject = JSON.parse(meJSON)
  console.log(typeof meObject)
  console.log(meObject)
  ```



```javascript
window.document
window.document.querySelector() // => 태그에 바로 접근하기
```

document object model => DOM

```javascript
const bg = document.querySelector('.bg')
bg.firstElementChild.remove()
```



```javascript
const newDino = document.createElement('img')
newDino.src = 'https://store-images.s-microsoft.com/image/apps.38351.14426311725358695.736eb785-1d29-478c-a909-1900849773e9.4247f5ee-1daa-4c97-96c2-23868f1fbc45?mode=scale&q=90&h=200&w=200&background=%230078D7'
newDino.alt = 'dino'
newDino.id = 'dino'
newDino.style.width = '100px'
newDino.style.height = '100px'
```

```javascript
bg.append(newDino)
bg.insertBefore(newDino, bg.firstElementChild)
```



이벤트리스너를 통해 이벤트를 확인할 수 있다.(클릭, 호버 등등)

eventlistenr

```html
    <script>
      const dino = document.querySelector('#dino')
      dino.addEventListener('click', event => {
        alert('아야')
        console.log(event)
      })

      document.addEventListener('keydown', e => {
        console.log(e)
      })

      document.addEventListener('mousemove', e => {
        console.log(e)
      })
    </script>
```







Single Page Application

장고처럼 view함수 호출 없이 한 페이지에서 실행됨



Giphy Developer

입력값을 Giphy API로 보내서 화면에 띄운다.



네트워크 공부

```
cmd
tracert 8.8.8.8 (trace router라는 뜻)
coursera network(Grow with Google) - the bits and bytes of computer networking
```





```javascript
GiphyAPICall.open()
GiphyAPICall.send()
```





#### JS의 async

----

- JS는 싱글 스레드 언어가 아닌 멀티 스레드 언어다.
- 다만 async 함수가 있을 뿐이다. (언어가 만든 것)

---

1. 어떻게 함수가 선언되기도 전에 사용될 수 있는가?

   async

   ```javascript
   const nothing = () => {}
   console.log('start')
   // 시간을 멈춰두는 것. 파이썬은 sleep()
   // 첫번째 인자는 함수, 두 번째 인자는 ms
   setTimeout(nothing, 3000)
   console.log('end')
   ```

   그냥 봐서는 start -> 3초후 -> end 같은데, 오히려 start -> end -> 3초 이렇게 작동함

   그 이유는??

   파이썬은 synchronous and blocking 하는데... 즉 코드가 순차적으로 시행된다. 코드가 순차적으로 작동하는 이유는 blocking 이기 때문, 즉 한 코드의 시행이 끝나야 다음 코드가 진행된다.

   그러나 JS는 그렇지 않다.

   => 이런 성질 때문에 동기적이지 못하다 -> asynchronous. 그 이유는 언어가 non-blocking이기 때문이다.

   원래는 언어가 코드 진행을 막아야하는데 이 언어는 그렇지 않다.

   이는 JS가 브라우저를 조작하는 언어이기 때문이다?

   만약 JS가 파이썬과 같이 동기적으로 움직인다면....

   -> 실험을 위한 코드: while() : 코드 진행을 막을 수 있다.

   ```javascript
   // 일단은 시간을 확인하는 코드
   const now = new Date()
   ```

   ```javascript
   const sleep = sec => {
   	const startTime = new Date().getTime()
   	while(Date().getTime() - startTime < sec * 1000){}
   }
   ```

   => 동기적이게 되면 이 함수가 끝나기 전까지 우리는 아무것도 할 수가 없다.

   예전에는 브라우저가 싱글 스레드였다. (지금은 multithread. 여러 명이 일하는 구조)

   그래서 JS 코드 중에 종료를 예측할 수 없는, 시간이 오래 걸리는, 확정되지 않은 작업들이 있으면 `asynchronous` 하게 작동하도록 만들었다.

   -> 주문만 받아놓고 다음 손님을 받는다. 일단은 요청을 받고 어딘가에 쌓아놓는다.(이것이 `callstack`). eventloop

   일반적인 언어의 synchronous와 blocking을 하지 말고, 완료되는 시점에 따라 시행되도록 언어를 구성했다.

   그렇다면 자바스크립트는 비동기적 언어다? 

   `아니다!! 그렇다고 지 맘대로 아무 순서대로 시행되는 것이 아니다. 동기적으로 시행이 되지만, 부분적으로 비동기적으로 작동한다.`

   =>> async 하게 구현된 함수들이 있다!!

   ex) setTimeout -> async한 함수이기 때문에 callback에 담아두고 일단은 다음 코드를 실행한다. 그리고 완료가 되면 결과를 보여준다. 

   eventloop라는 것이 있어서 여기에 스택처럼 쌓이지만 스택은 아니다. 

    http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D 

   => 이런 특성이 지금은 복잡해 보이지만.... 웹서버를 구축할 때 빛을 발한다. 

   장고를 배포하려면 많은 엔진을 붙여야 한다... 멀티 스레드를 직접 구축해야 한다. 그러나 자바스크립트는 배포하기가 정말 편하다! 언어 자체가 그렇게 만들어졌기 때문이다!

   자바스크립트가 하나의 싱글 스레드가 아니다! 내부적으로는 멀티 스레드다. 진행되는 방식이 싱글 스레드처럼 보인다. (실행 context가 single thread) -> 언어단 자체에서 멀티 스레드를 만들어줬기 때문에, 우리는 그 밑단을 신경쓸 필요가 없으니! 초반에는 cost가 커 보이지만 후반에는 더 좋다는 것....



2. 밑에서 정의된 것들이 왜 위에서도 작동하는가?

   -> addEventListener는 아주 대표적인 async 함수다! 

   우리가 병렬적으로 정의한 것이 아니라, 

   

