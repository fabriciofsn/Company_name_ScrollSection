function responsiveMenu(){ 

    const btn_menu = document.querySelector(".btn-open");
    const btn_close = document.querySelector(".btn-close");
    const mobile = document.querySelector("nav.mobile");

    function openMenu(){
        mobile.style.right = '0';  
    }

    function closeMenu(){
        mobile.style.right = '-200px';
    }

    btn_close.addEventListener("click", closeMenu);
    btn_menu.addEventListener("click", openMenu);
}
responsiveMenu();

function currentYear(){ 
    const currentYear = document.querySelector(".year");
    const year = new Date().getFullYear();
    currentYear.innerHTML = year;
}
currentYear();

function scrollIntoSection(){ 

    const menu = document.querySelectorAll('.desktop li a[href^="#"]');

    function scrollLink(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
    
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    }

    menu.forEach((link) =>{
        link.addEventListener('click', scrollLink)
    })

}

scrollIntoSection();

function scrollIntoSectionMobile(){ 

    const menu = document.querySelectorAll('.mobile li a[href^="#"]');

    function scrollLink(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
    
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    }

    menu.forEach((link) =>{
        link.addEventListener('click', scrollLink)
    })

}

scrollIntoSectionMobile();
