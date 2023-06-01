function resize() {
    if (window.innerWidth < 1200) {
      return document.body.classList.add('bg-dark');
    }
    /*else if ($window.width() > 768 && $window.width() < 992) {
      return $html.addClass('sm');
    }
    else if ($window.width() > 992 && $window.width() < 1200) {
      return $html.addClass('md');
    }
    else if ($window.width() > 1200) {
      return $html.addClass('lg');
    }*/
}

window.onresize = resize;