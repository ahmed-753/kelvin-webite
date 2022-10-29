const nav = document.getElementById("nav")
const navbtm = document.getElementById("nav-btn")
const navimg = document.getElementById("nav-img")

navbtm.onclick = () => {
    console.log('dfghjk')
    if(nav.classList.toggle("open")) {
        navimg.src= "./src/icons/NAV CLOSE.svg";
    }else {
        navimg.src= "./src/icons/NAV.svg";
    }

}
AOS.init();