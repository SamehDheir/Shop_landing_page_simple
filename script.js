let nav = document.querySelector('nav')

onscroll = function () {
  if (scrollY > 10) {
    nav.style.backgroundColor = 'white' 
    nav.style.transition = '0.4s' 
  } else {
    nav.style.backgroundColor = "transparent";
  }
}


