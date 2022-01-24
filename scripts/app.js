const burger = document.querySelector('.logo-menu');
const listeMenu = document.querySelector('.liste-nav');


burger.addEventListener('click', () => {
    listeMenu.classList.toggle('active');

})

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        listeMenu.classList.toggle('active')
        
    })
})