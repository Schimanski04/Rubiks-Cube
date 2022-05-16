const navbar = document.getElementsByClassName("navbar"); // vzdy index 0
const title_div = document.getElementsByClassName("title");
const links_div = document.getElementsByClassName("links");

const btn_scroll_top = document.getElementById("btn-scroll-top");

// navbar[0] - cely navbar
// title_div[0].children[0] - obrazek kostky
// title_div[0].children[1] - h1
// links_div[0].children[0] - ./index.html
// links_div[0].children[1] - ./rules.html

// console.log(window.scrollY);

window.addEventListener("scroll", () => {
    // console.log(window.scrollY);

    // zmenseni/zvetseni navbaru
    if (window.scrollY > 80) { // zmensit navbar
        navbar[0].style.padding = "0px 10px";
        title_div[0].children[0].style.width = "12.5%";
        title_div[0].children[1].style.fontSize = "2.25rem";
        links_div[0].children[0].style.fontSize = "1.5rem";
        links_div[0].children[1].style.fontSize = "1.5rem";
    } else { // zvetsit navbar
        navbar[0].style.padding = "10px";
        title_div[0].children[0].style.width = "17.5%";
        title_div[0].children[1].style.fontSize = "2.75rem";
        links_div[0].children[0].style.fontSize = "1.5rem";
        links_div[0].children[1].style.fontSize = "1.5rem";
    }

    // zobrazit TOP btn
    if (window.scrollY < 100) { // 350
        btn_scroll_top.classList.add("hidden");
    } else {
        btn_scroll_top.classList.remove("hidden");
    }

})

btn_scroll_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
