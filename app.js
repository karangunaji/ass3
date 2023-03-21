hamburger = document.getElementById(burger);
navbtn = document.getElementsByClassName(navbar);

hamburger = addEventListener("click", ()=>{
    navbtn.classList.toggle('shownav');
})