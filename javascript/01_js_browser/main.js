/* 1. <input> 태그 안의 값을 잡는다. */
const inputArea = document.querySelector('#js-userinput')
const button = document.querySelector('#js-go')
const resultArea = document.querySelector('#result-area')

button.addEventListener('click', e => {
    // inputArea.value = ''
    // console.log(`클릭됐어요: ${inputValue}`)
    searchAndPush(inputArea.value)
})
inputArea.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        // inputArea.value = ''
        // console.log(`엔터키쳤어요: ${inputValue}`)
        searchAndPush(inputArea.value)
    }
})
/* 2. Giphy API 를 통해 data 를 받아서 가공한다. */
const searchAndPush = (keyword) => {
    resultArea.innerHTML = ''
    const API_KEY = API_KEY
    const URL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}`

    const GiphyAPICall = new XMLHttpRequest()
    GiphyAPICall.open('GET', URL)
    GiphyAPICall.send()

    // 요청을 받아온 정보들을 처리해야한다.
    // 응답이 제대로 왔다면 load라는 이벤트가 발생한다.
    GiphyAPICall.addEventListener('load', e => {
        const parsedData = JSON.parse(e.target.response).data
        console.log(parsedData)
        // let resultArray = []
        // for (let i = 0; i < 25; i++){
        //     resultArray.push(parsedData.data[i].images.original.url)
        // }
        // const imageURL = parsedData.data[0].images.original.url
        // pushToDOM(imageURL)
        parsedData.forEach( data => {
            pushToDOM(data.images.original.url)
        })
        // pushToDOM(resultArray)
    })
}


/* 3. GIF 파일들을 index.html(DOM)에 밀어 넣어서 보여준다. */
const pushToDOM = data => {
    // let imgURL = data.images.origianl.url
    // const elem = document.createElement('img')
    // elem.src = imgURL
    // elem.className = 'container-image'
    resultArea.innerHTML += `<img src="${data}" class="container-image">`
}









// /* 1. <input> 태그 안의 값을 잡는다. */
// const inputArea = document.querySelector('#js-userinput')
// const button = document.querySelector('#js-go')
// const resultArea = document.querySelector('#result-area')

// button.addEventListener('click', e => {
//     searchAndPush(inputArea.value)
// })

// inputArea.addEventListener('keydown', e => {
//     if (e.keyCode === 13) {
//         searchAndPush(inputArea.value)
//     }
// })

// /* 2. Giphy API 를 통해 data 를 받아서 가공한다. */
// const searchAndPush = (keyword) => {
//     const API_KEY = 'o2LOve16lj0NenYN8kEemw0FaoG5wKzd'
//     const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`

//     const GiphyAPICall = new XMLHttpRequest()
//     GiphyAPICall.open('GET', URL)
//     GiphyAPICall.send()

//     // requests.get(url)
//     GiphyAPICall.addEventListener('load', e => {
//         const parsedData = JSON.parse(e.target.response)
//         pushToDOM(parsedData)
//     })


//     /* 3. GIF 파일들을 index.html(DOM)에 밀어 넣어서 보여준다. */
//     const pushToDOM = data => {
//         resultArea.innerHTML = null;
//         const dataSet = data.data

//         dataSet.forEach(imgData => {
//             let imgURL = imgData.images.original.url

//             const elem = document.createElement('img')
//             elem.src = imgURL
//             elem.className = 'container-image'
//             resultArea.appendChild(elem)
//         })
//     }
// }
