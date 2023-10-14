//Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


//typing effect

let typed = new Typed('.auto-input',{
    strings: ['¡Data Analyst!', '¡Ingeniero Industrial!'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})