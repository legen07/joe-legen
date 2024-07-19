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

let changed = !0
function addPhoneImages(){
  if (window.innerWidth < 600 && changed) {
    $('.screenshots div img').each((i, each) => {
      const imageName = $(each).attr('src');
      $(each).attr('src', RegExp(/.*(?=\.)/).exec(imageName) + '_phone.webp')
    })
    changed = !1
  } else if (window.innerWidth > 600 && !changed) {
    $('.screenshots div img').each((i, each) => {
      const imageName = $(each).attr('src');
      $(each).attr('src', RegExp(/.*(?=\_phone.)/).exec(imageName) + '.webp')
      changed = !0
    })
  }
}
addPhoneImages()

$(window).on('resize', addPhoneImages)

window.addEventListener('scroll', function (e){

  $('#experience .screenshots div').each((i, each) => {
    if (each.getBoundingClientRect().top < (window.innerHeight + 200)) {
      clientTop = each.getBoundingClientRect().top;

      const blurry = (((clientTop - window.innerHeight / window.innerHeight ) * 100) * -.00013) * -1;

      blurry > 4 ? $(each).css('filter', 'blur(' + blurry+'px)') : $(each).css('filter', 'blur(0)')
    
      const newScale = ((((clientTop - window.innerHeight / window.innerHeight ) * 100) * -.001) *.2) + 85
    
      $(each).css({'transform': 'scale(' + newScale + '%)'})
    }

    if (each.getBoundingClientRect().bottom < (window.innerHeight * .38)) {
      $(each).addClass('js');
    } else {
      $(each).removeClass('js')
    }
  })

  $('#objective >, #education >, #skills > h2, .languages-technologies >, #my-scripts > h2, #my-scripts > article >').each((i, each) => {

    if (each.getBoundingClientRect().top < (window.innerHeight * 0.80)) {
      $(each).addClass('cls')
    } else {
      $(each).removeClass('cls')
    }
  })
})