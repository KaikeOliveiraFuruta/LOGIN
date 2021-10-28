const $html = document.querySelector('html')
const $checkbox = document.querySelector('#colors')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})
