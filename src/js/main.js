let btnPrev = document.getElementById('btn-prev')
let btnNext = document.getElementById('btn-next')
let swiperItem = document.querySelectorAll('.swiper__list__item')

let index = 1

swipe(index)

function swipe(e) {
    if (e > swiperItem.length) {
        index = 1
    }
    
    if (e < 1) {
        index = swiperItem.length
    }

    swiperItem.forEach(item => {
        item.classList.remove('active')
    })
    
    swiperItem[index - 1].classList.add('active')
}

const next = () => {
    swipe(index += 1)
}

const  prev = () => {
    swipe(index -= 1)
}

btnNext.addEventListener('click', next)
btnPrev.addEventListener('click', prev)

