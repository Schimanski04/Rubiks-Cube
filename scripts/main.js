// prvky pro vybrání barvy
const white_btn = document.getElementById("choose-white");
const red_btn = document.getElementById("choose-red");
const yellow_btn = document.getElementById("choose-yellow");
const orange_btn = document.getElementById("choose-orange");
const green_btn = document.getElementById("choose-green");
const blue_btn = document.getElementById("choose-blue");
const cancel = document.getElementById("cancel");

// ovládací prvky
const top_left = document.getElementById("top-left");
const top_right = document.getElementById("top-right");
const left_top = document.getElementById("left-top");
const left_down = document.getElementById("left-down");
const right_top = document.getElementById("right-top");
const right_down = document.getElementById("right-down");
const bottom_left = document.getElementById("bottom-left");
const bottom_right = document.getElementById("bottom-right");

const cube_control_center = document.getElementById("cube-control-center");

// strany kostky
const white_side = document.getElementById("white-side");
const red_side = document.getElementById("red-side");
const yellow_side = document.getElementById("yellow-side");
const orange_side = document.getElementById("orange-side");
const green_side = document.getElementById("green-side");
const blue_side = document.getElementById("blue-side");


let choose_btns = [white_btn, red_btn, yellow_btn, orange_btn, green_btn, blue_btn];

let cube_sides = [white_side, red_side, yellow_side, orange_side, green_side, blue_side];

let selected_bool = false;
let selected_color = "";

console.log(red_btn.id)
console.log(typeof(red_btn.id))

// výběr barvy
for (var btn of choose_btns) {
    btn.addEventListener("click", (e) => {
        for (var x of choose_btns) {
            x.classList.remove("side-selected");
        }

        let e_index = choose_btns.indexOf(e.target, 0); // index pro zvetšení celé strany kostky

        for (var z of cube_sides) {
            z.classList.remove("side-selected");
        }

        cube_sides[e_index].classList.add("side-selected");

        e.target.classList.add("side-selected");

        cube_control_center.style.backgroundColor = getComputedStyle(e.target).backgroundColor;

        selected_color = e.target.id.slice(7); // string barva
        selected_bool = true;
    })
}

// // výběr barvy
// white_btn.addEventListener("click", () => {
//     for (var z of choose_btns) {
//         z.classList.remove("side-selected");
//     }
//     for (var x of cube_sides) {
//         x.classList.remove("side-selected");
//     }

//     white_btn.classList.add("side-selected");
//     white_side.classList.add("side-selected");

//     selected_bool = true;
//     selected_color = "white";
// })

// red_btn.addEventListener("click", () => {
//     for (var z of choose_btns) {
//         z.classList.remove("side-selected");
//     }
//     for (var x of cube_sides) {
//         x.classList.remove("side-selected");
//     }

//     red_btn.classList.add("side-selected");
//     red_side.classList.add("side-selected");

//     selected_bool = true;
//     selected_color = "red";
// })

// yellow_btn.addEventListener("click", () => {
//     for (var z of choose_btns) {
//         z.classList.remove("side-selected");
//     }
//     for (var x of cube_sides) {
//         x.classList.remove("side-selected");
//     }

//     yellow_btn.classList.add("side-selected");
//     yellow_side.classList.add("side-selected");

//     selected_bool = true;
//     selected_color = "yellow";
// })

// orange_btn.addEventListener("click", () => {
//     for (var z of choose_btns) {
//         z.classList.remove("side-selected");
//     }
//     for (var x of cube_sides) {
//         x.classList.remove("side-selected");
//     }

//     orange_btn.classList.add("side-selected");
//     orange_side.classList.add("side-selected");

//     selected_bool = true;
//     selected_color = "orange";
// })

// green_btn.addEventListener("click", () => {
//     for (var z of choose_btns) {
//         z.classList.remove("side-selected");
//     }
//     for (var x of cube_sides) {
//         x.classList.remove("side-selected");
//     }

//     green_btn.classList.add("side-selected");
//     green_side.classList.add("side-selected");

//     selected_bool = true;
//     selected_color = "green";
// })

// blue_btn.addEventListener("click", () => {
//     for (var z of choose_btns) {
//         z.classList.remove("side-selected");
//     }
//     for (var x of cube_sides) {
//         x.classList.remove("side-selected");
//     }

//     blue_btn.classList.add("side-selected");
//     blue_side.classList.add("side-selected");

//     selected_bool = true;
//     selected_color = "blue";
// })

cancel.addEventListener("click", () => {
    for (var z of choose_btns) {
        z.classList.remove("side-selected");
    }
    for (var x of cube_sides) {
        x.classList.remove("side-selected");
    }

    selected_bool = false;
    selected_color = "";
    console.log(selected_bool);

    cube_control_center.style.backgroundColor = "gray";
})


// pohyb políček
top_left.addEventListener("click", () => {
    if (selected_bool === false) {
        alert("Nevybral jsi barvu pro pohyb!");
    } else {
        if (selected_color === "white") {
            alert("white")
        } else if (selected_color === "red") {
            //
        } else if (selected_color === "yellow") {
            //
        } else if (selected_color === "orange") {
            //
        } else if (selected_color === "green") {
            //
        } else if (selected_color === "blue") {
            //
        }
    }
})

top_right.addEventListener("click", () => {
    if (selected_bool === false) {
        alert("Nevybral jsi barvu pro pohyb!");
    } else {
        if (selected_color === "white") {
            //
        } else if (selected_color === "red") {
            //
        } else if (selected_color === "yellow") {
            //
        } else if (selected_color === "orange") {
            //
        } else if (selected_color === "green") {
            //
        } else if (selected_color === "blue") {
            //
        }
    }
})

left_top.addEventListener("click", () => {
    if (selected_bool === false) {
        alert("Nevybral jsi barvu pro pohyb!");
    } else {
        if (selected_color === "white") {
            //
        } else if (selected_color === "red") {
            //
        } else if (selected_color === "yellow") {
            //
        } else if (selected_color === "orange") {
            //
        } else if (selected_color === "green") {
            //
        } else if (selected_color === "blue") {
            //
        }
    }
})

left_down.addEventListener("click", () => {
    if (selected_bool === false) {
        alert("Nevybral jsi barvu pro pohyb!");
    } else {
        if (selected_color === "white") {
            //
        } else if (selected_color === "red") {
            //
        } else if (selected_color === "yellow") {
            //
        } else if (selected_color === "orange") {
            //
        } else if (selected_color === "green") {
            //
        } else if (selected_color === "blue") {
            //
        }
    }
})

right_top.addEventListener("click", () => {
    if (selected_bool === false) {
        alert("Nevybral jsi barvu pro pohyb!");
    } else {
        if (selected_color === "white") {
            //
        } else if (selected_color === "red") {
            //
        } else if (selected_color === "yellow") {
            //
        } else if (selected_color === "orange") {
            //
        } else if (selected_color === "green") {
            //
        } else if (selected_color === "blue") {
            //
        }
    }
})

right_down.addEventListener("click", () => {
    if (selected_bool === false) {
        alert("Nevybral jsi barvu pro pohyb!");
    } else {
        if (selected_color === "white") {
            //
        } else if (selected_color === "red") {
            //
        } else if (selected_color === "yellow") {
            //
        } else if (selected_color === "orange") {
            //
        } else if (selected_color === "green") {
            //
        } else if (selected_color === "blue") {
            //
        }
    }
})

bottom_left.addEventListener("click", () => {
    if (selected_bool === false) {
        alert("Nevybral jsi barvu pro pohyb!");
    } else {
        if (selected_color === "white") {
            //
        } else if (selected_color === "red") {
            //
        } else if (selected_color === "yellow") {
            //
        } else if (selected_color === "orange") {
            //
        } else if (selected_color === "green") {
            //
        } else if (selected_color === "blue") {
            //
        }
    }
})

bottom_right.addEventListener("click", () => {
    if (selected_bool === false) {
        alert("Nevybral jsi barvu pro pohyb!");
    } else {
        if (selected_color === "white") {
            //
        } else if (selected_color === "red") {
            //
        } else if (selected_color === "yellow") {
            //
        } else if (selected_color === "orange") {
            //
        } else if (selected_color === "green") {
            //
        } else if (selected_color === "blue") {
            //
        }
    }
})




// Zamíchání kostky
const mix_btn = document.getElementById("mix-cube-btn");

mix_btn.addEventListener("click", () => {
    console.log("Míchám");
    mixCube();
})

function mixCube() {
    let colors = ["white", "white", "white", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered"];

    console.log(colors.length);

    for (var s of cube_sides) {
        for (let i = 0; i < 9; i++) {
            if (i != 4) {
                let index_color = Math.floor(Math.random() * colors.length);
                s.children[i].style.backgroundColor = colors[index_color];
                colors.splice(index_color, 1);
            }
        }
    }

    // console.log(colors.length);
}

// Zamíchání kostky po načtení stránky
// window.addEventListener('DOMContentLoaded', () => {
//     mixCube();
// });
