//Navigation
let menuBtn = document.querySelector(".hamburger-menu")
let navBtn = document.querySelector(".hamburger-menu__btn")
let nav = document.querySelector(".nav")
let navMenu = document.querySelector(".menu-nav")
let navItems = document.querySelectorAll(".menu-nav-item")



let mobileNavOpen = false

menuBtn.addEventListener("click",() =>{
    
    if(!mobileNavOpen){
        navBtn.classList.add("open")
        nav.classList.add("open")
        navMenu.classList.add("open")
        navItems.forEach((item) =>{ item.classList.add("open")})
        
        mobileNavOpen=true
    }

    else{
        navBtn.classList.remove("open")
        nav.classList.remove("open")
        navMenu.classList.remove("open")
        navItems.forEach((item)=>{ item.classList.remove("open")})

        mobileNavOpen=false
    }
})



//Read More
let more = document.querySelectorAll(".more")
let btn = document.querySelectorAll(".readmore-btn")



for(let i = 0; i < btn.length;i++){
    
    for(let y = 0; y < more.length;y++)
        
    btn[0].addEventListener("click",() =>{
        more[0].classList.toggle("moreOpen")
        btn[0].classList.toggle("moreOpen")
    })

    btn[1].addEventListener("click",() =>{
        more[1].classList.toggle("moreOpen")
        btn[1].classList.toggle("moreOpen")  
    })

    btn[2].addEventListener("click",() =>{
        more[2].classList.toggle("moreOpen")
        btn[2].classList.toggle("moreOpen")
    })             
}



