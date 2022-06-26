
//Code to change the background of menu bar and remove scrollicon if window is scrolled
//inspired from (Olatoye, 2021)
var menu_bar = document.getElementById('menu');
var scrollicon = document.querySelector('.scroll-down');
var logo = document.querySelector('#logo a');
var navlink = document.querySelectorAll('.navlink')

window.onscroll = function(){
    var top = window.scrollY;
    
    if(top >= 1){
        //adding DOM properties to html tags if window is scrolled
        menu_bar.classList.add('active');
        logo.classList.add('active');
        navlink.classList.add('active');
        scrollicon.classList.add('hide');
    }else{
        //removing properties once window scroll is back at 0
        menu_bar.classList.remove('active');
		logo.classList.remove('active');
		navlink.classList.remove('active');
        scrollicon.classList.remove('hide');
    }
}
//End of Code



//code to animate the hamburger icon
//inspired from (codeSTACKr, 2019)

var x = 0;

//accessing html tags
var navbtn = document.querySelector(".hamburger-wrap");
var navbar = document.querySelector(".navbar");

//adding css animation to the html tags of hamburger menu
const animateLines = () => {
    document.querySelector("#top").classList.toggle("top-line-animate");
    document.querySelector("#middle").classList.toggle("middle-line-animate");
    document.querySelector("#bottom").classList.toggle("bottom-line-animate");
};


navbtn.addEventListener("click", () => {
    if(x == 0)
    {
        //calling animatelines function written above
        animateLines();
        //adding css attribute 'active' to navbar
        navbar.classList.add('active');
        x = 1;
    }
    else{
        animateLines();
        navbar.classList.remove('active');
        x = 0;
    }
});


//Code for projects 
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        panel.classList.add('active1');
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
        panel.classList.remove('active1');
    })
}
//End of Code
