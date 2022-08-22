const images = [
    { 'id': '1', 'url': './imagem/chrono.jpg'} ,
    { 'id': '2', 'url': './imagem/inuyasha.jpg'} ,
    { 'id': '3', 'url': './imagem/tenchi.jpg'} ,
    { 'id': '4', 'url': './imagem/tenjhotenge.jpg'} ,
    { 'id': '5', 'url': './imagem/yuyuhakusho.jpg'} ,
    { 'id': '6', 'url': './imagem/ippo.png'} ,
]

const container = document.querySelector('#container-items')

const loadImages = function(images, container) {
    for (let i = 0; i < images.length; i++) {
        container.innerHTML += `
        <div class = 'item'>
            <img src= '${images[i].url}'
        </div>
        `
    }
}

loadImages(images, container)

let items = document.querySelectorAll('.item')

const previous = () => {
    container.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length -1]
    container.insertBefore( lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)

document.querySelector('#next').addEventListener('click', next)

