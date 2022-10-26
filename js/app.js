
let toggleBtn=document.querySelector('.toggle');
let tagMenu = document.querySelector('.tabMenu');
toggleBtn.onclick=function(){
    tagMenu.classList.toggle('active');
}

let ul = document.querySelector(".navbar-nav");
let slider =document.querySelector(".slider");

const navMenu = [   { name : "home", id:"#home" },
                    { name : "about", id:"#about" }, 
                    { name : "portfolio", id:"#portfolio" }, 
                    { name : "services", id:"#services" }, 
                    { name : "testimonial", id:"#testimonial" },
                    { name : "contact", id:"#contact" }
                ];

const handleChange = (event) =>{
  const clickedId= event.target.id;
  const clickedATag = document.getElementById(clickedId);
  const clickedATagOffsetLeft = clickedATag.offsetLeft;
  slider.style.width = clickedATag.offsetWidth + "px";
  slider.style.transform = `translateX(${clickedATagOffsetLeft}px)`;
  
}
for (let i = 0; i < navMenu.length; i++) {
    let li = document.createElement("li");
    li.classList.add("nav-item");
    let a = document.createElement("a");
    a.classList.add("nav-link", "text-light","px-2", "px-lg-4");
    a.setAttribute('href', `${navMenu[i].id}`);
    a.id= i;
    a.textContent = navMenu[i].name.toUpperCase();

    a.addEventListener("click", handleChange); 
    li.appendChild(a);  
    ul.append(li);

    if(i === 0) {
        slider.style.width = li.offsetWidth + "px";
    }
    
}

let line1 =document.querySelector(".line1")
let line2 =document.querySelector(".line2")
let line3 =document.querySelector(".line3")
let hamburgerTag = document.querySelector(".hamburger");
hamburgerTag.addEventListener("click", ()=>{
    line2.classList.toggle("hideLine2");
    line1.classList.toggle("rotatePlusDeg");
    line3.classList.toggle("rotateMinusDeg");
})