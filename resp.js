burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')



burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('v-class-resp');
})