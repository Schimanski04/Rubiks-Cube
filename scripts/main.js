// strany rotující 3D kostky
const front_3d = document.getElementById("front"); // white
const back_3d = document.getElementById("back"); // yellow
const right_3d = document.getElementById("right"); // red
const left_3d = document.getElementById("left"); // orangered
const top_3d = document.getElementById("top"); // blue
const bottom_3d = document.getElementById("bottom"); // green

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

const mix_btn = document.getElementById("mix-cube-btn");

let choose_btns = [white_btn, red_btn, yellow_btn, orange_btn, green_btn, blue_btn];

let cube_sides = [white_side, red_side, yellow_side, orange_side, green_side, blue_side];

let sides_colors = {
    white: ["white", "white", "white", "white", "white", "white", "white", "white", "white"],
    red: ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
    yellow: ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
    orange: ["orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered"],
    green: ["green", "green", "green", "green", "green", "green", "green", "green", "green"],
    blue: ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
}

// sides_colors.line1[0] = 10;

console.log(sides_colors)

let selected_bool = false;
let selected_color = "";

// console.log(red_btn.id);
// console.log(typeof(red_btn.id));

// změní barvy na jednotlivých stranách kostky
function changeColors() {
    for (let i = 0; i < 6; i++) {
        if (i == 0) {
            //
            for (let j = 0; j < 9; j++) {
                white_side.children[j].style.backgroundColor = sides_colors.white[j];
                front_3d.children[j].style.backgroundColor = sides_colors.white[j];
            }
            //
        } else if (i == 1) {
            //
            for (let j = 0; j < 9; j++) {
                red_side.children[j].style.backgroundColor = sides_colors.red[j];
                right_3d.children[j].style.backgroundColor = sides_colors.red[j];
            }
            //
        } else if (i == 2) {
            //
            for (let j = 0; j < 9; j++) {
                yellow_side.children[j].style.backgroundColor = sides_colors.yellow[j];
                back_3d.children[j].style.backgroundColor = sides_colors.yellow[j];
            }
            //
        } else if (i == 3) {
            //
            for (let j = 0; j < 9; j++) {
                orange_side.children[j].style.backgroundColor = sides_colors.orange[j];
                left_3d.children[j].style.backgroundColor = sides_colors.orange[j];
            }
            //
        } else if (i == 4) {
            //
            for (let j = 0; j < 9; j++) {
                green_side.children[j].style.backgroundColor = sides_colors.green[j];
                bottom_3d.children[j].style.backgroundColor = sides_colors.green[j];
            }
            //
        } else if (i == 5) {
            //
            for (let j = 0; j < 9; j++) {
                blue_side.children[j].style.backgroundColor = sides_colors.blue[j];
                top_3d.children[j].style.backgroundColor = sides_colors.blue[j];
            }
            //
        }
    }
}

function rotateSideLeft(side) {
    let first_element = side[0];
    let second_element = side[1];

    side[0] = side[2];
    side[2] = side[8];
    side[8] = side[6];
    side[6] = first_element;

    side[1] = side[5];
    side[5] = side[7];
    side[7] = side[3];
    side[3] = second_element;
}

function rotateSideRight(side) {
    let first_element = side[0];
    let second_element = side[1];

    side[0] = side[6];
    side[6] = side[8];
    side[8] = side[2];
    side[2] = first_element;

    side[1] = side[3];
    side[3] = side[7];
    side[7] = side[5];
    side[5] = second_element;
}

function checkIfSolved() {
    if (sides_colors.white == Array("white", "white", "white", "white", "white", "white", "white", "white", "white") /*&& sides_colors.red == ["red", "red", "red", "red", "red", "red", "red", "red", "red"] && sides_colors.yellow == ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"] && sides_colors.orange == ["orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered"] && sides_colors.green == ["green", "green", "green", "green", "green", "green", "green", "green", "green"] && sides_colors.blue == ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"]*/) {
        return true;
        // alert("Kostka je složená! Gratuluji");
    } else {
        return false;
    }
}

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

        selected_bool = true;
        selected_color = e.target.id.slice(7); // string barva
    })
}

// zrušení barvy
cancel.addEventListener("click", () => {
    for (var z of choose_btns) {
        z.classList.remove("side-selected");
    }
    for (var x of cube_sides) {
        x.classList.remove("side-selected");
    }

    selected_bool = false;
    selected_color = "";
    // console.log(selected_bool);

    cube_control_center.style.backgroundColor = "gray";
})


// pohyb políček
top_left.addEventListener("click", () => {
    if (selected_bool === false) {
        alert("Nevybral jsi barvu pro pohyb!");
    } else {
        if (selected_color === "white") {
            let top_white_memory = sides_colors.white.slice(0, 3);

            // for (let prop in sides_colors) {
            //     console.log(`${prop}: ${sides_colors[prop]}`);
            // }

            // sides_colors.white.slice(0, 3) = sides_colors.red.slice(0,3);

            for (let k = 0; k < 3; k++) {
                sides_colors.white[k] = sides_colors.red[k];
            }
            for (let k = 0; k < 3; k++) {
                sides_colors.red[k] = sides_colors.yellow[k];
            }
            for (let k = 0; k < 3; k++) {
                sides_colors.yellow[k] = sides_colors.orange[k];
            }
            for (let k = 0; k < 3; k++) {
                sides_colors.orange[k] = top_white_memory[k];
            }

            rotateSideRight(sides_colors.blue);

            // console.log(top_white_memory)

            // sides_colors.orange[0] = "purple"

            // console.log(typeof(list(sides_colors.white.slice(0, 3))))

            changeColors();

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
            let top_white_memory = sides_colors.white.slice(0, 3);

            for (let k = 0; k < 3; k++) {
                sides_colors.white[k] = sides_colors.orange[k];
            }
            for (let k = 0; k < 3; k++) {
                sides_colors.orange[k] = sides_colors.yellow[k];
            }
            for (let k = 0; k < 3; k++) {
                sides_colors.yellow[k] = sides_colors.red[k];
            }
            for (let k = 0; k < 3; k++) {
                sides_colors.red[k] = top_white_memory[k];
            }

            rotateSideLeft(sides_colors.blue);

            changeColors();
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
            let left_white_memory = [sides_colors.white[0], "", "", sides_colors.white[3], "", "", sides_colors.white[6]]

            for (let k = 0; k < 7; k += 3) {
                sides_colors.white[k] = sides_colors.green[k];
            }
            for (let k = 0; k < 7; k += 3) {
                sides_colors.green[k] = sides_colors.yellow[k];
            }
            for (let k = 0; k < 7; k += 3) {
                sides_colors.yellow[k+2] = sides_colors.blue[k];
            }
            for (let k = 0; k < 7; k += 3) {
                sides_colors.blue[k] = left_white_memory[k];
            }

            rotateSideLeft(sides_colors.orange);

            changeColors();
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
            let left_white_memory = [sides_colors.white[0], "", "", sides_colors.white[3], "", "", sides_colors.white[6]]

            for (let k = 0; k < 7; k += 3) {
                sides_colors.white[k] = sides_colors.blue[k];
            }
            for (let k = 0; k < 7; k += 3) {
                sides_colors.blue[k] = sides_colors.yellow[k];
            }
            for (let k = 0; k < 7; k += 3) {
                sides_colors.yellow[k+2] = sides_colors.green[k];
            }
            for (let k = 0; k < 7; k += 3) {
                sides_colors.green[k] = left_white_memory[k];
            }

            rotateSideRight(sides_colors.orange);

            changeColors();
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
            let right_white_memory = [sides_colors.white[0], "", "", sides_colors.white[3], "", "", sides_colors.white[6]]

            for (let k = 2; k < 9; k += 3) {
                sides_colors.white[k] = sides_colors.green[k];
            }
            for (let k = 2; k < 9; k += 3) {
                sides_colors.green[k] = sides_colors.yellow[k];
            }
            for (let k = 2; k < 9; k += 3) {
                sides_colors.yellow[k-2] = sides_colors.blue[k];
            }
            for (let k = 2; k < 9; k += 3) {
                sides_colors.blue[k] = right_white_memory[k-2];
            }

            rotateSideRight(sides_colors.red);

            changeColors();
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
            let right_white_memory = [sides_colors.white[0], "", "", sides_colors.white[3], "", "", sides_colors.white[6]]

            for (let k = 2; k < 9; k += 3) {
                sides_colors.white[k] = sides_colors.blue[k];
            }
            for (let k = 2; k < 9; k += 3) {
                sides_colors.blue[k] = sides_colors.yellow[k];
            }
            for (let k = 2; k < 9; k += 3) {
                sides_colors.yellow[k-2] = sides_colors.green[k];
            }
            for (let k = 2; k < 9; k += 3) {
                sides_colors.green[k] = right_white_memory[k-2];
            }

            rotateSideLeft(sides_colors.red);

            changeColors();
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
            let bottom_white_memory = ["", "", "", "", "", "", sides_colors.white[0], sides_colors.white[3], sides_colors.white[6]]

            for (let k = 6; k < 9; k++) {
                sides_colors.white[k] = sides_colors.red[k];
            }
            for (let k = 6; k < 9; k++) {
                sides_colors.red[k] = sides_colors.yellow[k];
            }
            for (let k = 6; k < 9; k++) {
                sides_colors.yellow[k] = sides_colors.orange[k];
            }
            for (let k = 6; k < 9; k++) {
                sides_colors.orange[k] = bottom_white_memory[k];
            }

            rotateSideLeft(sides_colors.green);

            changeColors();
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
            let bottom_white_memory = ["", "", "", "", "", "", sides_colors.white[0], sides_colors.white[3], sides_colors.white[6]]

            for (let k = 6; k < 9; k++) {
                sides_colors.white[k] = sides_colors.orange[k];
            }
            for (let k = 6; k < 9; k++) {
                sides_colors.orange[k] = sides_colors.yellow[k];
            }
            for (let k = 6; k < 9; k++) {
                sides_colors.yellow[k] = sides_colors.red[k];
            }
            for (let k = 6; k < 9; k++) {
                sides_colors.red[k] = bottom_white_memory[k];
            }

            rotateSideRight(sides_colors.green);

            changeColors();
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
mix_btn.addEventListener("click", () => {
    console.log("Míchám");
    mix_btn.style.pointerEvents = "none";
    mixCube();
})

function mixCube() {
    let colors = ["white", "white", "white", "white", "white", "white", "white", "white", "red", "red", "red", "red", "red", "red", "red", "red", "green", "green", "green", "green", "green", "green", "green", "green", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered", "orangered"];

    console.log(colors.length);

    for (let i = 0; i < 6; i++) { // cyklus pro random generaci barev
        switch (i) {
            case 0:
                for (let j = 0; j < 9; j++) {
                    if (j != 4) {
                        let index_color = Math.floor(Math.random() * colors.length);
                        sides_colors.white[j] = colors[index_color];
                        colors.splice(index_color, 1);
                    }
                }
                break;
            case 1:
                for (let j = 0; j < 9; j++) {
                    if (j != 4) {
                        let index_color = Math.floor(Math.random() * colors.length);
                        sides_colors.red[j] = colors[index_color];
                        colors.splice(index_color, 1);
                    }
                }
                break;
            case 2:
                for (let j = 0; j < 9; j++) {
                    if (j != 4) {
                        let index_color = Math.floor(Math.random() * colors.length);
                        sides_colors.yellow[j] = colors[index_color];
                        colors.splice(index_color, 1);
                    }
                }
                break;
            case 3:
                for (let j = 0; j < 9; j++) {
                    if (j != 4) {
                        let index_color = Math.floor(Math.random() * colors.length);
                        sides_colors.orange[j] = colors[index_color];
                        colors.splice(index_color, 1);
                    }
                }
                break;
            case 4:
                for (let j = 0; j < 9; j++) {
                    if (j != 4) {
                        let index_color = Math.floor(Math.random() * colors.length);
                        sides_colors.green[j] = colors[index_color];
                        colors.splice(index_color, 1);
                    }
                }
                break;
            case 5:
                for (let j = 0; j < 9; j++) {
                    if (j != 4) {
                        let index_color = Math.floor(Math.random() * colors.length);
                        sides_colors.blue[j] = colors[index_color];
                        colors.splice(index_color, 1);
                    }
                }
                break;
        }
    }

    console.log(colors.length);
    console.log(sides_colors);

    changeColors();
}

// for (let prop in sides_colors) {
//     console.log(`${prop}: ${sides_colors[prop]}`);
// }

// Zamíchání kostky po načtení stránky
// window.addEventListener('DOMContentLoaded', () => {
//     mixCube();
// });

// Nastavení barev kostky po načtení stránky
window.addEventListener('DOMContentLoaded', () => {
    changeColors();
});
