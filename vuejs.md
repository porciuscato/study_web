+ vscode 전체 정렬 -> `shift + alt + F`



# 11월 4일

vuejs를 왜 쓰는가?





#### JS를 왜 쓰는가?

**Client Side Render**을 위해서 사용한다.

유저는 브라우저를 통해 서버에 접근한다. 이때 서버가 랜더링하는 것(Server Side Rendering)이 아니라, 클라이언트 측에서 랜더링을 하는 것.

-> 좋아요, 팔로우, 댓글, 글쓰기 등 거의 모든 것이 가능....

서버측에서는 요청, 응답의 구조.

페이지의 전환 없이 `사용자 경험`이 좋아지면 페이지에 머무르는 비중이 높아진다.



vue.js가 쉬운 건 아니지만, 이걸로 buildup을 하면 앱을 구축하기가 쉬워서





### ㅇㄹ

addEventlistener에는 arrow를 쓰지 않는다. this가 특이한 것이기 때문에....

이때 `this` 는 다른 언어와 다르다. 

```javascript
<script>
    const userInput = document.querySelector('#userInput')
    const inputArea = document.querySelector('#inputArea')
    // arrow function을 쓰면 this의 context를 바꾼다.
    userInput.addEventListener('input', function(event) {
      inputArea.innerText = event.target.value
    })
</script>
```

그러나... 극혐

그래서 react, angular, vuejs 등이 등장



vuejs도 장고와 마찬가지. 우리가 직접 DB와 대화하지 않고 ORM을 통했듯이 vuejs를 사용하면 우리가 뭘 할지만 알려주면 된다.





vue를 가져오자!

1) cdn 처럼

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

=> Vue를 사용하려면 vue객체를 생성해야하는데 이때 keyword `new`를 붙여야 한다.

그리고 매개변수로 오브젝트를 넘겨주는데, 이때 여러 설정을 넣는다.

```javascript
  <div id="app">
    <h1>댓글달기</h1>
    <input type="text" v-model="msg">
    <p>{{ msg }}</p>
  </div>
  <script>
    const app = new Vue({
      // Vue instance를 넣을 위치를 설정해주는 것
      // 여기서 하면 돼! 라고 알려주는 것
      el: '#app',
      // data가 장고의 context와 비슷
      data: {
        msg: '와 vuejs 시작했다.',
      },
    })
  </script>
```



# Vue.js

SPA 프레임워크가 자바스크립트로 웹 컨트롤을 쉽게 만들어줌

= Evan You

 [http://blog.naver.com/PostView.nhn?blogId=fastcampus&logNo=220969253285&refer=%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%8A%A4%EB%9F%BD%EB%8B%A4](http://blog.naver.com/PostView.nhn?blogId=fastcampus&logNo=220969253285&refer=개발자스럽다) 

- 전통적인 프레임워크는 요청과 응답의 리로딩이 필요했던 것에 비해 가볍다

=> google maps가 JS로서 플래쉬를 대체해면서 부상함

프론트엔드 중심으로 사고하게 되면서... angular, react, vue 등등



MVC 가 SPA와서는 더 간결해진다. 중간의 view 모델이 변하며, view와 모델이 하나로 묶인 듯한 느낌

Data Binding.. 위에서 app 객체가 view 역할을 해주는 것



선언적 프로그래밍 패러다임에서는 우리가 모든 밑단을 고려하지 않고, 우리의 앱이 어떻게 작동할 거야 라고만 알려주는 것 -> 우리는 그림만 그리면 되는 것 : 만들어서 보여주는 건 Vue 네가 해줘! 라고 하는 것

웹 인터페이스에서는 반드시 쓴다. 



가장 좋은 문서는 공식 문서. 특히 Vue는 잘 쓰여져있기로 유명



##### vs 코드에서 vue관련 앱을 깔자

`Vetur`

`VueVSCode Snippets`

chrome extensions :`Vue.js devtools`





만들어진 vue instance를 우리 앱에서 쓰겠다, mount하겠다고 하면 항상 그 위치를 얘기해줘야 한다.

```javascript
  <div id="app"></div>
  <div id="app2"></div>
    
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  // view 코드를 쓰려면 CDN은 항상 vue 코드 위에 있어야 한다.
  // Vue Model
  const app = new Vue({
    el: "#app",
  })

  const app2 = new Vue({
    el: "#app2",
  })
</script>
```



우리가 쓰는 Vue는 M V VM. 그런데 (V VM)이 상당히 비슷

DTL에서 했던 것처럼 쓰면 사용할 수 있다.`{{ }}`

```html
<body>
  <div id="app">
    <p>{{ message }}</p>
  </div>
    
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  const app = new Vue({
    el: "#app",
    data: {
      message: '안녕 Vue.js'
    },
  })
</script>
```



=> 이걸 Reactive 방식(반응형)이라함.

부트스트랩은 Responsive(반응형: 디바이스 혹은 화면 크기에 반응하는 것)

Reactive형은 데이터의 변화에 대한 반응형이다. -> 자동 적용(반영)



methods를 만들때

```javascript
    methods: {
     changeName: function() {
       
     } 
```

이렇게 쓰는데 워낙 빈번하게 많이 쓰이다보니, ES6부터

```html
	methods: {
     changeName() {
       
     } 
```

이걸 지원



원래는 property에 접근하려면

app._data.name으로 접근해야하는데 너무 귀찮으니까 app.name으로 지원

methods는 실제로는

app.$options.methods.changeName 이렇게 들어있음

=> `$`와 `_` 로 시작하는 변수는 되도록 만들지 않도록 해라. Vue 시스템이 주로 사용하기 때문



Vue로 for문 돌리기

```html
<ul>
    <li v-for="todo in todos">{{ todo }}</li>
</ul>

 const app = new Vue({
    el: "#app",
    data: {
      todos: [
        'JS 정리하기',
        'Github 이쁘게 만들기',
        '코테 기출문제 풀기',
      ]
    },
```

그런데 완료 여부를 저장하기 위해 object형태로 만들 것이다.

```javascript
<ul>
	<li v-for="todo in todos">{{ todo.content }}</li>
</ul>

const app = new Vue({
    el: "#app",
    data: {
      todos: [
        { content: 'JS 정리하기', completed: false },
        { content: 'Github 이쁘게 만들기', completed: false },
        { content: '코테 기출문제 풀기', completed: false },
      ]
    },
  })
```



for문과 if문

```html
<li v-for="todo in todos" v-if="!todo.completed">
    {{ todo.content }}
    {{ todo.completed }}
</li>
```

표현식을 넣을 수도

```html
<li v-for="todo in todos" v-if="!todo.completed" v-on:click="todo.completed = true">
```

그런데 함수를 넣는게 좋다

```javascript
check: function {

}
check() {

}
```

둘 다 가능

그런데 몇번째 todo인지 알 수 없기에 인자를 넣어준다.

```html
<li v-for="todo in todos" v-if="!todo.completed" v-on:click="check(todo)">
```

```javascript
methods: {
    check(todo) {
        todo.completed = true
    } 
}
```



`디렉티브` -> 문제내기 조오타

```html
<img v-bind:src="imgSrc" v-bind:height="height" v-bind:width="width">
```

```javascript
    data: {
      todos: [
        { content: 'JS 정리하기', completed: false },
        { content: 'Github 이쁘게 만들기', completed: false },
        { content: '코테 기출문제 풀기', completed: false },
      ],
      height: 100,
      width: 100,
      imgSrc: "",
```

그런데 `v-bind`가 너무 귀찮기 때문에 축약형으로 쓸 수 있음

```html
<img :src="imgSrc" :height="height" :width="width">
```

==> 속성값을 변경하고 싶을 땐 `:class` 로 바꿀 수 있음



`v-on`은 `@`로 바꿈

```html
<li v-for="todo in todos" v-if="!todo.completed" v-on:click="check(todo)">
```

=> 바꾸면

```html
<li v-for="todo in todos" v-if="!todo.completed" @click="check(todo)">
```



++ html에선 double quote, js는 single quote



자바스크립트로 했다면...

```
<Vanilla JS>
1. input tag를 querySelector로 잡는다.
   const userinput = document.querySelector('#userInput')
2. input 태그의 내용물을 userInput.target.value
3. let data = userInput.target.value


```



v-model: 연결시켜주는.. -> vue와 vue model의 바인딩







html 스타일링 테스트





멘토링 사이트

에 질문

최신 기술 트렌드를 배우고, 최신 기술을 배우기 위해 좋은 사이트를 알려주세요



=> 스타일링을 껐다켜는게 가능하다



고유한 이름값을 넣어주면 관리가 편해진다??

`:key=""`

-> render 자체를 프레임워크에 맡기다보니, 조건부 sorting을 했을 때 원하는대로 나오지 않는 이슈들이 발생했었음. 그래서 나열을 할 때, key를 중심으로 함.

그런데 key를 넣어주지 않는 사람이 많자, required로 바뀜



그런데 새로 들어온 값들을 autoincrement로 하면 좋을텐데 쉽지 않음

그래서 시간으로 구분



 https://www.mockplus.com/blog/post/web-developer-portfolio 









```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Vue ToDo</title>
  <style>
    .completed {
      text-decoration: line-through;
      opacity: 0.6;
    }

  </style>
</head>
<body>
  <div id="app">
    <h1>Vue ToDo</h1>
    <button @click="clearCompleted">완료목록 전체삭제</button>
    <img :src="imgSrc">
    <input type="text" v-model="newTodo" @keydown.enter="addTodo">
    <button @click="addTodo">+</button>
    <select v-model="status">
      <option value="all" selected>전체보기</option>
      <option value="active">진행중</option>
      <option value="completed">완료</option>
    </select>
    <ul>
      <li :class="{completed: todo.completed}" v-for="todo in todoByStatus()" @click="check(todo)">
        <input type="checkbox" v-model="todo.completed">
        {{ todo.content }}
        {{ todo.completed }}
      </li>
    </ul>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
  // M (V VM)
  const app = new Vue({
    el: '#app',
    data: {
      todos: [
        { content: '꽃 사서 배달시키기', completed: true },
        { content: 'IR 자료 만들기', completed: false },
        { content: '과목평가 문제 검토하기', completed: false },
        { content: '프로젝트 명세 검토하기', completed: false },
      ], 
      imgSrc: 'https://joshua1988.github.io/images/posts/web/vuejs/logo.png',
      newTodo: '',
      status: 'all', // all 다 보여주기, complete, active
    },
    methods: {
      // check: function() {}
      check(todo) {
        todo.completed = !todo.completed
      },
      addTodo() {
        this.todos.push({
          content: this.newTodo,
          completed: false,
        })
        this.newTodo = ''
      },
      clearCompleted() {
        // 뭐만 남기면 될까? completed가 false인 값만 남긴다.
        const notCompleted = this.todos.filter(function (todo) {
          return !todo.completed
        })
        this.todos = notCompleted
      },
      todoByStatus() {
        // 진행 중인 일(active)
        if (this.status === 'active') {
          return this.todos.filter(function (todo) {
            return !todo.completed
          })
        }
        // 완료된 일(completed)
        if (this.status === 'completed') {
          return this.todos.filter(function (todo) {
            return todo.completed
          })
        }
        return this.todos
  
      }
    },
  })

  </script>
</body>
</html>
```







# 11월 5일

데이터 동기화 -> 데이터 바인딩

View와 Model (보여지는 부분, 데이터 관리하는 부분)이 묶여져 있음



#### Vue 인스턴스

```javascript
const app = new Vue({
    // Vue 인스턴스가 어떤 HTML 요소에 마운트될지(적용될지)
    el : 'app',
    
    // Vue 인스턴스가 사용할 Data
    data : {
        자료이름(identifier): 값,
    },
    
    // Vue 인스턴스가 사용할 methods들
    methods : {
        함수정의() {}
        함수정의: function {}
    }
    
	// 미리 계산된 값을 반환 -> 캐싱
    computed() {}
    
	// Vue 인스턴스의 data 변경을 관찰하고 이에 반응
	watch() {
        지켜볼 data: {
            handler 메소드정의 -> 지켜볼 데이터가 변경 되었을 때 실행할 함수
            (반드시 handler로 써야함. 이건 Evan You가 만든 규칙)
            // todos가 변경될 때마다, localStorage에 저장 -> save()
            // 이건 deepcopy
            deep: true,
        }
    }
})
```



#### Vue Directive

```html
<p v-for></p>

<p v-if v-else v-else-if></p>

<p v-model></p>

<p v-on:이벤트></p> <p @이벤트></p>

<p v-bind:html속성이름></p> <p :html속성이름></p>

<p v-html></p>

<p v-text></p>

<p v-show></p>
```

++ v-key: for문을 돌릴 때, 



- `computed` : 미리 계산된 값을 반환하는 속성을 정의 -> 캐싱



다음주 자바스크립트 과목평가 -> 학습시트 



{{}} 안에 

##### methods와 computed의 다른 점? 

데이터를 바꾸지 않고 가공만 하는 수준? -> 이런 친구들은 computed 로 옮겨준다

methods는 누를 때마다 함수가 실행됨

그러나 computed로 만들어 내면, 한 번 갔던 것들은 계산을 하지 않도록 만든다.(캐싱)

다른 점을 살펴보자

method를 부를 땐 함수처럼 불러줘야 하고

computed를 부를 땐 이미 저장된 데이터를 부르는 느낌이 크기 때문에 함수명만 쓴다.

```html
<li>methods로 불렸을 때 : {{ dateMethod() }}</li>
<li>computed로 불렸을 때 : {{ dateComputed }}</li>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <button @click="visible = !visible">반전</button>
    <ul v-if="visible">
      <h1>나오나?</h1>
      <li>methods로 불렸을 때 : {{ dateMethod() }}</li>
      <li>computed로 불렸을 때 : {{ dateComputed }}</li>
    </ul>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        visible: true,
      },
      methods: {
        dateMethod(){
          return new Date()
        }
      },
      computed: {
        dateComputed() {
          return new Date()
        }
      },
    })
  </script>
</body>
</html>
```

=> live server로 돌려보면 두 가지의 차이를 볼 수 있다. 버튼을 막 누르면 method로 호출한 것은 값이 계속 변하지만 computed로 만들어진 것은 값이 변하지 않는다.





#### vue의 data persist

데이터를 영구화시킬 때 썼던 방식들... -> 데이터베이스, 파일

Vue는 브라우저를 활용하니,, 브라우저를 활용해서 영구저장을 시켜볼까?

개발자 창에서 application 창에 들어가면... 로컬 스토리지를 볼 수 있다.

`key value pair`의 로컬 스토리지를 통해 데이터를 영구화시킬 수 있다.



session storage: 접속해 있는 동안 저장하는 것. 브라우저가 켜져있는 동안 지속되는 것은 세션에 넣어주는 것 -> 여기에 로그인 정보, 쿠키 정보가 들어있다.

local storage: 브라우저가 닫혀도 유지가 된다.



### localStorage API

```javascript
// create
localStorage.setItem('key', 'value')

// Read
localStorage.getItem('key')

// Delete
localStorage.removeItem('key')

// Count
localStorage.length
```

key를 그 데이터베이스의 테이블 명으로 하는 경우가 많다. value 안에는 object를 넣는다.

object를 스트링으로 변환해서 넣어줘야 한다.

```javascript
localStorage.setItem('vue-todos', 'test-value')
```

```javascript
todos = [
    {id: 1, content: 'gogo', completed: 'false'}
]
localStorage.setItem('vue-todos', JSON.stringify(todos))
```

=> 그냥 `localStorage.setItem('vue-todos', todos)` 하면 str 으로 정의되어 있는 것이 들어간다.



addEventlistener와 Vue의 메소드에는 arrow function을 쓰지 않는다.





#### Component

DRY 하게 가자

component: 독립적인 단위의 모듈

```javascript
Vue.component(컴포넌트이름, {컴포넌트 속성})
```

컴포넌트 이름은 `todo-list`혹은 `TodoList`로 써야 한다.

```javascript
<body>
  <div id="app">
    <h1>Cato의 Todo-app</h1>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  
  <script>
    Vue.component('todo-list', {
      
    })
  </script>
  
  <script>
    const app = new Vue({

    })
  </script>
</body>
```

component에는 다음과 같은 속성들이 들어간다.

`data`, `methods`, `template` 

```html
  <div id="app">
    <h1>Cato의 Todo-app</h1>
    <todo-list></todo-list>
  </div>
```

```javascript
  <script>
    Vue.component('todo-list', {
      template: `
        <h1>이건 템플릿</h1>
      `
    })
  </script>
```

template에는 최상단 하나의 component만 있어야 한다.



부모가 자식한테 넘기는 데이터 형태: `props` -> 일방적인 관계(properties)

자식이 부모한테 무언가를 넘길 땐: `emit` 

자식은 prop에다가 데이터를 넘긴다.





#### props

```javascript
// 1. Array 표현
props: ['category']

// 2. key, value로 자료형 표현
props: {
    'category': String,
}

// 3. object로 옵션 추가
    props: {
        category: {
            type: String,
            required: true,
            validator: function(value) {
                if (value.length !== 0) {
                    return true
                } else {
                    return false
                }
            }
        }
    }, 
```

props는 집주인이 세입자에게 일정 권한을 주는 것과 마찬가지. 



 Single File Component

-> 한 번에 다 넣으면 복잡하므로 component를 나눠서 만들 것이다.

그 파일의 확장자는 `.vue`

자바스크립트는 여러 파일들간 데이터를 공유하는 것이 좀 어렵다.

`웹팩` 으로 만들어줘야 하는데 이건 다음에 하는 걸로...



`Vue-cli` : command line interface -> 브라우저로부터 탈출시켜 커맨드 라인에서 실행

vue 프로젝트를 빠르게 만들기 위한 툴



##### `npm` 의 패키지 관리 단위

pip는 깔면 전역으로 깔림. 파이썬이 영향을 주는 프로그램에 다 적용 가능

npm는 프로젝트별로 관리가 가능

global 단위(어느 곳에서나 호출 가능)

local 단위 혹은 프로젝트 단위에서도 가능

=> 그래서 메시지가 좀 다르다. default는 프로젝트 단위

글로벌로 설치하려면

```
$ npm install -g
```

```
$ npm install -g @vue/cli
```

`yarn`은? -> npm을 쓰다가 너무 느리다보니 페이스북이 빡쳐서 새로 만듦. 

그런데 npm이 yarn처럼 업그레이드를 해서 npm을 쓰는 것도 나쁘지 않음



+ 프로젝트 실행하기? webpack?

  ```
  // vue init <template-name> <project-name>
  vue init webpack my-project
  ```

  





##### npm으로 프로젝트를 실행하기

- 폴더를 잘 보고 만들 것

```
vue create todo-vue-cli
```



```d
? Please pick a preset: (Use arrow keys)
> default (babel, eslint)
  Manually select features
```

옵션 2가지가 나옴 -> 1) default 와 2) 수동

그냥 엔터 치자



++ javascript browser check

` https://caniuse.com/ `

javascript를 쳐보면, IE에서는 js class를 쓸 수 없음

그래서 html로 js를 실어보내도 iE에서는 볼 수 없었음 (chrome이 빨리 적용)

이걸 babel이 도와줌

사용자가 어떤 브라우저로 쓸 지 알 수 없음. 그래서 예전 js 버전으로 바꿔줄 필요가 있는데 이 번역을 babel이 해준다.



package.json 을 잘 봐둬

package-lock.json을 쓸 일은 없지만... 엄청나게 많은 패키지들은 뭔가? 의존성 목록들을 관리해주는 것

-> 남의 걸 clone 받으면 dependencies를 확인하고 설치해야 한다.(npm install)

=> 그러면 글로벌로 하는 게 낫지 않아? -> 아니다. 버전 관리가 어렵다. 



장고는 패키지를 숨겨놓음

npm은 프로젝트 혹은 로컬 단위가 defualt이기 때문에, 모든 모듈이 동일 폴더에 깔림. 



이 상태로 서버를 돌릴 수 있다.

```
 $ cd todo-vue-cli
 $ npm run serve
```





#### `.vue` 파일의 구조

<template>

<script>

<style>





- component를 만드는 이유는 각각이 같은 로직이지만, 각기 다른 요소를 지니므로



vscode 설정 바꾸기

f1 -> preferences ->   "[vue]": {"editor.tabSize": 2} 추가





app.vue가 가장 중요. 이것도 하나의 component





왜 div로 묶어주는가?  -> 여러 개의 노드가 있을 수 없기 때문. 그렇기 때문에 root 노드가 있어야 하고 이것을 div로 만든다.



오브젝트 하에서 key와 value가 같은 이름이면 하나로 써도 상관 없다.





한 파일에 만들었던 Vue를 Component로 어떻게 나눴는지 잘 볼 것





다음 프로젝트는 youtube searcher

`youtube api`



서비스는 어떤 모습을 가질지에 대한 디자인이 있어야 함

`Oven app`

 https://ovenapp.io/ 

`abode xd`

 https://www.adobe.com/kr/products/xd.html 





front end에서는 템플릿이 우선해서 간다!



vue + tab

하면

! + tab과 같은 효과



 https://joshua1988.github.io/vuejs/ 

.vue 파일의 이름, app의 이름, APp.vue에서 불리는 이름을 모두 같이 만들어 나갈 것







console.log() 할 때 에러가 발생

그러므로 package.json -> rules에 "no-console": "off" 를 추가해준다.

```json
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "rules": {"no-console": "off"},
    "parserOptions": {
      "parser": "babel-eslint"
    }
```





입력되는 값들은 잡아놓고 끝내는 게 아니라, search keyword로 넘어가서 API를 타고 결과를 뜨악 출력한다.





특정 component가 데이터를 가지고 있는데 이걸 다른 component와 공유를 해야하는 문제가 발생

-> 데이터의 저장소는 위쪽에 해놓아야...(데이터를 모든 방이 쓸 것이 때문에, 특정 component에만 있어선 안 된다. 부모의 방으로 보내야 한다. 그런데 데이터가 일방향으로만 전달될 수 밖에 없고 이는 props를 통해 간다.)

자식이 부모에게 데이터를 전달하기 위해선 `emit`을 해야한다.

아래쪽에서 데이터의 변경이 발생하면 부모에게 보내야 한다.

```javascript
this.$emit()
```

```javascript
=> SearchBar
<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event) {
      console.log(event.target.value)
      // $emit 메소드는 자식 컴포넌트에서 부모 컴포넌트로 data를 올려줄 때
      this.$emit('customEvent', event.target.value)
    }
  }
}
</script>
```



```html
App.vue
<template>
  <div>
    <h1>Youtube Searcher</h1>
    <!-- 자식한테 무슨 일이 생겼다고 알려주는 것 -->
      
    <SearchBar @customEvent="onInputChange"/>
  </div>
</template>
```

-> 자식 component에서 무슨 일이 발생했을 때, 알려주는 것

```javascript
<script>
// 컴포넌트 등록할 땐 import를 하고
import SearchBar from './components/SearchBar'

export default {
  name: 'App',
  components: {
    // SearchBar: SearchBar,
    SearchBar,
  },
  methods: {
    // emit된 이벤트가 들어온다. -> 위의 searchBar에서 이벤트가 바뀐 것을 알려준다.
    onInputChange(inputValue) {
      console.log(inputValue)
    }
  }
}
</script>
```



이제 



 https://console.developers.google.com/project?hl=ko 



- google youtube api documentation of property

```
https://developers.google.com/youtube/v3/guides/implementation/search?hl=ko
```



 [https://www.googleapis.com](https://www.googleapis.com/)/서비스명/버전/기능

->  [https://www.googleapis.com](https://www.googleapis.com/)/youtube/v3/search

https://www.googleapis.com/)/youtube/v3/search?key=API_KEY&type=video&part=snippet&q=검색어



#### axios를 vue에서 사용하기

- axios를 설치하자

```
npm install --save axios
```

- 설치하고 실행한 components에서 axios를 불러오자

```vue
<script>
    const axios = require('axios')
    // 혹은
    import axios from 'axios'
</script>
```







axios의 결과는 promise. API_call은 언제 돌아올지 모르는 비동기함수이기 때문에 `.then`을 사용해라`



API_KEY 숨기기

vue cli가 숨겨준다

vue cli secret

.env.local을 만들고 반드시 접두사를 붙여야 함 `VUE_APP_`

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY



시나리오 정리

##### 1. onInputChange 메서드 호출

##### 2. YoutubeAPI 요청

##### 3. Youtube 응답 받고

##### 4. Youtube Response 비디오 리스트를 App Component의 data로 저장

##### 5. data가 업데이트되면, 컴포넌트가 템플릿을 다시 렌더링을 함(Vue가 해줌)

##### 6. VideoList에서 변경된 결과를 보여줌



자식 부모 `observer pattern` 을 공부하면 됨



props를 내려줄 때 스탭

1. 부모 컴포넌트에서 자식 컴포넌트의 template 태그에 v-bind를 통해 전달 -> props에 있다.

   ```
   props로 받는법
   1) props: ['videos'],
   2) props: {'videos': Array,},
   3) props: {videos: {type:Array,}}
   ```

   

arrowfunction : addEventlistener, methods



`wappalyzer`









# Vue Project 만들기

### 1. 프로젝트 실행하기

- 









# Vuex





프로젝트...



JWT json web token: json 웹 서버에게 인증된 유저임을 관리하는 것. 요새 많이 쓰고 모바일에서도 씀



- Authentication
- Todo 리스트
- 서버와 프런트, 프런트 자체의 라우팅



google api youtube 에 들어가면 내가 만든 프로젝트를 공유할 수 있음



youtube adata API v3





CSS 멕이기

각각의 템플릿에만 CSS를 먹으려면? - `scoped` : 해당하는 템플릿에만 영향을 줄 수 있다.

```html
<style scoped>
  .bg-color-search-bar {
    background-color: bisque;
  } 
</style>
```

그래서 이렇게 이름을 복잡하게 만들 필요가 없음

```html
<style scoped>
  div {
    background-color: bisque;
  } 
</style>
```



항상 컴포넌트를 구조화할 때 할 것은?

싱글 파일 컴포넌트 -> 파일을 만든다.



component 이름과 비슷하게 만드는 것이 좋다.



# 11월 19일

### Vue Router

### Vuex

### JWT json web token

서비스는 나누되 언어스택은 싱글로 가자는 것이 흐름

빌드업 할 땐 nodejs를 사용. 



1. `todo-back`을 만들고 `vue create todo-front` 를 만들어서 `todo-front` 폴더를 만들자

+ GUI 사용하기

  `vue ui`를 입력한다.

  폴더 가져오기에서 `todo-front`를 가져온다.

  npm install 뿐 아니라 GUI로도 vue를 관리할 수 있다.

  이전에는 `npm install vue-router` 이렇게 했어야

- 플러그인 추가(미들웨어)



SPA의 극단적인 단점 2가지 single page application

장점들이 많으나(로드 없이)

- history 관리가 안 된다. (사용자의 액션을 트래킹할 수 없음)

  `window.history.back`

- `SEO` 에 취약하다. -> `search engine optimization` 검색 엔진 최적화. 

  - 네이버나 구글이 뭘 하고 있나? 전세계 웹을 돌며 정보를 수집하는 `spider` 를 뿌려서 크롤링을 해서 데이터 베이스에 가져옴. 그리고 해당 검색어에 해당하는 데이터베이스에 있는 자료 결과를 보여줌. 
  - 그래서 1) 데이터를 잘 끌어와서 2) 검색어와 링크를 해주고 3) 우선순위에 따라 보여준다.

  - SEO 는 기본적으로 HTML 페이지를 기준으로 정해진다.
    - 멀리캠퍼스와 패스트캠퍼스의 차이. 이탈률이 엄청 달라짐.
  - 스파이더는 맨처음 들어오는 페이지에 대해서 검증을 함. 그래서 SPA들은 스파이더들에게 취약했음. SPA는 실행 이후 많이 로드되기 때문. 그래서 예전엔 `쉬뱅`을 많이 썼음 `hash bang` 
    - 쉬뱅은 히스토리에 저장이 됨. 쉬뱅을 사용하면 가능. 그런데 너무 구린 것 같다보니...
    - 히스토리에 저장할 수 있는 친구를 만들어내자 -> js router. SPA에서 라우팅이 가능하도록 만든 것

> linux 재단, 모질라 재단이 굉장히 가중치가 높음 -> 이걸 구글이 포착해서 링크가 올라감







`vue add router` 하고 router를 추가한다.



main.js에 보면 router가 추가된 것을 확인할 수 있다.



그리고 run serve를 하면 히스토리가 저장되어, 뒤로가기 버튼을 누르면 history가 저장된 상태임을 알 수 있음!





우리가 만들려는 프로젝트는

1. 프론트와 백. Vue and Django
   - Auth(회원가입 로그인)
   - Todo



Vue로 로그인 기능을 만든다?

`Login.vue`을 만들자. 

그리고 어떻게 등록을 하는가?

장고처럼 urls를 해줘야. 그건 vue에선 `index.js` -> import 해주고 routes에 object를 추가해준다.

```javascript
import Login from '../views/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]
```

이렇게 등록된 컴포넌트를 app.vue에게 알려준다.

router-link가 만들어준다!



```html
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">로그인</router-link> |
      <a href="/login">로그인 a태그</a>
    </div>
    <router-view/>
  </div>
</template>
```

=> router-link 태그를 사용하면 링크를 눌렀을 때 페이지 로드가 발생하지 않지만 a 태그로 만들면 페이지가 로드된다.



`router-view`는 무엇인가

rounter-link에 의해 변하는 것은 router-view로 보여준다는 것



라우팅을 원한다면 index.js 에 등록을 하고 나타낼 component에 적용을 해주면 됨



bootstrap을 쓰려면 Vuetify 을  사용해야 함

[링크]( https://vuetifyjs.com/ko/introduction/why-vuetify )

\<v-btn> 등을 사용하면 됨

하지만 지금은 bootstrap을 쓰자. CDN에서 CSS만 따오자. js는 jquery 를 쓰는데 이것도 라이브러리라 충돌할 가능성이 있다.





우리는 POST로 자료를 보낼 때 form 태그를 쓸 필요가 없다. 



components의 구조를 생각하라

Input

python -m venv todo-venv

source todo-venv/Scripts/activate





백엔드 구성

- todo 만을 위한 venv 설정

`python -m venv todo-venv`

`source todo-venv/Scripts/activate`



- package 설치

```
$ pip install djangorestframework
$ pip install djangorestframework-jwt
$ pip install django-cors-headers
```

settings.py 에 추가하려면?

각 github 페이지를  참고할 것



```
INSTALLED_APPS = [
  ...
  'todos',
  'corsheaders',
  'rest_framework',
  ...
]
```

```
REST_FRAMEWORK = {
JWT_AUTH = {
```

추가할 것





`CORS`?

다른 도메인에서 온 것을 허용할지 말지를 결정하는 것

배포한 서버의 호스트만, vuejs 서버만 작동하도록 만든 것. 이거 외에 다른 것이 들어오면 안되게 만드는 것 -> 보안을 위해서

`CORS_ORIGIN_ALLOW_ALL = True`

일단은 이렇게 전부 True로 만든다.

원래는 화이트리스트로 관리하지만 일단은....



JWT는 놀이공원의 자유이용권과 같은 것

[Velopert의 정리자료]( https://velopert.com/2350 )

장고 AUTH는 세션 기반

세션을 통해서 서버가 정보를 트래킹하는 것의 장단점이 있다.

- 장점은, 서버에 이 정보가 저장되어 있기 때문에 굉장히 빠르다. 어떤 사람이 오더라도 무상태성을 완전히 보완할 수 있을 정도
- 그러나 단점도 있음. 세션은 내부... 브라우저에서 온 쿠키를 기반으로 세션 ID를 통해 로그인 여부를 트래킹 함 -> 이때 메모리에 떠있는 세션은, 만약 100만명이라면 100만명의 모든 정보를 가지고 있어야 함
  - 또 하나. 세션은 쿠키 베이스라서 다른 디바이스와 쉐어 할 수가 없다. 즉 멀티 디바이스 환경에서는 이런 세션 기반이 어렵다. 마치 세션처럼 관리하기가 어려워서... 
- 그러면 어떻게 하냐? 쿠키를 기반으로 모든 로그인된 정보를 세션에 저장했던 부하적인 요소(많은 메모리 필요) -> 쿠키를 통해서 서버가 만들어졌던 걸 판단하는 게 아니라, 로그인된 사람이라는 걸 알게하는 파일을 가지고 있게 하고, 자기 요청에다가 함께 보내도록 하는 것. 이 중 살아남은 것이 JWT -> 이젠 더이상 서버가 가지고 있지 않는다.
  + auth.login()은 이 정보를 세션에 저장시키는 것.
- JWT는 토큰 안에 모든 것을 다 담아넣는다. 다른 세션에 대한 정보를 전달하지 않더라도....



- 세션에는 유저의 PK를 담는데... 이제는 세션을 담지 않고 인증되었다는 토큰을 보내는 것. 서버가 토큰의 진위를 확인하고 응답을 보내줌.

=> 서버는 토큰으로만 확인하기 때문에 다시 stateless로 돌아간 것과 마찬가지. 이전에는 세션이 회원에 대한 모든 정보를 가지고 있었기 때문에... 

[홈페이지]( https://jwt.io/ )

JWT은 xxxxx.yyyyy.zzzzz로 적혀있다.

JWT는 모든 정보를 다 가지고 있다. 



SHA1은 git.

sha256은 압축되어있는 형태. 디지털 signature 이걸 풀기 위해서는 시크릿으로.

Base64 인코딩



토큰 발행

```python
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-token-auth/', obtain_jwt_token),
]
```



vue가 세션을 관리한다.



로그인 화면 만들어보자



vue에서 로그인하면 장고로 보낼 수 있어야 함



axios로 요청을 보낸다.

`npm i axios`

추가한다.



이제 이 토큰 값을 vue에게 담기고, 그 이후에는 이 JWT를 실려 보내도록 만들어야 함

그래서 vue-session을 깔아야 함

`npm i vue-session`

main.js 에 

<pre>
    import VueSession from 'vue-session'
    `Vue.use(VueSession)` 을 추가시켜줌
</pre>



[vue-session]( https://www.npmjs.com/package/vue-session )





++ vueapp의 lifecycle



session에 데이터가 있으면... 매 세션이 있는지 확인하는 것. vue가 불려오기도 전에 로그인이 되어있는지 확인?

mount가 js를 html에 꽝 하고 붙이는 과정

`.$mount('#app')`

왜 사용자가 보이는 게 변할까? 데이터의 변경이 있을 경우 rerender 를 하기 때문

렌더의 과정

beforeCreated,

Mount

Mounted -> 데이터가  보이는 시점



총 4개의 체크 포인트가 있다 -> 생성 마운트 업데이트 파괴 : 이 4개의 앞과 전후로 있다.

거의 쓰게 될 것은 mount. 보이기 직전이기 때문

before mount 혹은 created 등 보이기 직전에 가장 많음

mounted

특정 지점에 훅을 만들 수 있음. 



vue 인스턴스가 만들어지고 보이기 전에 

화면에 띠우기 직전에, 



이렇게 만들어놨는데, 언제마다 해야되는가?





<pre>
##8개의 live cycle hook


mounted() {

}



토큰을 얻기 위해 우리가 따로 JWT 토큰을 만드는  URL을 만들었다.



해당하는 유저가 todo를 생성하고 



JWT이 안 보내지면 인증이 안 됨

postman으로 보낼 때

key {id, user, title, Authorization}

할 때 {1, 1, 제목, JWT jwt토큰} 보내주면 됨



역량 자원을 충분히 활용할 것





장고의 views.py

모든 todo를 보여주는 것이 아니다. 자기만 만든 것을 봐야하기 때문에...

우리가 post를 보내면 user의 ID가 함께 간다. 해당하는 유저가 가지고 있는 것만 가지고 와야 함



user와 post와 1대 N 관계. Todo set을 뽑아주는 serializers를 가져와야 한다.



```python
from rest_framework import serializers
from .models import Todo
from django.contrib.auth import get_user_model

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'user', 'title', 'completed')

class UserSerializer(serializers.ModelSerializer):
    todo_set = TodoSerializer(many=True)
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'todo_set',)
```





jwt를 decode 하기 위해

`npm i jwt-decode`





input을 하나로 만들기

@submit.prevent="함수" : 원래 하던 행위를 멈추고 뒤에 함수만 실행함



장고 하나로 하면 더 편한 것 처럼 느껴지는데?

아니다. 서버 코드 하나로 모바일 뿐 아니라 다양한 디바이스의 앱도 개발이 가능하다!

react는 js를 작성하면 거의 바로 모바일 앱으로 전환이 가능하긴 한데, 요새는 vue도 `vue native` 라는 프로젝트를 진행 중

1기 프로젝트 중 하나

[낙낙]( https://client-knocknock.firebaseapp.com/ )

