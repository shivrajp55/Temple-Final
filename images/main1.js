function openSideMenu(){
    document.getElementById('side-menu').style.width= '225px';
    document.getElementById('main').style.marginLeft= '225px';
  }
  
  function closeSideMenu(){
    document.getElementById('side-menu').style.width= '0px';
    document.getElementById('main').style.marginLeft= '0px';
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});