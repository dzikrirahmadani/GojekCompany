// NAVBAR FIXED
window.onscroll = function() {
    const header = document.querySelector('header');
    const navbar = document.querySelector('navbar');
    const fixedNav = header.offsetTop;
    

    if ( window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed');
        navbar.classList.add('navbar-fixed2');
    } else {
        header.classList.remove('navbar-fixed');
        navbar.classList.remove('navbar-fixed2');
    }
};



// HAMBURGER
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navActive = document.querySelector('.nav');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
    navActive.classList.toggle('navbar-active')
});

// DROPDOWN
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", ()=> {
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        console.log(selectedOption)
    });
});

const optionMenu2 = document.querySelector(".select-menu2"),
    selectBtn2 = optionMenu2.querySelector(".select-btn2"),
    options2 = optionMenu2.querySelectorAll(".option2"),
    sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));

options2.forEach(option => {
    option.addEventListener("click", ()=> {
        let selectedOption = option.querySelector(".option-text2").innerText;
        sBtn_text2.innerText = selectedOption;
        console.log(selectedOption)
    });
});

const optionMenu3 = document.querySelector(".select-menu3"),
    selectBtn3 = optionMenu3.querySelector(".select-btn3"),
    options3 = optionMenu3.querySelectorAll(".option3"),
    sBtn_text3 = optionMenu3.querySelector(".sBtn-text3");

selectBtn3.addEventListener("click", () => optionMenu3.classList.toggle("active"));

options3.forEach(option => {
    option.addEventListener("click", ()=> {
        let selectedOption = option.querySelector(".option-text3").innerText;
        sBtn_text3.innerText = selectedOption;
        console.log(selectedOption)
    });
});

const optionMenu4 = document.querySelector(".select-menu4"),
    selectBtn4 = optionMenu4.querySelector(".select-btn4"),
    options4 = optionMenu4.querySelectorAll(".option4"),
    sBtn_text4 = optionMenu4.querySelector(".sBtn-text4");

selectBtn4.addEventListener("click", () => optionMenu4.classList.toggle("active"));

options4.forEach(option => {
    option.addEventListener("click", ()=> {
        let selectedOption = option.querySelector(".option-text4").innerText;
        sBtn_text4.innerText = selectedOption;
        console.log(selectedOption)
    });
});