
let header = document.querySelector('header');
let headerHtml = header.innerHTML;
window.addEventListener('scroll', function(e) {
  this.scrollY > 30 ? header.classList.add('js') : header.classList.remove('js');
});

function hamburgerFunction() {
  let sixHunMedia = window.matchMedia("(max-width: 600px)");
  sixHunMedia.matches ? header.innerHTML =  '<img src="images/icons/hamburger.svg" class="ho" alt="jump to topic" title="jump to topic" >': header.innerHTML = headerHtml;
  header.classList.remove('open')
}
hamburgerFunction();
function hamburgerOpener(e) {
  e.target.parentElement.classList.toggle('open');
  header.classList.contains('open') ? header.insertAdjacentHTML('afterbegin', headerHtml) : header.firstElementChild.remove();
}

window.addEventListener('resize', function(e){
  hamburgerFunction();
});

document.addEventListener('click', function(e){
  switch (true) {
    case e.target.classList.contains('ho'):
      hamburgerOpener(e);
  }
})