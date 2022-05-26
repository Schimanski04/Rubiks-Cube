const navbar = document.getElementsByClassName("navbar");
const btn_scroll_top = document.getElementById("btn-scroll-top");

// navbar[0] - cely navbar
// navbar[0].children[0].children[0] - obrazek kostky
// navbar[0].children[0].children[1] - h1

window.addEventListener("scroll", () => {
    // console.log(window.scrollY);

    // zmenseni/zvetseni navbaru
    if (window.scrollY > 80) { // zmensit navbar
        navbar[0].style.padding = "0px 10px";
        navbar[0].children[0].children[0].style.width = "12.5%";
        navbar[0].children[0].children[1].style.fontSize = "2.25rem";
    } else {
        navbar[0].style.padding = "10px";
        navbar[0].children[0].children[0].style.width = "17.5%";
        navbar[0].children[0].children[1].style.fontSize = "2.75rem";
    }

    // zobrazit TOP btn
    if (window.scrollY < 100) { // 350
        btn_scroll_top.style.visibility = "hidden";
    } else {
        btn_scroll_top.style.visibility = "visible";
    }

})

btn_scroll_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
