let toggle = document.querySelector('.toggle');
let nav = document.querySelector('nav');
let navToggle = document.querySelector('.toggle-nav');
let closeBtn = document.querySelector(".close-btn");


let ok = 0;

checkSize=()=>{
    if(window.innerWidth >= 1008){
        ok= 1;
    }else{
        ok= 0;
    }
}
checkSize();

// toggle button
let flag = 0;
toggle.addEventListener('click', ()=>{
    if(flag == 0){
        navToggle.classList.remove('animate__fadeOutUpBig');
        navToggle.classList.add('animate__fadeInDownBig');
        
        flag = 1;
        toggle.style.display = 'none';
        closeBtn.style.display = 'inline-block';
    }
});

closeBtn.addEventListener("click", ()=>{
    if(flag == 1){
        navToggle.classList.remove('animate__fadeInDown');
        navToggle.classList.add('animate__fadeOutUpBig');

        closeBtn.style.display = 'none';
        toggle.style.display = 'inline-block';
        flag = 0;
    }
})


// scroll active-link
let containers = document.querySelectorAll(".for-scroll");
let navA = document.querySelectorAll("nav a");
let toggleA = document.querySelectorAll('.toggle-nav a');
let contact = document.querySelector('.contact-a');

window.addEventListener('resize', ()=>{
     checkSize();
});

window.addEventListener('scroll',()=>{
    checkSize();
    let curr = '';
    containers.forEach(section =>{
        let top = section.offsetTop;
        if(pageYOffset >= top){
            curr = section.getAttribute('id');
        }
        if((pageYOffset + 500) >= contact.offsetTop){
            curr = contact.getAttribute('id');
        }

    });

    if(ok == 1){
        navA.forEach( link =>{
            link.classList.remove('active');
            if(link.classList.contains(curr)){
                link.classList.add('active');
            }
        })
    }else{
        toggleA.forEach( link =>{
            link.classList.remove('active');
            if(link.classList.contains(curr)){
                link.classList.add('active');
            }
        })
    }

});