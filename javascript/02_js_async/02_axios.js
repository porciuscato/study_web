const URL = 'https://dog.ceo/api/breeds/image/random'

const dogButton = document.querySelector('#dog')
const catButton = document.querySelector('#cat')

const getDogAndPush = () => {
    axios.get(URL)
        .then(response => {
            const imgURL = response.data.message
            const imgTag = document.createElement('img')
            imgTag.src = imgURL
            document.querySelector('#showRoom').appendChild(imgTag)
        })
}

// 1. axios에 dog 사진 요청
// 2. body 태그 아래에 img 태그로 받아온 사진 보여주기

const catURL = 'https://api.thecatapi.com/v1/images/search'

const getCatandPush = () => {
    axios.get(catURL)
    .then(response => {
        const catImgURL = JSON.parse(response.request.responseText)[0].url
        const catImgTag = document.createElement('img')
        catImgTag.src = catImgURL
        document.querySelector('#showRoom').appendChild(catImgTag)
    })
}

dogButton.addEventListener('click', getDogAndPush)
catButton.addEventListener('click', getCatandPush)