const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const lines = document.querySelector('.lines');
const burgerContent = document.querySelector('.burgerContent');
const serachBox = document.querySelector('.search-box')
const search = document.querySelector('.search')
const header = document.querySelector('header');
const body = document.body;

lines.addEventListener('click', function () {
    line2.classList.toggle('line2Change');
    line3.classList.toggle('line3Change');
    burgerContent.classList.toggle('burgerCome')
    header.classList.toggle('backWhite')
    body.classList.toggle('hidden')
})

search.addEventListener('click', function () {
    serachBox.classList.toggle('searchCome');
    header.classList.toggle('backWhite');
    body.classList.toggle('hidden');
    searchInput.value = '';
})

const searchInput = document.querySelector('.inp-search');
const searchButton = document.querySelector('.search-btn');

searchButton.addEventListener('click', function () {
    searchInput.value = '';
})

const toTop = document.querySelector('.toTop');
toTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})