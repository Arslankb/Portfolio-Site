// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled"); 
    }
}

// Navbar Hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// CV Download


document.getElementById('downloadCV').addEventListener('click', function() {
    // URL of your PDF CV file
    var pdfURL = '/assets/images/CV/Muhammad-Arslan-Angular Developer.pdf';

    // Create a link
    var link = document.createElement('a');
    link.href = pdfURL;
    link.target = '_blank'; // Open in a new tab/window
    link.download = 'Muhammad-Arslan-Angular-Developer '; // Set the desired file name for the download

    // Simulate a click on the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

