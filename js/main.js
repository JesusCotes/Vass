$("#ChangeToggle").click(function(){

    if( $('#menu').hasClass('d-block')){
    document.querySelector('#menu').classList.replace('d-block', 'd-none');
    document.querySelector('#close').classList.replace('d-none', 'd-block');
    }

    else {
        document.querySelector('#menu').classList.replace('d-none', 'd-block');
        document.querySelector('#close').classList.replace('d-block', 'd-none');
    }
});

if (window.innerWidth > 1439) {
    document.querySelector('#search-mobile').classList.replace('d-block', 'd-none');
    document.querySelector('#search-desktop').classList.replace('d-none', 'd-block');
}
else {
    document.querySelector('#search-mobile').classList.replace('d-none', 'd-block');
    document.querySelector('#search-desktop').classList.replace('d-block', 'd-none');
}

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1440px)").matches) {
        document.querySelector('#search-mobile').classList.replace('d-block', 'd-none');
        document.querySelector('#search-desktop').classList.replace('d-none', 'd-block');
      console.log("Screen width is at least 500px")
    } else {
        document.querySelector('#search-mobile').classList.replace('d-none', 'd-block');
        document.querySelector('#search-desktop').classList.replace('d-block', 'd-none');
      console.log("Screen less than 500px")
    }
  })
