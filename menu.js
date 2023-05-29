const arrowBurger = document.querySelector('.burger-menu');
const bodyBurger = document.querySelector('#menu');

arrowBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active');
    bodyBurger.classList.toggle('active');
});

const links = document.querySelectorAll('.links a');
links.forEach(link => {
  link.addEventListener('click', closeLink);
});

function closeLink(){
    document.body.classList.toggle('lock');
    arrowBurger.classList.toggle('active');
    bodyBurger.classList.toggle('active');
}

