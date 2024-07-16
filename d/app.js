$(() => {
  
  
  function toggleDark(c) {
    if (!$("html[dark-mode]")[0]) {
      $("html").attr("dark-mode", "");
      c.find("path").remove();
      c.attr("icon", "brightness-down");
      localStorage.setItem('dark', 'true')
    } else {
      $("html").removeAttr("dark-mode");
      c.find("path").remove();
      c.attr("icon", "moon-stars");
      localStorage.removeItem('dark')
    }
    
    c.toggleClass("js");
    setIcons();
  }



  // const observee = new ResizeObserver((e) => {
    // console.log('this is the observer', e)
  // })

//  observee.observe($('.contact-opener')[0])

  const contactOpener = $('.contact-opener')

  contactOpener.css('--contact-hypotenuse', Math.round(Math.sqrt(contactOpener.innerHeight()**2 + contactOpener.innerHeight()**2)) + 'px')

  setTimeout(() => {$('#bottom-floats').addClass('js')}, 4000)

  $(window).on('unload',() => {
    $('#preloader').removeClass('js')
  })
})