document.querySelector(".btn").addEventListener("click", function(){
    var buttoninnerHTML = this.innerHTML;  
    
    
    var countryCode = prompt("enter country code ( e.g.-  91 for INDIA ) [ don't add spaces or + sign ]");
    var phoneNo = prompt("enter WhatsApp number [ don't add spaces ]");

var attachment1 = "http://wa.me/+"+ countryCode + phoneNo;
var link1 = document.querySelector("a");
link1.setAttribute("href",attachment1);     
});



let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

function copyText() {
      
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("Hi, have found this free WhatsApp add-on that helps users to send messages to any phone number in the world without saving that in our contact list. Check out - https://theyashvishnoi.github.io/Gist/  Pin/Star this message for future access.  ");
}