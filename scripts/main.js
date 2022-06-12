// #region IMPORT ELEMENTŮ & PRVOTNÍ NASTAVENÍ PROMĚNNÝCH
// strany rotující 3D kostky
const front_3d = document.getElementById("front"); // white
const back_3d = document.getElementById("back"); // yellow
const right_3d = document.getElementById("right"); // red
const left_3d = document.getElementById("left"); // orangered
const top_3d = document.getElementById("top"); // blue
const bottom_3d = document.getElementById("bottom"); // green

// prvky pro vybrání barvy
const color_indicators = document.getElementsByClassName("choose-side");
const cancel = document.getElementById("cancel");

// ovládací prvky
const top_left_btn = document.getElementById("top-left"); // 0
const top_right_btn = document.getElementById("top-right"); // 1
const left_top_btn = document.getElementById("left-top"); // 2
const left_down_btn = document.getElementById("left-down"); // 3
const right_top_btn = document.getElementById("right-top"); // 4
const right_down_btn = document.getElementById("right-down"); // 5
const bottom_left_btn = document.getElementById("bottom-left"); // 6
const bottom_right_btn = document.getElementById("bottom-right"); // 7
const cube_control_center = document.getElementById("cube-control-center");

// strany kostky (2d strany)
const sides_2d = document.getElementsByClassName("game-container");

const mix_btn = document.getElementById("mix-cube-btn");

let sides_colors = {
    white: ["white", "white", "white", "white", "white", "white", "white", "white", "white"],
    red: ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
    yellow: ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"],
    orange: ["#fe7701", "#fe7701", "#fe7701", "#fe7701", "#fe7701", "#fe7701", "#fe7701", "#fe7701", "#fe7701"],
    green: ["green", "green", "green", "green", "green", "green", "green", "green", "green"],
    blue: ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
}

let selected_bool = false;
let selected_color = "none";
let was_cube_mixed = false;
// #endregion


// změní barvy na jednotlivých stranách kostky
function rotateCubeAccordingColor() {
    if (selected_color === "white") {
        //
        cube.style.transform = "rotateX(-30deg) rotateY(-20deg) rotateZ(0deg)";
        //
    } else if (selected_color === "red") {
        //
        cube.style.transform = "rotateX(-30deg) rotateY(-110deg) rotateZ(0deg)";
        //
    } else if (selected_color === "yellow") {
        //
        cube.style.transform = "rotateX(-30deg) rotateY(-200deg) rotateZ(0deg)";
        //
    } else if (selected_color === "orange") {
        //
        cube.style.transform = "rotateX(-30deg) rotateY(70deg) rotateZ(0deg)";
        //
    } else if (selected_color === "green") {
        //
        cube.style.transform = "rotateX(60deg) rotateY(0deg) rotateZ(20deg)";
        //
    } else if (selected_color === "blue") {
        //
        cube.style.transform = "rotateX(-120deg) rotateY(0deg) rotateZ(-20deg)";
        //
    } else if (selected_color == "none") {
        //
        cube.style.transform = "rotateX(-30deg) rotateY(-60deg) rotateZ(0deg)";
        //
    }

    cube.style.transitionDuration = "2s";
}

function rotateSideLeft(side) {
    let left_corner = side[0];
    let middle_top = side[1];

    side[0] = side[2];
    side[2] = side[8];
    side[8] = side[6];
    side[6] = left_corner;

    side[1] = side[5];
    side[5] = side[7];
    side[7] = side[3];
    side[3] = middle_top;
}

function rotateSideRight(side) {
    let left_corner = side[0];
    let middle_top = side[1];

    side[0] = side[6];
    side[6] = side[8];
    side[8] = side[2];
    side[2] = left_corner;

    side[1] = side[3];
    side[3] = side[7];
    side[7] = side[5];
    side[5] = middle_top;
}

function changeColors() {
    for (let j = 0; j < 9; j++) {
        sides_2d[0].children[0].children[j].style.backgroundColor = sides_colors.white[j];
        front_3d.children[j].style.backgroundColor = sides_colors.white[j];
        sides_2d[0].children[0].children[j].style.transition = "all 0.5s linear";
        front_3d.children[j].style.transition = "all 0.5s linear";
    }

    for (let j = 0; j < 9; j++) {
        sides_2d[0].children[1].children[j].style.backgroundColor = sides_colors.red[j];
        right_3d.children[j].style.backgroundColor = sides_colors.red[j];
        sides_2d[0].children[1].children[j].style.transition = "all 0.5s linear";
        right_3d.children[j].style.transition = "all 0.5s linear";
    }

    for (let j = 0; j < 9; j++) {
        sides_2d[0].children[2].children[j].style.backgroundColor = sides_colors.yellow[j];
        back_3d.children[j].style.backgroundColor = sides_colors.yellow[j];
        sides_2d[0].children[2].children[j].style.transition = "all 0.5s linear";
        back_3d.children[j].style.transition = "all 0.5s linear";
    }

    for (let j = 0; j < 9; j++) {
        sides_2d[0].children[3].children[j].style.backgroundColor = sides_colors.orange[j];
        left_3d.children[j].style.backgroundColor = sides_colors.orange[j];
        sides_2d[0].children[3].children[j].style.transition = "all 0.5s linear";
        left_3d.children[j].style.transition = "all 0.5s linear";
    }

    for (let j = 0; j < 9; j++) {
        sides_2d[0].children[4].children[j].style.backgroundColor = sides_colors.green[j];
        bottom_3d.children[j].style.backgroundColor = sides_colors.green[j];
        sides_2d[0].children[4].children[j].style.transition = "all 0.5s linear";
        bottom_3d.children[j].style.transition = "all 0.5s linear";
    }

    for (let j = 0; j < 9; j++) {
        sides_2d[0].children[5].children[j].style.backgroundColor = sides_colors.blue[j];
        top_3d.children[j].style.backgroundColor = sides_colors.blue[j];
        sides_2d[0].children[5].children[j].style.transition = "all 0.5s linear";
        top_3d.children[j].style.transition = "all 0.5s linear";
    }

    sessionStorage.setItem("colors-template", JSON.stringify(sides_colors));
}

function mixCube() {
    let random_num = Math.floor(Math.random() * 11); // random číslo 0-10 (kolikrát se otočí každá strana)
    console.log(random_num);

    // cyklus, který projde všechny strany (object properties)
    for (let property in sides_colors) {

        for (let i = 0; i < random_num; i++) {
            let random_controler = Math.floor(Math.random() * 8);

            switch (random_controler) {
                case 0:
                    topLeft(property);
                    break;
                case 1:
                    topRight(property);  
                    break;
                case 2:
                    leftTop(property);
                    break;
                case 3:
                    leftDown(property);
                    break;
                case 4:
                    rightTop(property);
                    break;
                case 5:
                    rightDown(property);
                    break;
                case 6:
                    bottomLeft(property);
                    break;
                case 7:
                    bottomRight(property);
                    break;
            }

            changeColors();
        }
    }
}

function checkIfSolved() {
    //
    for (let val of sides_colors.white) {
        if (val != "white") { return false; }
    }

    for (let val of sides_colors.red) {
        if (val != "red") { return false; }
    }

    for (let val of sides_colors.yellow) {
        if (val != "yellow") { return false; }
    }

    for (let val of sides_colors.orange) {
        if (val != "#fe7701") { return false; }
    }

    for (let val of sides_colors.green) {
        if (val != "green") { return false; }
    }

    for (let val of sides_colors.blue) {
        if (val != "blue") { return false; }
    }

    // if (was_cube_mixed === false) { return false; }

    return true;
    //
}

// výběr barvy
for (let i = 0; i < 6; i++) {
    color_indicators[0].children[i].addEventListener("click", (e) => {
        for (var x of color_indicators[0].children) {
            x.classList.remove("side-selected");
        }

        e.target.classList.add("side-selected");

        for (var z of sides_2d[0].children) {
            z.classList.remove("side-selected");
        }

        sides_2d[0].children[i].classList.add("side-selected");

        cube_control_center.style.backgroundColor = getComputedStyle(e.target).backgroundColor;

        selected_bool = true;
        selected_color = e.target.id.slice(7); // string barva
        // console.log(selected_color);

        rotateCubeAccordingColor();
    })
}

// zrušení barvy
cancel.addEventListener("click", () => {
    for (var z of color_indicators[0].children) {
        z.classList.remove("side-selected");
    }
    for (var x of sides_2d[0].children) {
        x.classList.remove("side-selected");
    }

    selected_bool = false;
    selected_color = "none";
    // console.log(selected_color);

    rotateCubeAccordingColor()

    cube_control_center.style.backgroundColor = "gray";
})


// #region FUNKCE POHYBU TLAČÍTKY
function topLeft(col) {
    if (col === "white" || col === "red" || col === "yellow" || col === "orange") {
        //
        let top_white_memory = sides_colors.white.slice(0, 3);

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
        //
    } else if (col === "green") {
        //
        let top_green_memory = sides_colors.green.slice(0, 3);

        sides_colors.green[0] = sides_colors.red[6];
        sides_colors.green[1] = sides_colors.red[3];
        sides_colors.green[2] = sides_colors.red[0];

        sides_colors.red[0] = sides_colors.blue[6];
        sides_colors.red[3] = sides_colors.blue[7];
        sides_colors.red[6] = sides_colors.blue[8];

        sides_colors.blue[6] = sides_colors.orange[8];
        sides_colors.blue[7] = sides_colors.orange[5];
        sides_colors.blue[8] = sides_colors.orange[2];

        sides_colors.orange[2] = top_green_memory[0];
        sides_colors.orange[5] = top_green_memory[1];
        sides_colors.orange[8] = top_green_memory[2];

        rotateSideRight(sides_colors.white);
        //
    } else if (col === "blue") {
        //
        let top_blue_memory = sides_colors.blue.slice(0, 3);

        sides_colors.blue[0] = sides_colors.red[2];
        sides_colors.blue[1] = sides_colors.red[5];
        sides_colors.blue[2] = sides_colors.red[8];

        sides_colors.red[2] = sides_colors.green[8];
        sides_colors.red[5] = sides_colors.green[7];
        sides_colors.red[8] = sides_colors.green[6];

        sides_colors.green[6] = sides_colors.orange[0];
        sides_colors.green[7] = sides_colors.orange[3];
        sides_colors.green[8] = sides_colors.orange[6];

        sides_colors.orange[0] = top_blue_memory[2];
        sides_colors.orange[3] = top_blue_memory[1];
        sides_colors.orange[6] = top_blue_memory[0];

        rotateSideRight(sides_colors.yellow);
        //
    }
}

function topRight(col) {
    if (col === "white" || col === "red" || col === "yellow" || col === "orange") {
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
        //
    } else if (col === "green") {
        //
        let top_green_memory = sides_colors.green.slice(0, 3);

        sides_colors.green[0] = sides_colors.orange[2];
        sides_colors.green[1] = sides_colors.orange[5];
        sides_colors.green[2] = sides_colors.orange[8];

        sides_colors.orange[2] = sides_colors.blue[8];
        sides_colors.orange[5] = sides_colors.blue[7];
        sides_colors.orange[8] = sides_colors.blue[6];

        sides_colors.blue[6] = sides_colors.red[0];
        sides_colors.blue[7] = sides_colors.red[3];
        sides_colors.blue[8] = sides_colors.red[6];

        sides_colors.red[0] = top_green_memory[2];
        sides_colors.red[3] = top_green_memory[1];
        sides_colors.red[6] = top_green_memory[0];

        rotateSideLeft(sides_colors.white);
        //
    } else if (col === "blue") {
        //
        let top_blue_memory = sides_colors.blue.slice(0, 3);

        sides_colors.blue[0] = sides_colors.orange[6];
        sides_colors.blue[1] = sides_colors.orange[3];
        sides_colors.blue[2] = sides_colors.orange[0];

        sides_colors.orange[0] = sides_colors.green[6];
        sides_colors.orange[3] = sides_colors.green[7];
        sides_colors.orange[6] = sides_colors.green[8];

        sides_colors.green[6] = sides_colors.red[8];
        sides_colors.green[7] = sides_colors.red[5];
        sides_colors.green[8] = sides_colors.red[2];

        sides_colors.red[2] = top_blue_memory[0];
        sides_colors.red[5] = top_blue_memory[1];
        sides_colors.red[8] = top_blue_memory[2];

        rotateSideLeft(sides_colors.yellow);
        //
    }
}

function leftTop(col) {
    if (col === "white") {
        //
        let left_white_memory = [sides_colors.white[0], sides_colors.white[3], sides_colors.white[6]];

        sides_colors.white[0] = sides_colors.green[0];
        sides_colors.white[3] = sides_colors.green[3];
        sides_colors.white[6] = sides_colors.green[6];

        sides_colors.green[0] = sides_colors.yellow[8];
        sides_colors.green[3] = sides_colors.yellow[5];
        sides_colors.green[6] = sides_colors.yellow[2];

        sides_colors.yellow[2] = sides_colors.blue[6];
        sides_colors.yellow[5] = sides_colors.blue[3];
        sides_colors.yellow[8] = sides_colors.blue[0];

        sides_colors.blue[0] = left_white_memory[0];
        sides_colors.blue[3] = left_white_memory[1];
        sides_colors.blue[6] = left_white_memory[2];

        rotateSideLeft(sides_colors.orange);
        //
    } else if (col === "red") {
        //
        let left_red_memory = [sides_colors.red[0], sides_colors.red[3], sides_colors.red[6]];

        sides_colors.red[0] = sides_colors.green[2];
        sides_colors.red[3] = sides_colors.green[1];
        sides_colors.red[6] = sides_colors.green[0];

        sides_colors.green[0] = sides_colors.orange[2];
        sides_colors.green[1] = sides_colors.orange[5];
        sides_colors.green[2] = sides_colors.orange[8];

        sides_colors.orange[2] = sides_colors.blue[8];
        sides_colors.orange[5] = sides_colors.blue[7];
        sides_colors.orange[8] = sides_colors.blue[6];

        sides_colors.blue[6] = left_red_memory[0];
        sides_colors.blue[7] = left_red_memory[1];
        sides_colors.blue[8] = left_red_memory[2];

        rotateSideLeft(sides_colors.white);
        //
    } else if (col === "yellow") {
        //
        let left_yellow_memory = [sides_colors.yellow[0], sides_colors.yellow[3], sides_colors.yellow[6]];

        sides_colors.yellow[0] = sides_colors.green[8];
        sides_colors.yellow[3] = sides_colors.green[5];
        sides_colors.yellow[6] = sides_colors.green[2];

        sides_colors.green[2] = sides_colors.white[2];
        sides_colors.green[5] = sides_colors.white[5];
        sides_colors.green[8] = sides_colors.white[8];

        sides_colors.white[2] = sides_colors.blue[2];
        sides_colors.white[5] = sides_colors.blue[5];
        sides_colors.white[8] = sides_colors.blue[8];

        sides_colors.blue[2] = left_yellow_memory[2];
        sides_colors.blue[5] = left_yellow_memory[1];
        sides_colors.blue[8] = left_yellow_memory[0];

        rotateSideLeft(sides_colors.red);
        //
    } else if (col === "orange") {
        //
        let left_orange_memory = [sides_colors.orange[0], sides_colors.orange[3], sides_colors.orange[6]];

        sides_colors.orange[0] = sides_colors.green[6];
        sides_colors.orange[3] = sides_colors.green[7];
        sides_colors.orange[6] = sides_colors.green[8];

        sides_colors.green[6] = sides_colors.red[8];
        sides_colors.green[7] = sides_colors.red[5];
        sides_colors.green[8] = sides_colors.red[2];

        sides_colors.red[2] = sides_colors.blue[0];
        sides_colors.red[5] = sides_colors.blue[1];
        sides_colors.red[8] = sides_colors.blue[2];

        sides_colors.blue[0] = left_orange_memory[2];
        sides_colors.blue[1] = left_orange_memory[1];
        sides_colors.blue[2] = left_orange_memory[0];

        rotateSideLeft(sides_colors.yellow);
        //
    } else if (col === "green") {
        //
        let left_blue_memory = [sides_colors.blue[0], sides_colors.blue[3], sides_colors.blue[6]];

        sides_colors.blue[0] = sides_colors.white[0];
        sides_colors.blue[3] = sides_colors.white[3];
        sides_colors.blue[6] = sides_colors.white[6];

        sides_colors.white[0] = sides_colors.green[0];
        sides_colors.white[3] = sides_colors.green[3];
        sides_colors.white[6] = sides_colors.green[6];

        sides_colors.green[0] = sides_colors.yellow[8];
        sides_colors.green[3] = sides_colors.yellow[5];
        sides_colors.green[6] = sides_colors.yellow[2];

        sides_colors.yellow[2] = left_blue_memory[2];
        sides_colors.yellow[5] = left_blue_memory[1];
        sides_colors.yellow[8] = left_blue_memory[0];

        rotateSideLeft(sides_colors.orange);
        //
    } else if (col === "blue") {
        //
        let left_blue_memory = [sides_colors.blue[0], sides_colors.blue[3], sides_colors.blue[6]];

        sides_colors.blue[0] = sides_colors.white[0];
        sides_colors.blue[3] = sides_colors.white[3];
        sides_colors.blue[6] = sides_colors.white[6];

        sides_colors.white[0] = sides_colors.green[0];
        sides_colors.white[3] = sides_colors.green[3];
        sides_colors.white[6] = sides_colors.green[6];

        sides_colors.green[0] = sides_colors.yellow[8];
        sides_colors.green[3] = sides_colors.yellow[5];
        sides_colors.green[6] = sides_colors.yellow[2];

        sides_colors.yellow[2] = left_blue_memory[2];
        sides_colors.yellow[5] = left_blue_memory[1];
        sides_colors.yellow[8] = left_blue_memory[0];

        rotateSideLeft(sides_colors.orange);
        //
    }
}

function leftDown(col) {
    if (col === "white") {
        //
        let left_white_memory = [sides_colors.white[0], sides_colors.white[3], sides_colors.white[6]];

        sides_colors.white[0] = sides_colors.blue[0];
        sides_colors.white[3] = sides_colors.blue[3];
        sides_colors.white[6] = sides_colors.blue[6];

        sides_colors.blue[0] = sides_colors.yellow[8];
        sides_colors.blue[3] = sides_colors.yellow[5];
        sides_colors.blue[6] = sides_colors.yellow[2];

        sides_colors.yellow[2] = sides_colors.green[6];
        sides_colors.yellow[5] = sides_colors.green[3];
        sides_colors.yellow[8] = sides_colors.green[0];

        sides_colors.green[0] = left_white_memory[0];
        sides_colors.green[3] = left_white_memory[1];
        sides_colors.green[6] = left_white_memory[2];

        rotateSideRight(sides_colors.orange);
        //
    } else if (col === "red") {
        //
        let left_red_memory = [sides_colors.red[0], sides_colors.red[3], sides_colors.red[6]];

        sides_colors.red[0] = sides_colors.blue[6];
        sides_colors.red[3] = sides_colors.blue[7];
        sides_colors.red[6] = sides_colors.blue[8];

        sides_colors.blue[8] = sides_colors.orange[2];
        sides_colors.blue[7] = sides_colors.orange[5];
        sides_colors.blue[6] = sides_colors.orange[8];

        sides_colors.orange[2] = sides_colors.green[0];
        sides_colors.orange[5] = sides_colors.green[1];
        sides_colors.orange[8] = sides_colors.green[2];

        sides_colors.green[2] = left_red_memory[0];
        sides_colors.green[1] = left_red_memory[1];
        sides_colors.green[0] = left_red_memory[2];

        rotateSideRight(sides_colors.white);
        //
    } else if (col === "yellow") {
        //
        let left_yellow_memory = [sides_colors.yellow[0], sides_colors.yellow[3], sides_colors.yellow[6]];

        sides_colors.yellow[0] = sides_colors.blue[8];
        sides_colors.yellow[3] = sides_colors.blue[5];
        sides_colors.yellow[6] = sides_colors.blue[2];

        sides_colors.blue[2] = sides_colors.white[2];
        sides_colors.blue[5] = sides_colors.white[5];
        sides_colors.blue[8] = sides_colors.white[8];

        sides_colors.white[2] = sides_colors.green[2];
        sides_colors.white[5] = sides_colors.green[5];
        sides_colors.white[8] = sides_colors.green[8];

        sides_colors.green[2] = left_yellow_memory[2];
        sides_colors.green[5] = left_yellow_memory[1];
        sides_colors.green[8] = left_yellow_memory[0];

        rotateSideRight(sides_colors.red);
        //
    } else if (col === "orange") {
        //
        let left_orange_memory = [sides_colors.orange[0], sides_colors.orange[3], sides_colors.orange[6]];

        sides_colors.orange[0] = sides_colors.blue[2];
        sides_colors.orange[3] = sides_colors.blue[1];
        sides_colors.orange[6] = sides_colors.blue[0];

        sides_colors.blue[0] = sides_colors.red[2];
        sides_colors.blue[1] = sides_colors.red[5];
        sides_colors.blue[2] = sides_colors.red[8];

        sides_colors.red[2] = sides_colors.green[8];
        sides_colors.red[5] = sides_colors.green[7];
        sides_colors.red[8] = sides_colors.green[6];

        sides_colors.green[6] = left_orange_memory[0];
        sides_colors.green[7] = left_orange_memory[1];
        sides_colors.green[8] = left_orange_memory[2];

        rotateSideRight(sides_colors.yellow);
        //
    } else if (col === "green") {
        //
        let left_blue_memory = [sides_colors.blue[0], sides_colors.blue[3], sides_colors.blue[6]];

        sides_colors.blue[0] = sides_colors.yellow[8];
        sides_colors.blue[3] = sides_colors.yellow[5];
        sides_colors.blue[6] = sides_colors.yellow[2];

        sides_colors.yellow[2] = sides_colors.green[6];
        sides_colors.yellow[5] = sides_colors.green[3];
        sides_colors.yellow[8] = sides_colors.green[0];

        sides_colors.green[0] = sides_colors.white[0];
        sides_colors.green[3] = sides_colors.white[3];
        sides_colors.green[6] = sides_colors.white[6];

        sides_colors.white[0] = left_blue_memory[0];
        sides_colors.white[3] = left_blue_memory[1];
        sides_colors.white[6] = left_blue_memory[2];

        rotateSideRight(sides_colors.orange);
        //
    } else if (col === "blue") {
        //
        let left_blue_memory = [sides_colors.blue[0], sides_colors.blue[3], sides_colors.blue[6]];

        sides_colors.blue[0] = sides_colors.yellow[8];
        sides_colors.blue[3] = sides_colors.yellow[5];
        sides_colors.blue[6] = sides_colors.yellow[2];

        sides_colors.yellow[2] = sides_colors.green[6];
        sides_colors.yellow[5] = sides_colors.green[3];
        sides_colors.yellow[8] = sides_colors.green[0];

        sides_colors.green[0] = sides_colors.white[0];
        sides_colors.green[3] = sides_colors.white[3];
        sides_colors.green[6] = sides_colors.white[6];

        sides_colors.white[0] = left_blue_memory[0];
        sides_colors.white[3] = left_blue_memory[1];
        sides_colors.white[6] = left_blue_memory[2];

        rotateSideRight(sides_colors.orange);
        //
    }
}

function rightTop(col) {
    if (col === "white") {
        //
        let right_white_memory = [sides_colors.white[2], sides_colors.white[5], sides_colors.white[8]];

        sides_colors.white[2] = sides_colors.green[2];
        sides_colors.white[5] = sides_colors.green[5];
        sides_colors.white[8] = sides_colors.green[8];

        sides_colors.green[2] = sides_colors.yellow[6];
        sides_colors.green[5] = sides_colors.yellow[3];
        sides_colors.green[8] = sides_colors.yellow[0];

        sides_colors.yellow[0] = sides_colors.blue[8];
        sides_colors.yellow[3] = sides_colors.blue[5];
        sides_colors.yellow[6] = sides_colors.blue[2];

        sides_colors.blue[2] = right_white_memory[0];
        sides_colors.blue[5] = right_white_memory[1];
        sides_colors.blue[8] = right_white_memory[2];

        rotateSideRight(sides_colors.red);
        //
    } else if (col === "red") {
        //
        let right_red_memory = [sides_colors.red[2], sides_colors.red[5], sides_colors.red[8]];

        sides_colors.red[2] = sides_colors.green[8];
        sides_colors.red[5] = sides_colors.green[7];
        sides_colors.red[8] = sides_colors.green[6];

        sides_colors.green[8] = sides_colors.orange[6];
        sides_colors.green[7] = sides_colors.orange[3];
        sides_colors.green[6] = sides_colors.orange[0];

        sides_colors.orange[0] = sides_colors.blue[2];
        sides_colors.orange[3] = sides_colors.blue[1];
        sides_colors.orange[6] = sides_colors.blue[0];

        sides_colors.blue[0] = right_red_memory[0];
        sides_colors.blue[1] = right_red_memory[1];
        sides_colors.blue[2] = right_red_memory[2];

        rotateSideRight(sides_colors.yellow);
        //
    } else if (col === "yellow") {
        //
        let right_yellow_memory = [sides_colors.yellow[2], sides_colors.yellow[5], sides_colors.yellow[8]];

        sides_colors.yellow[2] = sides_colors.green[6];
        sides_colors.yellow[5] = sides_colors.green[3];
        sides_colors.yellow[8] = sides_colors.green[0];

        sides_colors.green[0] = sides_colors.white[0];
        sides_colors.green[3] = sides_colors.white[3];
        sides_colors.green[6] = sides_colors.white[6];

        sides_colors.white[0] = sides_colors.blue[0];
        sides_colors.white[3] = sides_colors.blue[3];
        sides_colors.white[6] = sides_colors.blue[6];

        sides_colors.blue[0] = right_yellow_memory[2];
        sides_colors.blue[3] = right_yellow_memory[1];
        sides_colors.blue[6] = right_yellow_memory[0];

        rotateSideRight(sides_colors.orange);
        //
    } else if (col === "orange") {
        //
        let right_orange_memory = [sides_colors.orange[2], sides_colors.orange[5], sides_colors.orange[8]];

        sides_colors.orange[2] = sides_colors.green[0];
        sides_colors.orange[5] = sides_colors.green[1];
        sides_colors.orange[8] = sides_colors.green[2];

        sides_colors.green[0] = sides_colors.red[6];
        sides_colors.green[1] = sides_colors.red[3];
        sides_colors.green[2] = sides_colors.red[0];

        sides_colors.red[0] = sides_colors.blue[6];
        sides_colors.red[3] = sides_colors.blue[7];
        sides_colors.red[6] = sides_colors.blue[8];

        sides_colors.blue[6] = right_orange_memory[2];
        sides_colors.blue[7] = right_orange_memory[1];
        sides_colors.blue[8] = right_orange_memory[0];

        rotateSideRight(sides_colors.white);
        //
    } else if (col === "green") {
        //
        let right_blue_memory = [sides_colors.blue[2], sides_colors.blue[5], sides_colors.blue[8]];

        sides_colors.blue[2] = sides_colors.white[2];
        sides_colors.blue[5] = sides_colors.white[5];
        sides_colors.blue[8] = sides_colors.white[8];

        sides_colors.white[2] = sides_colors.green[2];
        sides_colors.white[5] = sides_colors.green[5];
        sides_colors.white[8] = sides_colors.green[8];

        sides_colors.green[2] = sides_colors.yellow[6];
        sides_colors.green[5] = sides_colors.yellow[3];
        sides_colors.green[8] = sides_colors.yellow[0];

        sides_colors.yellow[0] = right_blue_memory[2];
        sides_colors.yellow[3] = right_blue_memory[1];
        sides_colors.yellow[6] = right_blue_memory[0];

        rotateSideRight(sides_colors.red);
        //
    } else if (col === "blue") {
        //
        let right_blue_memory = [sides_colors.blue[2], sides_colors.blue[5], sides_colors.blue[8]];

        sides_colors.blue[2] = sides_colors.white[2];
        sides_colors.blue[5] = sides_colors.white[5];
        sides_colors.blue[8] = sides_colors.white[8];

        sides_colors.white[2] = sides_colors.green[2];
        sides_colors.white[5] = sides_colors.green[5];
        sides_colors.white[8] = sides_colors.green[8];

        sides_colors.green[2] = sides_colors.yellow[6];
        sides_colors.green[5] = sides_colors.yellow[3];
        sides_colors.green[8] = sides_colors.yellow[0];

        sides_colors.yellow[0] = right_blue_memory[2];
        sides_colors.yellow[3] = right_blue_memory[1];
        sides_colors.yellow[6] = right_blue_memory[0];

        rotateSideRight(sides_colors.red);
        //
    }
}

function rightDown(col) {
    if (col === "white") {
        //
        let right_white_memory = [sides_colors.white[2], sides_colors.white[5], sides_colors.white[8]];

        sides_colors.white[2] = sides_colors.blue[2];
        sides_colors.white[5] = sides_colors.blue[5];
        sides_colors.white[8] = sides_colors.blue[8];

        sides_colors.blue[2] = sides_colors.yellow[6];
        sides_colors.blue[5] = sides_colors.yellow[3];
        sides_colors.blue[8] = sides_colors.yellow[0];

        sides_colors.yellow[0] = sides_colors.green[8];
        sides_colors.yellow[3] = sides_colors.green[5];
        sides_colors.yellow[6] = sides_colors.green[2];

        sides_colors.green[2] = right_white_memory[0];
        sides_colors.green[5] = right_white_memory[1];
        sides_colors.green[8] = right_white_memory[2];

        rotateSideLeft(sides_colors.red);
        //
    } else if (col === "red") {
        //
        let right_red_memory = [sides_colors.red[2], sides_colors.red[5], sides_colors.red[8]];

        sides_colors.red[2] = sides_colors.blue[0];
        sides_colors.red[5] = sides_colors.blue[1];
        sides_colors.red[8] = sides_colors.blue[2];

        sides_colors.blue[0] = sides_colors.orange[6];
        sides_colors.blue[1] = sides_colors.orange[3];
        sides_colors.blue[2] = sides_colors.orange[0];

        sides_colors.orange[0] = sides_colors.green[6];
        sides_colors.orange[3] = sides_colors.green[7];
        sides_colors.orange[6] = sides_colors.green[8];

        sides_colors.green[6] = right_red_memory[2];
        sides_colors.green[7] = right_red_memory[1];
        sides_colors.green[8] = right_red_memory[0];

        rotateSideLeft(sides_colors.yellow);
        //
    } else if (col === "yellow") {
        //
        let right_yellow_memory = [sides_colors.yellow[2], sides_colors.yellow[5], sides_colors.yellow[8]];

        sides_colors.yellow[2] = sides_colors.blue[6];
        sides_colors.yellow[5] = sides_colors.blue[3];
        sides_colors.yellow[8] = sides_colors.blue[0];

        sides_colors.blue[0] = sides_colors.white[0];
        sides_colors.blue[3] = sides_colors.white[3];
        sides_colors.blue[6] = sides_colors.white[6];

        sides_colors.white[0] = sides_colors.green[0];
        sides_colors.white[3] = sides_colors.green[3];
        sides_colors.white[6] = sides_colors.green[6];

        sides_colors.green[0] = right_yellow_memory[2];
        sides_colors.green[3] = right_yellow_memory[1];
        sides_colors.green[6] = right_yellow_memory[0];

        rotateSideLeft(sides_colors.orange);
        //
    } else if (col === "orange") {
        //
        let right_orange_memory = [sides_colors.orange[2], sides_colors.orange[5], sides_colors.orange[8]];

        sides_colors.orange[2] = sides_colors.blue[8];
        sides_colors.orange[5] = sides_colors.blue[7];
        sides_colors.orange[8] = sides_colors.blue[6];

        sides_colors.blue[6] = sides_colors.red[0];
        sides_colors.blue[7] = sides_colors.red[3];
        sides_colors.blue[8] = sides_colors.red[6];

        sides_colors.red[0] = sides_colors.green[2];
        sides_colors.red[3] = sides_colors.green[1];
        sides_colors.red[6] = sides_colors.green[0];

        sides_colors.green[0] = right_orange_memory[0];
        sides_colors.green[1] = right_orange_memory[1];
        sides_colors.green[2] = right_orange_memory[2];

        rotateSideLeft(sides_colors.white);
        //
    } else if (col === "green") {
        //
        let right_blue_memory = [sides_colors.blue[2], sides_colors.blue[5], sides_colors.blue[8]];

        sides_colors.blue[2] = sides_colors.yellow[6];
        sides_colors.blue[5] = sides_colors.yellow[3];
        sides_colors.blue[8] = sides_colors.yellow[0];

        sides_colors.yellow[0] = sides_colors.green[8];
        sides_colors.yellow[3] = sides_colors.green[5];
        sides_colors.yellow[6] = sides_colors.green[2];

        sides_colors.green[2] = sides_colors.white[2];
        sides_colors.green[5] = sides_colors.white[5];
        sides_colors.green[8] = sides_colors.white[8];

        sides_colors.white[2] = right_blue_memory[0];
        sides_colors.white[5] = right_blue_memory[1];
        sides_colors.white[8] = right_blue_memory[2];

        rotateSideLeft(sides_colors.red);
        //
    } else if (col === "blue") {
        //
        let right_blue_memory = [sides_colors.blue[2], sides_colors.blue[5], sides_colors.blue[8]];

        sides_colors.blue[2] = sides_colors.yellow[6];
        sides_colors.blue[5] = sides_colors.yellow[3];
        sides_colors.blue[8] = sides_colors.yellow[0];

        sides_colors.yellow[0] = sides_colors.green[8];
        sides_colors.yellow[3] = sides_colors.green[5];
        sides_colors.yellow[6] = sides_colors.green[2];

        sides_colors.green[2] = sides_colors.white[2];
        sides_colors.green[5] = sides_colors.white[5];
        sides_colors.green[8] = sides_colors.white[8];

        sides_colors.white[2] = right_blue_memory[0];
        sides_colors.white[5] = right_blue_memory[1];
        sides_colors.white[8] = right_blue_memory[2];

        rotateSideLeft(sides_colors.red);
        //
    }
}

function bottomLeft(col) {
    if (col === "white" || col === "red" || col === "yellow" || col === "orange") {
        //
        let bottom_white_memory = sides_colors.white.slice(6);

        for (let k = 6; k < 9; k++) {
            sides_colors.white[k] = sides_colors.red[k];
        }
        for (let k = 6; k < 9; k++) {
            sides_colors.red[k] = sides_colors.yellow[k];
        }
        for (let k = 6; k < 9; k++) {
            sides_colors.yellow[k] = sides_colors.orange[k];
        }

        sides_colors.orange[6] = bottom_white_memory[0];
        sides_colors.orange[7] = bottom_white_memory[1];
        sides_colors.orange[8] = bottom_white_memory[2];

        rotateSideLeft(sides_colors.green);
        //
    } else if (col === "green") {
        //
        let bottom_green_memory = sides_colors.green.slice(6);

        sides_colors.green[6] = sides_colors.red[8];
        sides_colors.green[7] = sides_colors.red[5];
        sides_colors.green[8] = sides_colors.red[2];

        sides_colors.red[2] = sides_colors.blue[0];
        sides_colors.red[5] = sides_colors.blue[1];
        sides_colors.red[8] = sides_colors.blue[2];

        sides_colors.blue[0] = sides_colors.orange[6];
        sides_colors.blue[1] = sides_colors.orange[3];
        sides_colors.blue[2] = sides_colors.orange[0];

        sides_colors.orange[0] = bottom_green_memory[0];
        sides_colors.orange[3] = bottom_green_memory[1];
        sides_colors.orange[6] = bottom_green_memory[2];

        rotateSideLeft(sides_colors.yellow);
        //
    } else if (col === "blue") {
        //
        let bottom_blue_memory = sides_colors.blue.slice(6);

        sides_colors.blue[6] = sides_colors.red[0];
        sides_colors.blue[7] = sides_colors.red[3];
        sides_colors.blue[8] = sides_colors.red[6];

        sides_colors.red[0] = sides_colors.green[2];
        sides_colors.red[3] = sides_colors.green[1];
        sides_colors.red[6] = sides_colors.green[0];

        sides_colors.green[0] = sides_colors.orange[2];
        sides_colors.green[1] = sides_colors.orange[5];
        sides_colors.green[2] = sides_colors.orange[8];

        sides_colors.orange[2] = bottom_blue_memory[2];
        sides_colors.orange[5] = bottom_blue_memory[1];
        sides_colors.orange[8] = bottom_blue_memory[0];

        rotateSideLeft(sides_colors.white);
        //
    }
}

function bottomRight(col) {
    if (col === "white" || col === "red" || col === "yellow" || col === "orange") {
        //
        let bottom_white_memory = sides_colors.white.slice(6);

        for (let k = 6; k < 9; k++) {
            sides_colors.white[k] = sides_colors.orange[k];
        }
        for (let k = 6; k < 9; k++) {
            sides_colors.orange[k] = sides_colors.yellow[k];
        }
        for (let k = 6; k < 9; k++) {
            sides_colors.yellow[k] = sides_colors.red[k];
        }

        sides_colors.red[6] = bottom_white_memory[0];
        sides_colors.red[7] = bottom_white_memory[1];
        sides_colors.red[8] = bottom_white_memory[2];

        rotateSideRight(sides_colors.green);
        //
    } else if (col === "green") {
        //
        let bottom_green_memory = sides_colors.green.slice(6);

        sides_colors.green[6] = sides_colors.orange[0];
        sides_colors.green[7] = sides_colors.orange[3];
        sides_colors.green[8] = sides_colors.orange[6];

        sides_colors.orange[0] = sides_colors.blue[2];
        sides_colors.orange[3] = sides_colors.blue[1];
        sides_colors.orange[6] = sides_colors.blue[0];

        sides_colors.blue[0] = sides_colors.red[2];
        sides_colors.blue[1] = sides_colors.red[5];
        sides_colors.blue[2] = sides_colors.red[8];

        sides_colors.red[2] = bottom_green_memory[2];
        sides_colors.red[5] = bottom_green_memory[1];
        sides_colors.red[8] = bottom_green_memory[0];

        rotateSideRight(sides_colors.yellow);
        //
    } else if (col === "blue") {
        //
        let bottom_blue_memory = sides_colors.blue.slice(6);

        sides_colors.blue[6] = sides_colors.orange[8];
        sides_colors.blue[7] = sides_colors.orange[5];
        sides_colors.blue[8] = sides_colors.orange[2];

        sides_colors.orange[2] = sides_colors.green[0];
        sides_colors.orange[5] = sides_colors.green[1];
        sides_colors.orange[8] = sides_colors.green[2];

        sides_colors.green[0] = sides_colors.red[6];
        sides_colors.green[1] = sides_colors.red[3];
        sides_colors.green[2] = sides_colors.red[0];

        sides_colors.red[0] = bottom_blue_memory[0];
        sides_colors.red[3] = bottom_blue_memory[1];
        sides_colors.red[6] = bottom_blue_memory[2];

        rotateSideRight(sides_colors.white);
        //
    }
}
// #endregion


// #region OBSLUHA TLAČÍTEK (FUNKCE POHYBU)
top_left_btn.addEventListener("click", () => {
    if (selected_bool === false) {
        Swal.fire({
            icon: "warning",
            title: "Nevybral jsi barvu kostky pro pohyb",
            showConfirmButton: false,
            allowEscapeKey : false,
            allowOutsideClick: false,
            timer: 2500
        })
    } else {
        topLeft(selected_color);

        changeColors();

        if (checkIfSolved() === true) {
            if (was_cube_mixed === false) {
                Swal.fire({
                    icon: "info",
                    title: "Haha, složit kostku bez zamíchání dokáže úplně každý",
                    showConfirmButton: false,
                    allowEscapeKey : false,
                    allowOutsideClick: false,
                    timer: 2500
                })
            } else {
                window.open('./solved.html', '_blank');
            }
        }
    }
})

top_right_btn.addEventListener("click", () => {
    if (selected_bool === false) {
        Swal.fire({
            icon: "warning",
            title: "Nevybral jsi barvu kostky pro pohyb",
            showConfirmButton: false,
            allowEscapeKey : false,
            allowOutsideClick: false,
            timer: 2500
        })
    } else {
        topRight(selected_color);

        changeColors();

        if (checkIfSolved() === true) {
            if (was_cube_mixed === false) {
                Swal.fire({
                    icon: "info",
                    title: "Haha, složit kostku bez zamíchání dokáže úplně každý",
                    showConfirmButton: false,
                    allowEscapeKey : false,
                    allowOutsideClick: false,
                    timer: 2500
                })
            } else {
                window.open('./solved.html', '_blank');
            }
        }
    }
})

left_top_btn.addEventListener("click", () => {
    if (selected_bool === false) {
        Swal.fire({
            icon: "warning",
            title: "Nevybral jsi barvu kostky pro pohyb",
            showConfirmButton: false,
            allowEscapeKey : false,
            allowOutsideClick: false,
            timer: 2500
        })
    } else {
        leftTop(selected_color);

        changeColors();
        
        if (checkIfSolved() === true) {
            if (was_cube_mixed === false) {
                Swal.fire({
                    icon: "info",
                    title: "Haha, složit kostku bez zamíchání dokáže úplně každý",
                    showConfirmButton: false,
                    allowEscapeKey : false,
                    allowOutsideClick: false,
                    timer: 2500
                })
            } else {
                window.open('./solved.html', '_blank');
            }
        }
    }
})

left_down_btn.addEventListener("click", () => {
    if (selected_bool === false) {
        Swal.fire({
            icon: "warning",
            title: "Nevybral jsi barvu kostky pro pohyb",
            showConfirmButton: false,
            allowEscapeKey : false,
            allowOutsideClick: false,
            timer: 2500
        })
    } else {
        leftDown(selected_color);

        changeColors();
        
        if (checkIfSolved() === true) {
            if (was_cube_mixed === false) {
                Swal.fire({
                    icon: "info",
                    title: "Haha, složit kostku bez zamíchání dokáže úplně každý",
                    showConfirmButton: false,
                    allowEscapeKey : false,
                    allowOutsideClick: false,
                    timer: 2500
                })
            } else {
                window.open('./solved.html', '_blank');
            }
        }
    }
})

right_top_btn.addEventListener("click", () => {
    if (selected_bool === false) {
        Swal.fire({
            icon: "warning",
            title: "Nevybral jsi barvu kostky pro pohyb",
            showConfirmButton: false,
            allowEscapeKey : false,
            allowOutsideClick: false,
            timer: 2500
        })
    } else {
        rightTop(selected_color);

        changeColors();
        
        if (checkIfSolved() === true) {
            if (was_cube_mixed === false) {
                Swal.fire({
                    icon: "info",
                    title: "Haha, složit kostku bez zamíchání dokáže úplně každý",
                    showConfirmButton: false,
                    allowEscapeKey : false,
                    allowOutsideClick: false,
                    timer: 2500
                })
            } else {
                window.open('./solved.html', '_blank');
            }
        }
    }
})

right_down_btn.addEventListener("click", () => {
    if (selected_bool === false) {
        Swal.fire({
            icon: "warning",
            title: "Nevybral jsi barvu kostky pro pohyb",
            showConfirmButton: false,
            allowEscapeKey : false,
            allowOutsideClick: false,
            timer: 2500
        })
    } else {
        rightDown(selected_color);

        changeColors();
        
        if (checkIfSolved() === true) {
            if (was_cube_mixed === false) {
                Swal.fire({
                    icon: "info",
                    title: "Haha, složit kostku bez zamíchání dokáže úplně každý",
                    showConfirmButton: false,
                    allowEscapeKey : false,
                    allowOutsideClick: false,
                    timer: 2500
                })
            } else {
                window.open('./solved.html', '_blank');
            }
        }
    }
})

bottom_left_btn.addEventListener("click", () => {
    if (selected_bool === false) {
        Swal.fire({
            icon: "warning",
            title: "Nevybral jsi barvu kostky pro pohyb",
            showConfirmButton: false,
            allowEscapeKey : false,
            allowOutsideClick: false,
            timer: 2500
        })
    } else {
        bottomLeft(selected_color);

        changeColors();
        
        if (checkIfSolved() === true) {
            if (was_cube_mixed === false) {
                Swal.fire({
                    icon: "info",
                    title: "Haha, složit kostku bez zamíchání dokáže úplně každý",
                    showConfirmButton: false,
                    allowEscapeKey : false,
                    allowOutsideClick: false,
                    timer: 2500
                })
            } else {
                window.open('./solved.html', '_blank');
            }
        }
    }
})

bottom_right_btn.addEventListener("click", () => {
    if (selected_bool === false) {
        Swal.fire({
            icon: "warning",
            title: "Nevybral jsi barvu kostky pro pohyb",
            showConfirmButton: false,
            allowEscapeKey : false,
            allowOutsideClick: false,
            timer: 2500
        })
    } else {
        bottomRight(selected_color);

        changeColors();
        
        if (checkIfSolved() === true) {
            if (was_cube_mixed === false) {
                Swal.fire({
                    icon: "info",
                    title: "Haha, složit kostku bez zamíchání dokáže úplně každý",
                    showConfirmButton: false,
                    allowEscapeKey : false,
                    allowOutsideClick: false,
                    timer: 2500
                })
            } else {
                window.open('./solved.html', '_blank');
            }
        }
    }
})
// #endregion


// Zamíchání kostky
mix_btn.addEventListener("click", () => {
    if (was_cube_mixed === true) {
        Swal.fire({
            title: 'Kostku už jste jednou nechal rozházet, chcete to provést znovu?',
            text: 'Příjdete tím o dosavadní pokrok.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ano',
            cancelButtonText: `Ne`,
            }).then((result) => {
            if (result.isConfirmed) {
                mixCube();
                Swal.fire({
                    title: 'Kostka se úspěšně znovu rozházela',
                    icon: 'success',
                    showConfirmButton: false,
                    allowEscapeKey : false,
                    allowOutsideClick: false,
                    timer: 2500
                })
            }
        })
    } else {
        mixCube();
        was_cube_mixed = true;
    }
})

// Nastavení barev kostky po načtení stránky
window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem("colors-template") != null) {
        sides_colors = JSON.parse(sessionStorage.getItem("colors-template"));
    }

    changeColors();
});
