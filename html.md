# HTML

## HTML에 대한 이야기들

- hypertext markup language

- HTTP 보다 HTTPS가 더 빠르다. (s는 secure)

https://tech.ssut.me/https-is-faster-than-http/

- 최초로 만들어진 웹페이지.  팀 버너스 리 아저씨
  - http://info.cern.ch/hypertext/WWW/TheProject.html

- 웹 표준이 만들어진 것은 최근
  - W3C vs WHATWG



- <html lang='ko'> 를 입력해주면 맹인같은 분들이 이용하기 좋다. 
- DOM TREE 형태
  - 태그들이 트리 형태로 이루어져 있다. -> 계층구조
  - 트리 구조를 명확하게 만들어야 한다. 그래야 검색엔진에 잘 노출 된다. (SEO: search engine optimization)



- 시맨틱 태그. 태그를 보면 어떤 의미인지 알 수 있는 태그들.
  - header, nav, aside, section, article, footer, div
  - 기본적으로 display block



- VSC 에서 space를 2 tab으로 바꾸기

```
- 2 space tab으로 바꾸기 위한
ctl shit p - > open settings(json)
{
​    "workbench.startupEditor": "newUntitledFile",
​    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
`    "[html]": {`
`        "editor.tabSize": 2`
`    },`
`    "[css]":{`
`        "editor.tabSize": 2`
`    }`
}

추가

혹은 

`beautify`를 설치
`shift + alt + f`
```



- 자동완성 기능

  - 태그 이름을 쓰고 tab을 누른다

    ex) ol>li*4 tab.

    ex) .classname 으로 치면 자동으로 div 태그를 만들어준다.



- MDN web docs
  - 이게 웹의 교과서다



## HTML Tags

-  http://overapi.com/html
  - 여기 가면 태그들 다 나와있음
-  style

```html
<style>
  body {
  }
  .class {
  }
  #id {
  }
</style>
```

- div

```html
<div class="shadowbox">
  <p>Here's a very interesting note displayed in a
  lovely shadowed box.</p>
</div>
```

```CSS
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

- h1, h2, h3, h4, h5, h6

- p

- br : line break(inline)

- hr : horizontal line

- map: 이미지에 특정 링크를 연결시킬 수 있다. / area 태그. 

  ```html
  <map name="infographic">
    <area shape="poly" coords="130,147,200,107,254,219,130,228" href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" alt="HTML" />
    <area shape="poly" coords="130,147,130,228,6,219,59,107" href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" alt="CSS" />
    <area shape="poly" coords="130,147,200,107,130,4,59,107" href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" alt="JavaScript" />
  </map>
  <img usemap="#infographic" src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png" alt="MDN infographic" />
  ```

  ```css
  <style>
  img {
    display: block;
    margin: 0 auto;
    width: 260px;
    height: 232px;
  }
  </style>
  ```

  ```html
  <map name="infographic">
    <area shape="rect" coords="184,6,253,27" href="https://mozilla.org" target="_blank" alt="Mozilla" />
    <area shape="circle" coords="130,136,60" href="https://developer.mozilla.org/" target="_blank" alt="MDN" />
    <area shape="poly" coords="130,6,253,96,223,106,130,39" href="https://developer.mozilla.org/docs/Web/Guide/Graphics" target="_blank" alt="Graphics" />
    <area shape="poly" coords="253,96,207,241,189,217,223,103" href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" alt="HTML" />
    <area shape="poly" coords="207,241,54,241,72,217,189,217" href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" alt="JavaScript" />
    <area shape="poly" coords="54,241,6,97,36,107,72,217" href="https://developer.mozilla.org/docs/Web/API" target="_blank" alt="Web APIs" />
    <area shape="poly" coords="6,97,130,6,130,39,36,107" href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" alt="CSS" />
  </map>
  <img usemap="#infographic" src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info.png" alt="MDN infographic" />
  ```

  ```css
  <style>
  img {
    display: block;
    margin: 0 auto;
    width: 260px;
    height: 248px;
  }
  </style>
  ```

  

